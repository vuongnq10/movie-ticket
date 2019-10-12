import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import App from 'App/Container';

const props = {
  seats: [
    [
      {
        "position": "A01",
        "type": "standard",
        "empty": true,
        "price": 60000
      },
      {
        "position": "A02",
        "type": "standard",
        "empty": true,
        "price": 60000
      },
      {
        "position": "A03",
        "type": "standard",
        "empty": false,
        "price": 60000
      },
      {
        "position": "A04",
        "type": "standard",
        "empty": false,
        "price": 60000
      }
    ],
    [
      {
        "position": "B01",
        "type": "standard",
        "empty": false,
        "price": 60000
      },
      {
        "position": "B02",
        "type": "standard",
        "empty": true,
        "price": 60000
      },
      {
        "position": "B03",
        "type": "standard",
        "empty": true,
        "price": 60000
      },
      {
        "position": "B04",
        "type": "standard",
        "empty": true,
        "price": 60000
      }
    ]
  ],
  load: () => { },
  pay: () => { },
  loading: false,
}

describe('App Component testing', () => {
  let load, pay;
  beforeEach(() => {
    load = sinon.stub(props, 'load');
  });
  afterEach(() => {
    load.restore();
  });

  it('Run load data', () => {
    shallow(<App {...props} />);
    expect(load.calledOnce).toBe(true);
  });

  it('Render 8 seats', () => {
    const wrapper = render(<App {...props} />);
    expect(wrapper.find('.seat').length).toBe(8);
  });

  it('Render 3 NOT empty seats', () => {
    const wrapper = mount(<App {...props} />);
    expect(wrapper.find('.choosed').length).toBe(3);
  });

  it('Choose the first seats', () => {
    const wrapper = mount(<App {...props} />);
    wrapper.find('.seat').first().simulate('click');
    expect(wrapper.state().choosingList).toEqual(['A01']);
    expect(wrapper.state().total).toBe(60000)
    expect(wrapper.find('.choosing').length).toBe(1);
  });

});
