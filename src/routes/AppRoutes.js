import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./../components/Header";
import ProductPage from "./../components/ProductPage";
import { selectData } from './../store/products'
import "./../App.scss";
import { useDispatch } from 'react-redux';
import { loadProduct } from './../store/products'

function AppRoutes() {

    const dispatch = useDispatch();

    let dataState = useSelector(selectData);
    let call =  false;
    let {
        product, 
        isFetchingProduct,
        selectedProduct
    } = dataState

    useEffect(() => {
        if(!call){
            dispatch(
                loadProduct({
                    "pagina": 0,
                    "tamanio": 5
                })
            )
            call = true;
        }
    },[]);

    return (
        <Router>
            <Header product={product} />
            <Routes>
                <Route exact path="/schedule" element={
                    <ProductPage product={product} isFetchingProduct={isFetchingProduct} selectedProduct={selectedProduct}  />
                }></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes