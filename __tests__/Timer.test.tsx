import React from 'react';
import { shallow } from 'enzyme';

import { TimerComponent } from '../timer';

describe('Timer', () => {
  it('pads minutes and seconds', () => {
    const component = shallow(<TimerComponent
      timer={{seconds: 0, minutes: 0}}
      increaseTimer={() => {}} />);

    expect(component.find('p').text()).toEqual('00:00');
    component.unmount();
  });
});
