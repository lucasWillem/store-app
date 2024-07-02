import { memo, ReactNode, FC, CSSProperties } from "react";

import { StyledAppWrapper } from "./AppWrapper.styles";

interface ScreenWrapperProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

const ScreenTemplate: FC<ScreenWrapperProps> = ({
  children,
  containerStyle,
}) => {
  return <StyledAppWrapper style={containerStyle}>{children}</StyledAppWrapper>;
};

export default memo(ScreenTemplate);
