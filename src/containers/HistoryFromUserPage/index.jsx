import React, { Component } from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import HistoryFromUserSection from "../../components/HistoryFromUserSection";
import constents from "./constents";
import HistoryIcon from "../../components/HistoryIcon";
import ShoppingCart from "../../components/ShoppingCart";
import ShoppingOrderContainer from "../../components/ShoppingOrderSection";
import ProductCardsSection from "../../components/ProductCardsSection";

class HistoryFromUser extends Component {
  state = {
    productCards: [
      { Num: 1, status: "Arrived" },
      { Num: 2, status: "Waiting" },
      { Num: 3, status: "Arrived" },
      { Num: 4, status: "Waiting" },
      { Num: 5, status: "Arrived" },
      { Num: 6, status: "Waiting" },
      { Num: 7, status: "Waiting" },
      { Num: 8, status: "Arrived" },
    ],
    date: "",
    statusTabs: ["All", "Waiting", "Arrived", "Cancelled"],
    currentTabe: 0,
    companyLogoImgSrc: "",
    productsPerPage: 3,
    currentPage: 1,
    statusProducts: [],
  };

  componentDidMount() {
    const statusProducts = this.state.productCards;
    this.setState({ statusProducts });
  }

  handleTabChange = (currentTabe) => {
    const currentStatus = this.state.statusTabs[currentTabe];
    let statusProducts = this.state.productCards;
    const currentPage = 1;
    if (currentTabe !== 0) {
      statusProducts = this.state.productCards.filter(
        (products) => products.status === currentStatus
      );
    }
    this.setState({ currentTabe, statusProducts, currentPage });
  };

  paginate = (currentPage) => {
    if (
      0 < currentPage &&
      currentPage <=
        Math.ceil(this.state.productCards.length / this.state.productsPerPage)
    ) {
      this.setState({ currentPage });
    }
  };

  render() {
    const {
      isShoppingIconHidden,
      isShoppingBagOpen,
      isProductCardModalOpen,
      toggleShoppingBag,
      openProductsCardModal,
      products
    } = this.props;
    const {
      state: {
        date,
        statusTabs,
        currentTabe,
        companyLogoImgSrc,
        productsPerPage,
        currentPage,
        statusProducts,
      },
      handleTabChange,
      paginate,
    } = this;
    const firstIndex = (currentPage - 1) * productsPerPage;
    const lastIndex = firstIndex + productsPerPage;
    const currentProducts = this.state.statusProducts.slice(
      firstIndex,
      lastIndex
    );
    return (
      <React.Fragment>
        <Header />
        <ShoppingCart
          number={2}
          openShoppingBag={toggleShoppingBag}
          isHidden={isShoppingIconHidden}
        />
        <ShoppingOrderContainer
          shoppingOrderList={[1, 2, 3]}
          isOpen={isShoppingBagOpen}
          closeShoppingBag={toggleShoppingBag}
          openCardModal={openProductsCardModal}
        />
        {isProductCardModalOpen && (
          <ProductCardsSection
            isClicked={isProductCardModalOpen}
            productCards={products}
            closeProductsModal={openProductsCardModal}
            handleDelete
          />
        )}
        <HistoryFromUserSection
          productCards={statusProducts}
          currentProducts={currentProducts}
          date={date}
          statusTabs={constents.statusTabs}
          currentTabe={currentTabe}
          handleTabChange={handleTabChange}
          productsPerPage={productsPerPage}
          paginate={paginate}
          currentPage={currentPage}
          companyLogoImgSrc={companyLogoImgSrc}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HistoryFromUser;
