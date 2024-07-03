import { FC } from "react";
import { LoginForm } from "@/components/organisms/user-management/containers/LoginForm";
import { PageWrapper } from "@/components/templates/PageWrapper";

const LoginPage: FC = () => {
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
};

export default LoginPage;
