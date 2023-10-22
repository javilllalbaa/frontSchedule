import React from 'react'

import loading from "../../assets/images/loading.gif";
import "./styles.scss";
import HomePage from "./../HomePage";

const withLoadingIndicator = (WrappedComponent) =>
  function ComponentWithLoadingIndicator ({ isFetching, selectedProduct, ...props }) {
    if (!selectedProduct) {
      return (
        <div className="loading"><img src={loading} alt="loading"/></div>
      )
    }
    return <WrappedComponent {...props} />
  }

export default withLoadingIndicator