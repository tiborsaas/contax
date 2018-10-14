import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import ContactList from './component';
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
    }, {
      "id": 5001,
      "first_name": "Bela",
      "last_name": "Apacs",
      "email": "abela@c.edu",
      "phone_number": "+358 (169) 761-1396",
      "date_created": "2018-07-03T08:52:40Z"
    }],
    selected: id,
    search_term: '',
    fetchContacts: jest.fn(),
    selectContact: jest.fn(),
  }
  const enzymeWrapper = mount(<Provider store={store}><ContactList {...props} /></Provider>);
  return {
    props,
    enzymeWrapper
  }
}

describe('Contact list component', () => {
  it('should render the proper amount of contacts', () => {
    const { enzymeWrapper } = setup(0);
    expect(enzymeWrapper.find('li').length).toBe(2);
  });

  it('item gets a highlight class', () => {
    const { enzymeWrapper } = setup(5000);
    expect(enzymeWrapper.find('li.active').text()).toBe('Adda Cobleigh');
  });

  it('item gets a highlight if clicked', () => {
    const { enzymeWrapper } = setup(0);
    expect(enzymeWrapper.find('li').first().simulate('click').text()).toBe('Adda Cobleigh');
  });
});