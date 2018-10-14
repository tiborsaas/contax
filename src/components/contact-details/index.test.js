import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import ContactDetails from './component';
import contaxReducers from '../../redux/reducers';

const store = createStore(
  contaxReducers,
  applyMiddleware(thunkMiddleware)
);

Enzyme.configure({ adapter: new Adapter() })

function setup(id) {
  const props = {
    contacts: [{
      "id": 5000,
      "first_name": "Adda",
      "last_name": "Cobleigh",
      "email": "acobleigh0@nyu.edu",
      "phone_number": "+358 (169) 761-1396",
      "date_created": "2018-07-03T08:52:40Z"
    }],
    selected: id
  }
  const enzymeWrapper = mount(<Provider store={store}><ContactDetails {...props} /></Provider>);
  return {
    props,
    enzymeWrapper
  }
}

describe('Contact details component', () => {
  it('should render self display a message', () => {
    const { enzymeWrapper } = setup(0);
    expect(enzymeWrapper.find('h1').text()).toBe('Please select a contact');
  });

  it('should display the proper data', () => {
    const { enzymeWrapper } = setup(5000);
    expect(enzymeWrapper.find('h1').text()).toBe('Adda Cobleigh');
  });
});