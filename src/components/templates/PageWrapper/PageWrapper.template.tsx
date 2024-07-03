import { memo, ReactNode, FC, CSSProperties } from "react";

import { StyledPageWrapper } from "./PageWrapper.styles";

interface PageWrapperProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

const _PageWrapper: FC<PageWrapperProps> = ({ children, containerStyle }) => {
  return (
    <StyledPageWrapper style={containerStyle}>{children}</StyledPageWrapper>
  );
};

const PageWrapper = memo(_PageWrapper);
export default PageWrapper;
