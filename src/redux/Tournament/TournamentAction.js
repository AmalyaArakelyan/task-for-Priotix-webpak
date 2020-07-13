import { SEARCH_RESULT, ERROR, CLEAR_ERROR , SELECT, LOADING} from './Types';
import axios from 'axios';
import { API } from "../../config/config.json";

export const searchTournament = () => {
    
    return async (dispatch, getState) => {
        const keyword= getState().search.keyword
        if(!keyword){
            dispatch({
                type: SEARCH_RESULT,
                payload: []
            });
            return dispatch({
                type: CLEAR_ERROR
            });
        }
        if(keyword && keyword.length < 2){
            dispatch({
                type: SEARCH_RESULT,
                payload: []
            });
           return dispatch({
                type: ERROR,
                payload: {
                    type:'warning',
                    message:"Text must contain min. 2 characters"
                }
            });
        }
        
        try {
            dispatch({
                type: LOADING,
                payload: true
            });
            const response = await axios.get(`${API}search`, {
                'params': {
                    q:keyword,
                    index:'tournament'
                }
            });
            if(response.data && response.data[0] && response.data[0].documents && response.data[0].documents.length){
                console.log(response.data[0].documents, 'brands')
                dispatch({
                    type: SEARCH_RESULT,
                    payload: response.data[0].documents
                });
                dispatch({
                    type: CLEAR_ERROR
                });
            }else{
                dispatch({
                    type: SEARCH_RESULT,
                    payload: []
                });
                dispatch({
                    type: ERROR,
                    payload: {
                        message:"No search result",
                        type:'info'}
                })
            }
            
        
        } catch (err) {
        
            dispatch({
                type: ERROR,
                payload: {...err, type:'error'}
            })
        } finally {
            dispatch({
                type: LOADING,
                payload: false
            });
        }
        
    };
};

export const selectItem = (item) => {
    return async (dispatch, getState) => {
        const selected = getState().tournament.selected
        selected[item.id] = item
        localStorage.setItem('selected', JSON.stringify(selected));
        dispatch({
            type: SELECT,
            payload: selected
        });
        
    };
};
export const deleteItem = (id) => {
    return async (dispatch, getState) => {
        const selected = getState().tournament.selected
        delete selected[id]
        localStorage.setItem('selected', JSON.stringify(selected));
        dispatch({
            type: SELECT,
            payload: selected
        });
        
    };
};



