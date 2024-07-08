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

/**
 * Provides a flexible wrapper component for pages within an application, allowing for custom styling.
 * This component is designed to wrap its children with an optional container style, making it versatile for various layout needs.
 * Additionally, it incorporates common styling for each page through the `StyledPageWrapper`, ensuring a consistent look and feel across the application.
 * However, it allows for customization through the `containerStyle` prop, offering flexibility to adjust the layout or appearance as needed.
 *
 * Imports:
 * - `memo` from React to optimize the component by preventing unnecessary re-renders.
 * - `ReactNode`, `FC`, and `CSSProperties` from React for typing the component's props and styles.
 * - `StyledPageWrapper` from "./PageWrapper.styles" for the base styling of the wrapper.
 *
 * Interface:
 * - `PageWrapperProps`: Defines the props accepted by the `PageWrapper` component.
 *   - `children`: The content to be wrapped by the `PageWrapper`. It can be any valid React node.
 *   - `containerStyle`: An optional `CSSProperties` object allowing for custom inline styling of the wrapper. This provides flexibility in adjusting the layout or appearance as needed.
 *
 * Component:
 * - `_PageWrapper`: A functional component typed with `FC<PageWrapperProps>` that renders a `StyledPageWrapper` around its `children`. The `containerStyle` prop is applied directly to the `StyledPageWrapper` to customize its styling.
 *
 * Optimization:
 * - The component is wrapped with `memo` to enhance performance by memoizing it, thus avoiding unnecessary re-renders when the props do not change.
 *
 * Usage:
 * - This component is ideal for creating consistent page layouts across an application while still allowing for customization through the `containerStyle` prop.
 *
 * Example:
 * ```tsx
 * <PageWrapper containerStyle={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
 *   <h1>Page Title</h1>
 *   <p>Page content goes here...</p>
 * </PageWrapper>
 * ```
 *
 * This approach ensures that the `PageWrapper` can be reused across different pages, providing a consistent layout mechanism while accommodating specific styling requirements.
 */

const PageWrapper = memo(_PageWrapper);
export default PageWrapper;
