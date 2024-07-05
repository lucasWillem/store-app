import { FC, memo } from "react";
import { CircularProgress } from "@mui/material";
import { StyledLoaderWrapper } from "./Loader.styles";

interface LoaderProps {
  isLoading: boolean;
}

const _Loader: FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <StyledLoaderWrapper data-cy="loader">
          <CircularProgress color="inherit" />
        </StyledLoaderWrapper>
      )}
    </>
  );
};

const Loader = memo(_Loader);
export default Loader;
