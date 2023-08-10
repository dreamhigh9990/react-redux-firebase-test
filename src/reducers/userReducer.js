import { ADD_USER } from '../actions/types';
// import { FETCH_USER } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case ADD_USER: 
            return action.payload;
        // case FETCH_USER: 
        //     return action.payload;
        default:
            return state;
    }
}