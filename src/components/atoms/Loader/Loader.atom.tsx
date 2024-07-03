import { FC, memo } from "react";
import { CircularProgress } from "@mui/material";
import { StyledLoaderWrapper } from "./Loader.styles";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <StyledLoaderWrapper>
          <CircularProgress color="inherit" />
        </StyledLoaderWrapper>
      )}
    </>
  );
};

export default memo(Loader);
