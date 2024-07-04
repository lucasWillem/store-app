import { StoreFront } from "@/components/organisms/store-management/containers/StoreFront";
import { PageWrapper } from "@/components/templates/PageWrapper";
import { FC } from "react";

const StorePage: FC = () => {
  return (
    <PageWrapper>
      <StoreFront />
    </PageWrapper>
  );
};

export default StorePage;
