import { FC } from "react";
import { useTheme } from "@mui/material";
import { StoreFront } from "@/components/organisms/store-management/containers/StoreFront";
import { PageWrapper } from "@/components/templates/PageWrapper";
import { ShoppingCart } from "@/components/organisms/shopping-cart-management/containers/ShoppingCart";

const StorePage: FC = () => {
  const theme = useTheme();

  return (
    <PageWrapper>
      <StoreFront />
      <ShoppingCart
        containerStyle={{
          position: "absolute",
          top: theme.spacing(2),
          right: theme.spacing(3),
        }}
      />
    </PageWrapper>
  );
};

export default StorePage;
