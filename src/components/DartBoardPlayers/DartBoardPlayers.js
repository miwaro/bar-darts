import React, { Component } from 'react';
import { connect } from 'react-redux';

import DartBoardPlayer from './DartBoardPlayer/DartBoardPlayer';
import classes from './DartBoardPlayers.module.css';

class dartBoardPlayers extends Component {

    render() {
        return (
            <div className={classes.dartBoardPlayers}>
                {this.props.players.map((player, i) => (
                    <DartBoardPlayer
                        player={player}
                        playerIndex={i}
                        key={i}   
                    />
                ))}             
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        players: state.players
    };
}

export default connect(mapStateToProps)(dartBoardPlayers);