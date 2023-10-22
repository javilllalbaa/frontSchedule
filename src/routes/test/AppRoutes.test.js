import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import AppRoutes from "../AppRoutes";

const testProps = {
    product: {
        "id": 10,
        "name": "Cita con especialista de pediatría control",
        "description": "Cita con especialista de pediatría control",
        "duration_minutes": 20,
        "color_hex_code": "#FFEE03"
    },
    isFetchingProduct: false,
    selectedProduct: true
};

jest.mock('./../../store/products', () => ({
    selectData: jest.fn().mockReturnValue(testProps.product)
}));

jest.mock("react-redux", () => {
    return {
        useDispatch: () => jest.fn(),
        useSelector: () => jest.fn(),
        Provider: ({ children }) => children
    };
});

jest.mock("react-router-dom", () => {
    return {
        useLocation: jest.fn().mockReturnValue({ pathname: "/schedule" }),
        useHistory: () => ({
            push: jest.fn(),
        }),
        BrowserRouter: () => jest.fn(),
        Router: () => jest.fn(),
        Route: () => jest.fn(),
        Switch: () => jest.fn(),
    };
});

describe("HomePage component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<AppRoutes />);

    console.log("Data...", wrapper)

    it("THEN should display HomePage component", () => {
      expect(wrapper).toMatchSnapshot();
      wrapper.unmount()
    });

  });
});
