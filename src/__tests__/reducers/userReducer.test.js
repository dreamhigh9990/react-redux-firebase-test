import userReducer from '../../reducers/userReducer';
import * as types from '../../actions/types';

describe('user reducers', () => {
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual({})
    })
    
    it('should handle ADD_USER', () => {
        const newUser = {
            type: types.ADD_USER,
            payload: {
                firstName: 'test',
                lastName: 'test',
                company: 'abc corp',
                designation: 'manager',
                email: 'test@mail.com'
            }
        }
        expect(userReducer(types.ADD_USER, newUser)).toEqual({
            firstName: 'test',
            lastName: 'test',
            company: 'abc corp',
            designation: 'manager',
            email: 'test@mail.com'
        })
    })
})