import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import ProductPage from "../ProductPage";

const testProps = {
    product: [
        {
            "id": 10,
            "name": "Cita con especialista de pediatría control",
            "description": "Cita con especialista de pediatría control",
            "duration_minutes": 20,
            "color_hex_code": "#FFEE03"
        }
    ],
    isFetchingProduct: false,
    selectedProduct: true
};

jest.mock('./../../../store/products', () => ({
    loadProduct: jest.fn().mockReturnValue(testProps.product)
}));

jest.mock("react-redux", () => {
    return {
        useDispatch: () => jest.fn(),
        useSelector: () => jest.fn()
    };
});

jest.mock("react-router-dom", () => {
    return {
        useLocation: jest.fn().mockReturnValue({ pathname: "/" }),
        useHistory: () => ({
            push: jest.fn(),
        }),
    };
});

describe("ProductPage component", () => {


    describe("WHEN the ProductPage component is render", () => {
        console.log("aasda", testProps)
        const wrapper = mount(<ProductPage {...testProps} />);
        console.log("assss", wrapper)

        it("THEN should display ProductPage component", () => {
            expect(wrapper).toMatchSnapshot();
        });

    });

    describe("WHEN the ProductPage component is render with product", () => {
        const wrapper = shallow(<ProductPage {...testProps} />);

        it("THEN should display ProductPage component", () => {
            expect(wrapper).toMatchSnapshot();
        });

        const product = wrapper
            .find("ComponentWithLoadingIndicator")
            .dive()
            .find("Product");

        it("THEN should exist the ProductPage component", () => {
            expect(product.exists()).toBeTruthy();
        });

    });

    describe("WHEN the ProductPage component is render without product", () => {
        testProps.selectedProduct = false
        const wrapper = shallow(<ProductPage {...testProps} />);

        it("THEN should display ProductPage component without product", () => {
            expect(wrapper).toMatchSnapshot();
        });

        const product = wrapper
            .find("ComponentWithLoadingIndicator")
            .dive()
            .find("HomePage");

        it("THEN should exist the HomePage component", () => {
            expect(product.exists()).toBeTruthy();
        });

    });

});