import React from "react";
import PropTypes from "prop-types";

import Search from "../Search";
import Header from "../Layouts/Header";
import { Container } from "reactstrap";
import HistoryStates from "../HistoryStates";
import OrderListSection from "../OrderList";
import Pagination from "../Pagination";
import Footer from "../Layouts/Footer";
const OrderTrackSection = ({
  orders,
  currentProducts,
  statusTabs,
  currentTabe,
  productsPerPage,
  currentPage,
  paginate,
  handleTabChange,
  handleCancelOrder,
  role,
  handleStatusChange,
}) => (
  <React.Fragment>
    <Header />
    <Container>
      <div className="project-container project-container--h">
        <div className="userHistoryFilter ">
          <Search />
        </div>
      </div>
    </Container>
    <HistoryStates
      tabs={statusTabs}
      currentTabe={currentTabe}
      handleTabChange={handleTabChange}
    />
    <Container>
      <OrderListSection
        orders={currentProducts}
        handleCancelOrder={handleCancelOrder}
        role={role}
        handleStatusChange={handleStatusChange}
      />
    </Container>

    {orders.length > productsPerPage && (
      <Container>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={orders.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </Container>
    )}
    <Footer />
  </React.Fragment>
);

OrderTrackSection.defaultProps = {
  orders: [],
  currentProducts: [],
  statusTabs: ["All", "Waiting", "Arrived", "Canceled"],
  currentTabe: "All",
  productsPerPage: 4,
  currentPage: 1,
};
OrderTrackSection.propTypes = {
  orders: PropTypes.array,
  currentProducts: PropTypes.array,
  statusTabs: PropTypes.array,
  currentTabe: PropTypes.string,
  productsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
  handleTabChange: PropTypes.func,
};
export default OrderTrackSection;
