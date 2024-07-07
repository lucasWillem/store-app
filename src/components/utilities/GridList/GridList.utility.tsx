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

const GridList = memo(_GridList) as typeof _GridList;
export default GridList;
