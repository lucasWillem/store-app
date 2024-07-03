import { FC, memo, useCallback } from "react";
import { isStrongPassword, isEmail } from "validator";
import { FormControl, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  StyledSignUpForm,
  StyledInputTemplate,
  StyledButtonsContainer,
} from "./SignUpForm.styles";

import { useStoreActions } from "@/redux";
import { RoutePaths } from "@/global";

import { useSignUpUser } from "../../network-hooks/useSignUpUser";
import { AuthenticationEndPoints } from "../../constants";
import { AlertSeverity } from "@/components/molecules/CustomAlert/state/alert-model";

export interface SignUpFormInputs {
  email: string;
  password: string;
}

const SignUpForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<SignUpFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const storeUser = useStoreActions((actions) => actions.user.storeUser);

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const configureLoader = useStoreActions(
    (actions) => actions.loader.configureLoader,
  );

  const navigate = useNavigate();

  const { mutate: registerUser } = useSignUpUser({
    url: AuthenticationEndPoints.Register,
    options: {
      onMutate: () => {
        configureLoader({ isVisible: true });
      },
      onSettled: (data, error) => {
        configureLoader({ isVisible: false });

        if (error) {
          const { message } = error as Error;
          configureAlert({
            isVisible: true,
            message: message,
            severity: AlertSeverity.Error,
          });
        } else if (data) {
          const { jwt, user } = data;

          if (!jwt || !user) return;

          storeUser({
            jwt,
            username: user.username,
          });
          navigate(RoutePaths.Store);
        }
      },
    },
  });

  const onSignUp = (data: SignUpFormInputs) => {
    const userData = {
      username: data.email,
      email: data.email,
      password: data.password,
    };
    registerUser(userData);
  };

  const title = "Please register an account";

  const handleChange = useCallback(
    (name: keyof SignUpFormInputs) => {
      trigger(name);
    },
    [trigger],
  );

  return (
    <StyledSignUpForm component="form" onSubmit={handleSubmit(onSignUp)}>
      <Typography color="primary" variant="h6">
        {title}
      </Typography>
      <StyledInputTemplate>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormControl>
              <TextField
                {...field}
                data-testid="email"
                label="Email"
                variant="outlined"
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e);
                  handleChange("email");
                }}
                placeholder="Email"
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : null}
              />
            </FormControl>
          )}
          rules={{
            required: "Email is required",
            validate: (value) =>
              isEmail(value) || "Please provide a valid email address",
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <FormControl>
              <TextField
                {...field}
                data-testid="password"
                label="Password"
                variant="outlined"
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e);
                  handleChange("password");
                }}
                placeholder="Password"
                type="password"
                error={Boolean(errors.password)}
                helperText={errors.password ? errors.password.message : null}
              />
            </FormControl>
          )}
          rules={{
            required: "Password is required",
            validate: (value) =>
              isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
              }) || "8+ chars, 1 uppercase, 1 special char, 1 number",
          }}
        />
      </StyledInputTemplate>

      <StyledButtonsContainer>
        <Button variant="outlined" disabled={!isValid} type="submit">
          Sign Up
        </Button>
        <Button onClick={() => navigate(RoutePaths.Login)} color="secondary">
          {`I already have an account`}
        </Button>
      </StyledButtonsContainer>
    </StyledSignUpForm>
  );
};

export default memo(SignUpForm);
