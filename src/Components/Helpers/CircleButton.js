import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        alignItems: 'center',
        '& .descriptor': {
            marginTop: 20,
        }
    },
    button: {
        height: 100,
        width: 100,
        borderRadius: 50,
        background: props => props.backgroundColor ?? 'none',
        color: props => props.textColor ?? '#000',
        '& img': {
            height: '100%',
            width: '100%',
            '&.small':{
                maxWidth: 65
            },
        },
        '& svg':{
            fontSize: 60
        }
    },
}));

function CircleButtonRender({ text, image, icon, fullSize, descriptor, backgroundColor, textColor, onClick }) {
    const classes = useStyles({ backgroundColor, textColor });
    return <Paper className={classes.paper} onClick={onClick} >
        <Button className={classes.button} onClick={onClick}>
            {image === undefined ? null : <img src={image} alt={text} className={fullSize ? '' : 'small'}/>}
            {icon === undefined ? null : icon}
        </Button>
        <span className="descriptor">
            {descriptor}
        </span>
    </Paper>
}

const CircleButton = React.memo(CircleButtonRender,
    function areEqual(prevProps, currentProps) {
        return prevProps.text === currentProps.text &&
            prevProps.image === currentProps.image ;
    });

export default CircleButton;

CircleButtonRender.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    icon: PropTypes.object,
    fullSize: PropTypes.bool,
    descriptor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};