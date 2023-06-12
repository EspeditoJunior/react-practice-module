import Card from "../UI/Card";
import style from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import { useState } from "react";

function AddUser (props){

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredeUserAge, setEnteredeUserAge] = useState('');

    function AddUserHandler(event){
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredeUserAge.trim().length === 0){
            return;
        }

        if(+enteredeUserAge < 1){
            return;
        }

        props.onAddUser(enteredUserName,enteredeUserAge);
        console.log(enteredUserName,enteredeUserAge);
        setEnteredUserName('');
        setEnteredeUserAge('');
    }

    function userNameChangeHandler(event){
        setEnteredUserName(event.target.value);
    }

    function userAgeChangeHandler(event){
        setEnteredeUserAge(event.target.value);
    }


    return (
        <div>
            <ErrorModal title="An error occured!" message="Something went wrong!"/>
            <Card className={style.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="userName">UserName</label>
                    <input value={enteredUserName} onChange={userNameChangeHandler} id="userName" type="text"/>
                    <label htmlFor="age">Age (Years)</label>
                    <input value={enteredeUserAge} onChange={userAgeChangeHandler}  id="age" type="number"/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );

};

export default AddUser;