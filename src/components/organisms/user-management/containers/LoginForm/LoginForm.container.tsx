import { FC, memo, useCallback } from "react";
import { isStrongPassword, isEmail } from "validator";
import { FormControl, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  StyledLoginForm,
  StyledInputTemplate,
  StyledButtonsContainer,
} from "./LoginForm.styles";

import { useStoreActions } from "@/redux";
import { RoutePaths, utils } from "@/global";
import { constants } from "@/networking";
import { AlertSeverity } from "@/components/molecules/CustomAlert/state/alert-model";

import { useSubmitLogin } from "./network-hooks/useSubmitLogin";

export interface LoginFormInputs {
  email: string;
  password: string;
}

const _LoginForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<LoginFormInputs>({
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

  const { mutate: submitLogin } = useSubmitLogin({
    url: constants.LoginEndPoint,
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
            message: message ?? "An error occurred while logging in",
            severity: AlertSeverity.Error,
          });
        } else if (data) {
          const { jwt, user } = data;

          if (!jwt || !user) return;

          storeUser({
            id: utils.generateRandomNumber(1000),
            jwt,
            username: user.username,
          });
          navigate(RoutePaths.Store);
        }
      },
    },
  });

  const onLogin = ({ email, password }: LoginFormInputs) => {
    submitLogin({ identifier: email, password });
  };

  const title = "Please log in to continue";

  const handleChange = useCallback(
    (name: keyof LoginFormInputs) => {
      void trigger(name);
    },
    [trigger],
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <StyledLoginForm component="form" onSubmit={handleSubmit(onLogin)}>
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
                data-cy="login-email"
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
                data-cy="login-password"
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
        <Button
          data-cy="button"
          variant="outlined"
          disabled={!isValid}
          type="submit"
        >
          Log In
        </Button>
        <Button
          data-cy="toggle-auth-form-button"
          onClick={() => navigate(RoutePaths.SignUp)}
          color="secondary"
        >
          {`I don't have an account`}
        </Button>
      </StyledButtonsContainer>
    </StyledLoginForm>
  );
};

const LoginForm = memo(_LoginForm);
export default LoginForm;
