import React from 'react';
import { shallow } from 'enzyme';
import App from './../../js/components/App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App').length).toEqual(1);
});
