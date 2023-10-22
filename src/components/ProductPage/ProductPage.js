import PropTypes from "prop-types";
import WithLoadingIndicator from "../WithLoading";
import Product from "./Product"
import "./styles.scss";

const ProductWithLoadingIndicator = WithLoadingIndicator(Product);

const ProductPage = ({ product, isFetchingProduct, selectedProduct }) => {

  return (
    <ProductWithLoadingIndicator
      product={product}
      isFetching={isFetchingProduct || product.length > 0}
      selectedProduct={selectedProduct}
    />
  );
};

ProductPage.propTypes = {
  product: PropTypes.object,
  isFetchingProduct: PropTypes.bool
};

export default ProductPage;
