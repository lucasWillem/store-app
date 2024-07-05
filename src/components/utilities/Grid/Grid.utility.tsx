import { memo, ReactNode } from "react";
import { StyledFlatList } from "./Grid.styles";

interface FlatListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

const _FlatList = <T,>({ items, renderItem }: FlatListProps<T>) => {
  return (
    <StyledFlatList>
      {items.map((item, index) => renderItem(item, index))}
    </StyledFlatList>
  );
};

const FlatList = memo(_FlatList) as typeof _FlatList;
export default FlatList;
