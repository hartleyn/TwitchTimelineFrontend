import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';


describe('SearchBar Component', () => {
  it('Should render without errors', () => {
    const component  = shallow(<SearchBar />);
    
    const inputField = component.find('#usernameInput');
    expect(inputField.length).toBe(1);
  });
});
