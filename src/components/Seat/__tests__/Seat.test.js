import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Seat from 'components/Seat';

describe('Seat Component testing', () => {
  it('Render 1 standard seat', () => {
    const props = {
      type: "standard",
      position: "A01",
      empty: true,
      choosing: true,
      price: 60000,
      choose: () => { },
    };
    const wrapper = mount(<Seat {...props} />);
    expect(wrapper.find('.standard').length).toBe(1);
  });

  it('Render 1 vip seat', () => {
    const props = {
      type: "vip",
      position: "A01",
      empty: true,
      choosing: true,
      price: 60000,
      choose: () => { },
    };
    const wrapper = mount(<Seat {...props} />);
    expect(wrapper.find('.vip').length).toBe(1);
  });

  it('Render 1 deluxe seat', () => {
    const props = {
      type: "deluxe",
      position: "A01",
      empty: true,
      choosing: true,
      price: 60000,
      choose: () => { },
    };
    const wrapper = mount(<Seat {...props} />);
    expect(wrapper.find('.deluxe').length).toBe(1);
  });

  it('Render 1 choosed seat', () => {
    const props = {
      type: "deluxe",
      position: "A01",
      empty: false,
      choosing: true,
      price: 60000,
      choose: () => { },
    };
    const wrapper = mount(<Seat {...props} />);
    expect(wrapper.find('.choosed').length).toBe(1);
  });

  it('Render 1 choosing seat', () => {
    const props = {
      type: "deluxe",
      position: "A01",
      empty: false,
      choosing: true,
      price: 60000,
      choose: () => { },
    };
    const wrapper = mount(<Seat {...props} />);
    expect(wrapper.find('.choosing').length).toBe(1);
  });
});
