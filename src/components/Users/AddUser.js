import Card from "../UI/Card";
import style from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper'

import { useState, useRef } from "react";

function AddUser (props){
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    //const [enteredUserName, setEnteredUserName] = useState('');
    //const [enteredeUserAge, setEnteredeUserAge] = useState('');
    const [error, setError] = useState();

    function AddUserHandler(event){
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({title: 'Invalid Input', message : 'Enter valid values'});
            return;
        }

        if(+enteredAge < 1){
            setError({title: 'Invalid Input', message : 'Enter valid age'});
            return;
        }

        props.onAddUser(enteredName,enteredAge);
        console.log(enteredName,enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        //setEnteredUserName('');
        //setEnteredeUserAge('');
    }

    //function userNameChangeHandler(event){
    //    setEnteredUserName(event.target.value);
    //}

    //function userAgeChangeHandler(event){
    //    setEnteredeUserAge(event.target.value);
    //}

    function errorHandler(){
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/> }
            <Card className={style.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="userName">UserName</label>
                    <input ref={nameInputRef} id="userName" type="text"/>
                    <label htmlFor="age">Age (Years)</label>
                    <input ref={ageInputRef} id="age" type="number"/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;