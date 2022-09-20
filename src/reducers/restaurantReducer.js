import {
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL
} from '../constants/restaurantConstant'

export const restuarantListReducer=(state={ restaurants: []},actions)=>{
    switch(actions.type){
        case RESTAURANT_LIST_SUCCESS:
            return{restaurants: action.payload}   
        
        case RESTAURANT_LIST_FAIL:
            return{restaurants:action.console.error}

        default:
            return state
    }
}