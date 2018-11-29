import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import handleMovement from './movement'

function Player(props){
    return(
        <div
            style = {{
                position: 'absolute',
                top: props.position[1], 
                left: props.position[0], 
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '50px',
                height: '50px'
            }}            
        />
    )

}

function mapStateToProps(state){
    return{ // give me all the player attributes from the store (using spread operator)
        ...state.player,

    }
}

// first brackets for maps states to props, then later map dispatch to prps
// second brackets is for player
export default connect(mapStateToProps)(handleMovement(Player))