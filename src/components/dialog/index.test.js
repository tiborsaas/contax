import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import ContactList from './component';
import contaxReducers from '../../redux/reducers';
import Dialog from './component';

const store = createStore(
  contaxReducers,
  applyMiddleware(thunkMiddleware)
);

Enzyme.configure({ adapter: new Adapter() })

function setup(id, type, visibility) {
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
    type,
    visibility,
    hide: jest.fn(),
    createContact: jest.fn(),
    updateContact: jest.fn()
  }
  const enzymeWrapper = mount(<Provider store={store}><ContactList {...props} /></Provider>);
  return {
    props,
    enzymeWrapper
  }
}

describe('Dialog component', () => {
  it('should get a display class', () => {
    const { enzymeWrapper } = setup(0, 'create', 'show');
    expect(enzymeWrapper.find('section').hasClass('show')).toBe(true);
  });

  it('should display the correct heading', () => {
    const { enzymeWrapper } = setup(0, 'edit', 'show');
    expect(enzymeWrapper.find('h1').text()).toBe('Edit contact');
  });

  it('should display the correct heading', () => {
    const { enzymeWrapper } = setup(0, 'create', 'show');
    expect(enzymeWrapper.find('h1').text()).toBe('Create new contact');
  });

  it('should displays data from props', () => {
    const { enzymeWrapper } = setup(5001, 'edit', 'show');
    expect(enzymeWrapper.find('input').first().instance().defaultValue).toBe('Bela');
  });
});
