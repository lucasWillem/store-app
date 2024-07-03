import { memo, ReactNode, FC, CSSProperties } from "react";

import { StyledPageWrapper } from "./PageWrapper.styles";

interface PageWrapperProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, containerStyle }) => {
  return (
    <StyledPageWrapper style={containerStyle}>{children}</StyledPageWrapper>
  );
};

export default memo(PageWrapper);
