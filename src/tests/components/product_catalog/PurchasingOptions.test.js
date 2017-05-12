import React from 'react';
import { shallow } from 'enzyme';
import { PurchasingOptions } from "../../../js/components/product_catalog/PurchasingOptions";
describe("<PurchasingOptions />", () => {
  it("renders the Pick up in store button only if the purchasingChannelCode is 0 or 2", () => {
    const wrapper = shallow(<PurchasingOptions purchasingChannelCode = {0}  />);
    expect(wrapper.contains(<button className="store-pickup">Pick up in store</button>)).toEqual(true);
    expect(wrapper.contains(<button className="add-to-cart">Add to Cart</button>)).toEqual(true);
  });

  it(" does not render the Pick up in store button if the purchasingChannelCode is not 2", () => {
    const wrapper = shallow(<PurchasingOptions purchasingChannelCode = {1}  />);
    expect(wrapper.contains(<button className="store-pickup">Pick up in store</button>)).not.toEqual(true);
  });
  it(" does not render the Add to Cart button if the purchasingChannelCode is not 1", () => {
    const wrapper = shallow(<PurchasingOptions purchasingChannelCode = {2}  />);
    expect(wrapper.contains(<button className="add-to-cart">Add to Cart</button>)).not.toEqual(true);
  })
});
