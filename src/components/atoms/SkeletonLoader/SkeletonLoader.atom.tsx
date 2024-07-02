import { FC, memo } from "react";
import {
  StyledSkeletonLoader,
  StyledSkeletonLoaderWrapper,
} from "./SkeletonLoader.styles";

interface SkeletonLoaderProps {
  isLoading: boolean;
}

const SkeletonLoader: FC<SkeletonLoaderProps> = ({ isLoading }) => {
  return (
    <StyledSkeletonLoaderWrapper>
      {isLoading && (
        <StyledSkeletonLoader
          variant="rectangular"
          width="100%"
          height="100%"
        />
      )}
    </StyledSkeletonLoaderWrapper>
  );
};

export default memo(SkeletonLoader);
