import {
    RESTAURANT_LIST_RESQUEST,
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL
} from '../constants/restaurantConstant'

export const restaurantListReducer=(state={ restaurants: []},action)=>{
    switch(action.type){
        case RESTAURANT_LIST_RESQUEST:
            return{loading: true,restaurants:[]}
        case RESTAURANT_LIST_SUCCESS:
            return{loading:false,restaurants: action.payload}   
        
        case RESTAURANT_LIST_FAIL:
            return{loading:false,restaurants:action.error}

        default:
            return state
    }
}