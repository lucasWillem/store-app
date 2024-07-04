import { FC, memo, MouseEventHandler } from "react";
import {
  Button,
  CardActions,
  CardMedia,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { AiOutlinePlus } from "react-icons/ai";
import { StyledCardContent, StyledProductCard } from "./ProductCard.styles";
import { Product } from "@/networking/entityTypes";

interface ProductCardProps extends Product {
  handleAddToCart: MouseEventHandler<SVGElement>;
}

const _ProductCard: FC<ProductCardProps> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
  handleAddToCart,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const bodyVariant = isSmallScreen ? "inherit" : "body2";
  const titleVariant = isSmallScreen ? "subtitle1" : "h6";

  return (
    <StyledProductCard>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <StyledCardContent>
        <Box>
          <Typography gutterBottom variant={titleVariant} component="div">
            {`${title.substring(0, 50)}...`}
          </Typography>
          <Typography variant={bodyVariant} color="text.secondary">
            {`${description.substring(0, 50)}...`}
          </Typography>
        </Box>
        <Box>
          <Typography variant={bodyVariant} color="text.primary">
            Price: ${price}
          </Typography>
          <Typography variant={bodyVariant} color="text.secondary">
            Category: {category}
          </Typography>
          <Typography variant={bodyVariant} color="text.secondary">
            Rating: {rating.rate} ({rating.count} reviews)
          </Typography>
        </Box>
      </StyledCardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button>
          <AiOutlinePlus size={24} onClick={handleAddToCart} />
        </Button>
      </CardActions>
    </StyledProductCard>
  );
};

const ProductCard = memo(_ProductCard);
export default ProductCard;
