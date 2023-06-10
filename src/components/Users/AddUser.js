import Card from "../UI/Card";
import style from './AddUser.module.css';
import Button from '../UI/Button';

function AddUser (props){

    function AddUserHandler(event){
        event.preventDefault();
    }

    return (
        <Card className={style.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="userName">UserName</label>
                <input id="userName" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );

};

export default AddUser;