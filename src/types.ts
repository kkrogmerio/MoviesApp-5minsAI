
import { useSelector,TypedUseSelectorHook } from "react-redux";
import { RootState } from "./reducers";

export const useTypedSelector:TypedUseSelectorHook<RootState>=useSelector;

export type MovieItemType={
    title:string;

    poster_path:string;
    backdrop_path:string;
    vote_average:number;
    id:number;
    vote_count:number;
}

export type MovieDetailsType={
    title:string;
    adult:boolean;
    overview:string;
    vote_average:number;
    backdrop_path:string;
    release_date:string;
    popularity:number;
    original_language:string;
    
    
}
export type MovieDataType=MovieItemType&MovieDetailsType;
export enum ActionType{
    SEARCH_MOVIES='SEARCH_MOVIES',
    SEARCH_MOVIES_SUCCESS='SEARCH_MOVIES_SUCCESS',
    SEARCH_MOVIES_ERROR='SEARCH_MOVIES_ERROR'
}