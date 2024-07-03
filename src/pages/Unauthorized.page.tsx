import { PageWrapper } from "@/components/templates/PageWrapper";
import { Typography } from "@mui/material";
import { FC } from "react";

const UnauthorizedPage: FC = () => {
  return (
    <PageWrapper>
      <Typography variant="body1">Unauthorized</Typography>
    </PageWrapper>
  );
};

export default UnauthorizedPage;
