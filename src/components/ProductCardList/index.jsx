import React from "react";
import ProductCard from "../ProductCard";

const ProductCardList = ({ productCards, handleDelete }) => {
  console.log("productCards from Modal ", productCards);
  return productCards.map((product) => (
    <ProductCard
      key={product.id}
      productName={product.name}
      productAmount={product.amount}
      productImg={product.imageSrc}
      totalPrice={product.totalPrice}
      handleDelete={handleDelete}
      cardType="modalCard"
    />
  ));
};
export default ProductCardList;
