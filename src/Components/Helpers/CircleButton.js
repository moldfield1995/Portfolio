import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    paper: {
        background: 'rgba(255, 255, 255, 0.18)',
        '& .MuiButton-label':{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            alignItems: 'center',
            '& .descriptor': {
                marginTop: 20,
            }
        },
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 50,
        background: props => props.backgroundColor ?? 'none',
        color: props => props.textColor ?? '#000',
        '& img': {
            height: '100%',
            width: '100%',
            '&.small':{
                maxWidth: 65,
                objectFit: 'contain'
            },
        },
        '& svg':{
            fontSize: 60
        },

    },
}));

function CircleButtonRender({ text, image, icon, fullSize, descriptor, backgroundColor, textColor, onClick }) {
    const classes = useStyles({ backgroundColor, textColor });
    return <Button className={classes.paper} onClick={onClick} >
        <div className={classes.icon}>
            {image === undefined ? null : <img src={image} alt={text} className={fullSize ? '' : 'small'}/>}
            {icon === undefined ? null : icon}
        </div>
        <span className="descriptor">
            {descriptor}
        </span>
    </Button>
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