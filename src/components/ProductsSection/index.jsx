import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import DescriptionSection from "../DescriptionSection";
import DropDown from "../Dropdown";
import Search from "../Search";
import BrandItem from "../BrandItem";
import ProductItem from "../ProductItem";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { products } from "../../containers/BrandsPage/dumy";
import Pagination from "../Pagination";

const ProductsSection = ({
  paginate,
  productsPerPage,
  currentPage,
  productsList,
  sortList,
  categoryList,
  type,
  description,
  categoryDropDownStatus,
  sortDropDownStatus,
  addToCart,
  plusHandler,
  minusHandler,
  amountHandler,
  sortDropdownIsOpenHandle,
  categoryDropdownIsOpenHandle,
  selectSortHandle,
  selectCategoryHandle,
  category,
  sort,
  searchHandler,
  title,
  text
}) => {
  console.log(productsList, "prodct list");

  const firstIndex = (currentPage - 1) * productsPerPage;
  const lastIndex = firstIndex + productsPerPage;
  const currentProducts = productsList.slice(firstIndex, lastIndex);
  console.log(currentProducts, "curreeeeeent");

  return (
    <React.Fragment>
      <Header />
      {/* <Container ></Container> */}
      <div className="project-container project-container--h">
        <DescriptionSection
          titleClassName={"text-container-h3"}
          title={title}
          textClassName={"text-container"}
          text={text}
        ></DescriptionSection>

        <div className="tabs-containera">
          <div style={{ position: "relative" }}>
            <DropDown
              listItems={sortList.map((sort) => sort.name)}
              Header={sort}
              IsOpenHandle={sortDropdownIsOpenHandle}
              isOpened={sortDropDownStatus}
              selectionHandle={selectSortHandle}
              idList={sortList.map((sort) => sort.id)}
            ></DropDown>
          </div>
          <div style={{ position: "relative" }}>
            <DropDown
              listItems={categoryList.map((category) => category.name)}
              IsOpenHandle={categoryDropdownIsOpenHandle}
              isOpened={categoryDropDownStatus}
              Header={category}
              selectionHandle={selectCategoryHandle}
              idList={categoryList.map((category) => category.id)}
            ></DropDown>
          </div>
          <Search searchHandler={searchHandler}></Search>
        </div>
        {type !== "Brands" ? (
          currentProducts.length > 0 ? (
            <div className="list-container">
              {currentProducts.map((item) => (
                <ProductItem
                  Key={item.id}
                  type={type}
                  name={item.name}
                  src={item.imageSrc}
                  minPieces={item.minPieces}
                  addToCart={addToCart}
                  price={item.price}
                  plusHandler={plusHandler}
                  minusHandler={minusHandler}
                  id={item.id}
                  amount={item.amount}
                  amountHandler={amountHandler}
                  onSaleStyle={item.onSale}
                ></ProductItem>
              ))}
            </div>
          ) : (
            <div className="empty-products">
              <span>There Is No Products</span>
            </div>
          )
        ) : (
          <div className="list-container list-container--4">
            {currentProducts.map((item) => (
              <BrandItem
                key={item.id}
                src={item.userId.imageSrc}
                id={item.userId.id}
              ></BrandItem>
            ))}
          </div>
        )}
        {productsList.length > productsPerPage && (
          <Container>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={productsList.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </Container>
        )}
      </div>
    </React.Fragment>
  );
};
ProductsSection.propTypes = {
  products: PropTypes.array,
  sortbyList: PropTypes.array,
  category: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.object,
};
ProductsSection.defaultProps = {
  productsList: [],
};
export default ProductsSection;
