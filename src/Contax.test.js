import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import contaxReducers from './redux/reducers';
import App from './Contax';

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
  const enzymeWrapper = mount(<Provider store={store}><App {...props} /></Provider>);
  return {
    props,
    enzymeWrapper
  }
}

describe('Contax app', () => {
  it('should get render the header', () => {
    const { enzymeWrapper } = setup(0, 'create', 'show');
    expect(enzymeWrapper.find('header h1').text()).toBe('Contax');
  });

  it('should get render the header', () => {
    const { enzymeWrapper } = setup(0, 'create', 'show');
    enzymeWrapper.find('header button').simulate('click');
    expect(enzymeWrapper.find('.overlay').hasClass('show')).toBe(true);
  });
});
