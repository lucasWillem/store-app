import { FC, memo, CSSProperties, useEffect, useCallback } from "react";
import { Box } from "@mui/material";

import { useFetchProducts } from "../../network-hooks/useFetchProducts";
import { StoreEndPoints } from "@/components/organisms/user-management/constants";

import { ProductCard } from "@/components/molecules/ProductCard";
import { FlatList } from "@/components/utilities/FlatList";
import { Product } from "@/networking/entityTypes";
import { useStoreActions } from "@/redux";
import { AlertSeverity } from "@/components/molecules/CustomAlert/state/alert-model";

export interface StoreFrontProps {
  containerStyle?: CSSProperties;
}

const _StoreFront: FC<StoreFrontProps> = ({ containerStyle }) => {
  const {
    data: productsData,
    isPending,
    isError,
    error,
  } = useFetchProducts({
    url: StoreEndPoints.FetchProducts,
  });

  const configureLoader = useStoreActions(
    (actions) => actions.loader.configureLoader,
  );

  const configureAlert = useStoreActions(
    (actions) => actions.alert.configureAlert,
  );

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

  const renderProducts = useCallback(
    (product: Product, index: number) => (
      <ProductCard key={`${product.id}-${index}`} {...product} />
    ),
    [],
  );

  return (
    <Box style={containerStyle}>
      <FlatList items={productsData ?? []} renderItem={renderProducts} />
    </Box>
  );
};

const StoreFront = memo(_StoreFront);
export default StoreFront;
