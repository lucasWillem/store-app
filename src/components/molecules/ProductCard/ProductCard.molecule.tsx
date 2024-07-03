import { FC, memo } from "react";
import {
  Button,
  CardActions,
  CardMedia,
  Typography,
  Box,
  Card,
} from "@mui/material";

import { AiOutlinePlus } from "react-icons/ai";
import { StyledCardContent } from "./ProductCard.styles";
import { Product } from "@/networking/entityTypes";

type ProductCardProps = Product;

const _ProductCard: FC<ProductCardProps> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <StyledCardContent>
        <Box>
          <Typography gutterBottom variant="h6" component="div">
            {`${title.substring(0, 50)}...`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${description.substring(0, 50)}...`}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="text.primary">
            Price: ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {rating.rate} ({rating.count} reviews)
          </Typography>
        </Box>
      </StyledCardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button>
          <AiOutlinePlus size={24} />
        </Button>
      </CardActions>
    </Card>
  );
};

const ProductCard = memo(_ProductCard);
export default ProductCard;
