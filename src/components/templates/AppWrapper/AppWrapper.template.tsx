import { memo, ReactNode, FC, CSSProperties } from "react";

import { StyledAppWrapper } from "./AppWrapper.styles";

interface AppWrapperProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

const AppWrapper: FC<AppWrapperProps> = ({ children, containerStyle }) => {
  return <StyledAppWrapper style={containerStyle}>{children}</StyledAppWrapper>;
};

export default memo(AppWrapper);
