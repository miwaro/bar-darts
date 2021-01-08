import React, { useState } from 'react'
import { connect } from 'react-redux';

import classes from './DartBoardPlayer/DartBoardPlayerControl/DartBoardPlayerControl.module.css';
import reset from '../../audioclips/navigation_transition-right.wav';
import { removePlayer } from '../../store/actions/actions';

import Tooltip from '@material-ui/core/Tooltip';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const TotalScore = (props) => {

    console.log(props)
    const removePlayerHandler = () => {
        if (!props.muted) playSound(resetAudio);
        props.onRemovePlayer(props.playerIndex) && setOpen(false);
    }

    const resetAudio = new Audio(reset);

    const playSound = audioFile => {
        audioFile.play();
    }



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        playSound(resetAudio);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div
            className={classes.DartBoardPlayerControl}
        >
            {
                props.players.length > 1 &&
                <div>
                    {`Total:\u00A0${props.score}/21 \u00A0`}
                    {`Rank:\u00A0${props.rank} \u00A0`}
                </div>

            }

            {props.players.length <= 1 &&
                <>
                    <span>
                        {`Total:\u00A0${props.score}/21 \u00A0`}
                    </span>
                    <span>
                        {`Rank:\u00A0${props.rank} \u00A0`}
                    </span>
                </>
            }

            <Tooltip title="Remove Player" placement="top">
                <IconButton onClick={handleClickOpen} aria-label="delete">
                    <RemoveCircleIcon
                        className={classes.removeCircle} />
                </IconButton>
            </Tooltip>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">{`Remove ${props.player.name} from the game?`}</DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        No
                </Button>
                    <Button
                        size="small"
                        onClick={removePlayerHandler}
                        color="primary">
                        Yes
                </Button>
                </DialogActions>
            </Dialog>

        </div>

    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        muted: state.muted
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onRemovePlayer: (playerIndex) => dispatch(removePlayer(playerIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalScore);


