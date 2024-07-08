import { memo, ReactNode } from "react";
import { StyledGridList } from "./GridList.styles";

interface GridListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

const _GridList = <T,>({ items, renderItem }: GridListProps<T>) => {
  return (
    <StyledGridList>
      {items.map((item, index) => renderItem(item, index))}
    </StyledGridList>
  );
};

/**
 * Implements a generic, reusable grid list component using the render props pattern for flexibility in rendering various types of content.
 * This component is designed to display a list of items in a grid format, where the rendering of each item can be customized through a render prop.
 *
 * Imports:
 * - `memo` from React for optimizing the component by memoizing it, preventing unnecessary re-renders.
 * - `ReactNode` from React to type the return value of the render prop.
 * - `StyledGridList` from "./GridList.styles" for styled-component integration, providing the grid's styling.
 *
 * Interface:
 * - `GridListProps<T>`: A generic interface for the component props, allowing it to handle items of any type.
 *   - `items`: An array of items of type `T` to be rendered in the grid.
 *   - `renderItem`: A function that takes an item of type `T` and its index, and returns a `ReactNode`. This is the render prop that allows for custom item rendering.
 *
 * Component:
 * - `_GridList`: A generic, functional component that takes `GridListProps<T>` as props. It uses the `renderItem` function to render each item in the `items` array, wrapping the results in a `StyledGridList` component for styling.
 *
 * Optimization:
 * - The component is wrapped with `memo` to prevent unnecessary re-renders, enhancing performance, especially in cases with large lists or complex items.
 *
 * Usage:
 * - This component is highly flexible due to the render props pattern, allowing it to render any type of content in a grid layout. For example, it can be used to display a grid of cards, images, or text elements, with each item's rendering being defined by the `renderItem` prop.
 *
 * Example:
 * ```tsx
 * <GridList
 *   items={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]}
 *   renderItem={(item, index) => <div key={index}>{item.name}</div>}
 * />
 * ```
 *
 * This approach provides the flexibility to define how each item in the grid should be rendered, making the `GridList` component reusable in various contexts where the item's presentation needs to be customized.
 */
const GridList = memo(_GridList) as typeof _GridList;
export default GridList;
