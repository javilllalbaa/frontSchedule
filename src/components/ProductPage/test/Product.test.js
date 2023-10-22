import React from "react";
import { shallow } from "enzyme";

import Product from "../Product";

describe("ProductPage component", () => {
  const testProps = {
    product: [
      {
        "id": 21,
        "name": "jejeje jav",
        "description": "dsfsd",
        "duration_minutes": 0,
        "color_hex_code": "dsadsa"
      },
      {
        "id": 20,
        "name": "dsfsdf",
        "description": "dfsdf",
        "duration_minutes": 0,
        "color_hex_code": "bcvb"
      },
      {
        "id": 19,
        "name": "test",
        "description": "this is test",
        "duration_minutes": 54,
        "color_hex_code": "dadsdas"
      },
      {
        "id": 18,
        "name": "test",
        "description": "this is test",
        "duration_minutes": 54,
        "color_hex_code": "dadsdas"
      },
      {
        "id": 17,
        "name": "test",
        "description": "this is test",
        "duration_minutes": 54,
        "color_hex_code": "dadsdas"
      }
    ]
  };
  describe("WHEN the Product component is render", () => {
    const wrapper = shallow(<Product {...testProps} />);

    it("THEN should display Product component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
