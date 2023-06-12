import classes from './ErrorModal.module.css';

import { useState } from 'react';
import Card from './Card';
import Button from './Button';

function ErrorModal(props){

    function buttonClickHandler(){

    }

    return (
        <div>
            <div className={classes.backdrop} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={buttonClickHandler}>Ok</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;