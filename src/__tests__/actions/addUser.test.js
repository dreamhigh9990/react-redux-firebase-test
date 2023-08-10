import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import * as actions from '../../actions/index';
import * as types from '../../actions/types';
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

  it('should add user to firebase', () => {
    const newUser = {
      firstName: 'test',
      lastName: 'test',
      company: 'abc corp',
      designation: 'manager',
      email: 'test@mail.com'
    }
    const expectedAction = [{
      type: types.ADD_USER,
      payload: newUser
    }]
    const store = mockStore({ payload: [] })
    return store.dispatch(actions.addUser(newUser)).then(() =>{
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})