import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// Component to be tested
import UserSignup from '../../components/userSignUp';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const enzymeWrapper = shallow(<UserSignup />)
  return {
    enzymeWrapper
  }
}


describe('components', () => {
  describe('userSignup', () => {
    it('should render UserSignup', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.exists()).toBe(true)
    })
  })
})