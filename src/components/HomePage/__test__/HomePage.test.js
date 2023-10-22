import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import HomePage from "../HomePage";

const testProps = {
  data: ["Producto no encontrado"]
}

describe("HomePage component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = mount(<HomePage {...testProps} />);

    it("THEN should display HomePage component", () => {
      expect(wrapper).toMatchSnapshot();
      wrapper.unmount()
    });

  });
});
