import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

const intialStateSearch = {
    searchField : ''
}
const intialStateRobots={
    isPending: false,
    robots:[],
    error:''
}

export const searchRobots =(state=intialStateSearch,action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload})
        default:
            return state;
    }
}
export const requestRobots =(state=intialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending : true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{isPending : false,robots : action.payload})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state,{isPending : false,error : action.error})
        default: 
            return state;
    }
}