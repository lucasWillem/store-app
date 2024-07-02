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
import { RoutePaths } from "@/global";

import { useSubmitLogin } from "../../network-hooks/useSubmitLogin";
import { AuthenticationEndPoints } from "../../constants";

export interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
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

  const navigate = useNavigate();

  const { mutate: loginUser } = useSubmitLogin({
    url: AuthenticationEndPoints.Login,
    options: {
      onError: (error) => {
        console.error(error);
      },
      onSuccess: (userData) => {
        const { jwt, user } = userData;

        if (!jwt || !user) return;

        storeUser({
          jwt,
          username: user.username,
        });
        navigate(RoutePaths.Store);
      },
    },
  });

  const onLogin = ({ email, password }: LoginFormInputs) => {
    loginUser({ identifier: email, password });
  };

  const title = "Please log in to continue";

  const handleChange = useCallback(
    (name: keyof LoginFormInputs) => {
      trigger(name);
    },
    [trigger],
  );

  return (
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
          Log In
        </Button>
        <Button onClick={() => navigate(RoutePaths.SignUp)} color="secondary">
          {`I don't have an account`}
        </Button>
      </StyledButtonsContainer>
    </StyledLoginForm>
  );
};

export default memo(LoginForm);
