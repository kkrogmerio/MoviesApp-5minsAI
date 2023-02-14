import { ActionType,MovieDataType } from "../types";
import { Action } from "../actions";
interface RepositoriesState{
    isLoading:boolean;
    error:string|null;
    moviesData:MovieDataType[];
}

const initialState={
    isLoading:false,
    error:null,
    moviesData:[]
}
const reducer=(state:RepositoriesState=initialState,action:Action):RepositoriesState=>{
    switch (action.type){
        case ActionType.SEARCH_MOVIES:
            return {isLoading:true,error:null,moviesData:[]}
        case ActionType.SEARCH_MOVIES_SUCCESS:
            return {isLoading:false,error:null,moviesData:action.payload}
        case ActionType.SEARCH_MOVIES_ERROR:
            return {isLoading:false,error:action.payload,moviesData:[]}
        default:
            return state;
    }

}
export default reducer;