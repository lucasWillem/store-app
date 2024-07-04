import { FC, memo, CSSProperties, useEffect } from "react";
import { useFetchProducts } from "../../network-hooks/useFetchProducts";
import { StoreEndPoints } from "@/components/organisms/user-management/constants";
import { Box } from "@mui/material";
import { ProductCard } from "@/components/molecules/ProductCard";
import { FlatList } from "@/components/utilities/FlatList";
import { Product } from "@/networking/entityTypes";

export interface StoreFrontProps {
  containerStyle?: CSSProperties;
}

const _StoreFront: FC<StoreFrontProps> = ({ containerStyle }) => {
  const { data: productsData, isFetching } = useFetchProducts({
    url: StoreEndPoints.FetchProducts,
  });

  useEffect(() => {
    console.log(productsData, isFetching);
  }, [isFetching, productsData]);

  const renderProducts = (product: Product, index: number) => (
    <ProductCard key={`${product.id}-${index}`} {...product} />
  );

  return (
    <Box style={containerStyle}>
      <FlatList items={productsData ?? []} renderItem={renderProducts} />
    </Box>
  );
};

const StoreFront = memo(_StoreFront);
export default StoreFront;
