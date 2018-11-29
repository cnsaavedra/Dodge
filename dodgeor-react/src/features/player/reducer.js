
// x and y axis, 
const initialState = {
    position: [0, 0],
}


//dispatch to our reducer
// w/e that is in redux store, gets returned back out
const playerReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'MOVE_PLAYER':
            return {
                ...action.payload //spreads action.payload, whichever the position was
            }
        default: 
            return state
    }
}

export default playerReducer
