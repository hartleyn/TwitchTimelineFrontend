import React from 'react';
import { shallow } from 'enzyme';

import UserDisplay from './UserDisplay';


describe('UserDisplay Component', () => {
  it('should render without errors', () => {
    const component  = shallow(<UserDisplay />);
    
    const userDisplayDiv = component.find('.userDisplay');
    const userDisplayPaper = component.find('.userDisplayPaper');
    expect(userDisplayDiv.length).toBe(1);
    expect(userDisplayPaper.length).toBe(1);
  });
});
