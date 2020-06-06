import React from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import Search from "../../components/Search";
import ProductItem from "../../components/ProductItem";
import DropDown from "../../components/Dropdown";
import DescriptionSection from "../../components/DescriptionScetion";
import BrandItem from "../BrandItem";

const ProductsSection = ({ products, sortbyList, categoryList, pageType }) => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="project-container project-container--h">
        {pageType === ("buyerPage" || "brandsPage") && (
          <DescriptionSection
            titleClassName={"text-container-h3"}
            title={"Our Products"}
            textClassName={"text-container"}
            text={`Whether you are looking for the perfect cake for a celebration,
            browsing breakfast ideas on searching for catering options for
            large meetings or celebrations; our food has something for
            everyone`}
          ></DescriptionSection>
        )}
        <div className="tabs-containera">
          <div style={{ position: "relative" }}>
            <DropDown
              dropdownListItems={sortbyList}
              isOpened={true}
              dropdownHeader={"sortBy"}
            ></DropDown>
          </div>
          <div style={{ position: "relative" }}>
            <DropDown
              dropdownListItems={categoryList}
              isOpened={false}
              dropdownHeader={"Category"}
            ></DropDown>
          </div>
          <Search></Search>
        </div>
        {pageType === "buyerPage" ? (
          <div className="list-container">
            {products.map((item) => (
              <ProductItem
                name={item.name}
                src={item.src}
                amount={item.amount}
                pageType={pageType}
              ></ProductItem>
            ))}
          </div>
        ) : (
          <div class="list-container list-container--4">
            {products.map((item) => (
              <BrandItem src={item.src}></BrandItem>
            ))}
          </div>
        )}
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default ProductsSection;