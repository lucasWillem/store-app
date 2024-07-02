import { styled, Theme, SkeletonProps, Skeleton, Box } from "@mui/material";

const StyledSkeletonLoaderWrapper = styled(Box)<
  { theme?: Theme } & SkeletonProps
>(() => ({
  width: "100vw",
  height: "100vh",
}));

const StyledSkeletonLoader = styled(Skeleton)<
  { theme?: Theme } & SkeletonProps
>(({ theme }) => ({
  backgroundColor: theme.palette.grey[500],
}));

export { StyledSkeletonLoaderWrapper, StyledSkeletonLoader };
