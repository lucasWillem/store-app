import { SignUpForm } from "@/components/organisms/user-management/containers/SignUpForm";
import { PageWrapper } from "@/components/templates/PageWrapper";
import { FC } from "react";

const SignUpPage: FC = () => {
  return (
    <PageWrapper>
      <SignUpForm />
    </PageWrapper>
  );
};

export default SignUpPage;
