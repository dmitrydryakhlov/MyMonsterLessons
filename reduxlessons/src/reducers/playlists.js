const initialState = []

export default function playlist (state = initialState, action){
    if(action.type === 'ADD_PLAYLIST'){
        return [
            ...state,
            action.payload
        ]
    }else if( action.type === 'DELETE_PLAYLIS'){
        return state;
    }
    return state;
}