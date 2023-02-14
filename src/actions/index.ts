import { ActionType,MovieDataType} from "../types";


interface SearchRepositoriesAction{
    type:ActionType.SEARCH_MOVIES;
    
}
interface SearchRepositoriesSuccessAction{
    type:ActionType.SEARCH_MOVIES_SUCCESS;
    payload:MovieDataType[];
    
}
interface SearchRepositoriesErrorAction{
    type:ActionType.SEARCH_MOVIES_ERROR;
    payload:string;
    
}

export type Action = SearchRepositoriesAction|SearchRepositoriesSuccessAction|SearchRepositoriesErrorAction;