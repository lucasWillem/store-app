import { FC, memo, CSSProperties, useEffect, useCallback } from "react";
import { Box } from "@mui/material";

import { useFetchProducts } from "./network-hooks/useFetchProducts";

import { ProductCard } from "@/components/molecules/ProductCard";
import { FlatList } from "@/components/utilities/FlatList";
import { AlertSeverity } from "@/components/molecules/CustomAlert/state/alert-model";

import { entities, constants } from "@/networking";
import { useStoreActions } from "@/redux";

export interface StoreFrontProps {
  containerStyle?: CSSProperties;
}

interface CartItem extends entities.Product {
  count: number;
}

const _StoreFront: FC<StoreFrontProps> = ({ containerStyle }) => {
  const {
    data: productsData,
    isPending,
    isError,
    error,
  } = useFetchProducts({
    url: constants.FetchProductsEndPoint,
  });

  const configureLoader = useStoreActions(
    (actions) => actions.loader.configureLoader,
  );

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

  const { addCartItem } = useStoreActions((actions) => actions.cartItems);

  useEffect(() => {
    configureLoader({ isVisible: isPending });

    if (isError) {
      configureAlert({
        isVisible: true,
        message: error?.message ?? "An error occurred while fetching products",
        severity: AlertSeverity.Error,
      });
    }
  }, [
    isPending,
    productsData,
    isError,
    configureLoader,
    configureAlert,
    error?.message,
  ]);

  const handleAddToCart = useCallback(
    (product: CartItem) => {
      addCartItem(product);
    },
    [addCartItem],
  );

  const renderProducts = useCallback(
    (product: entities.Product, index: number) => (
      <ProductCard
        key={`${product.id}-${index}`}
        {...product}
        handleAddToCart={() => handleAddToCart(product as CartItem)}
      />
    ),
    [handleAddToCart],
  );

  return (
    <Box style={containerStyle}>
      <FlatList items={productsData ?? []} renderItem={renderProducts} />
    </Box>
  );
};

const StoreFront = memo(_StoreFront);
export default StoreFront;
