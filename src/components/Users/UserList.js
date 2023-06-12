import classes from './UserList.module.css';

import Card from '../UI/Card';


function UserList(props){
    return (
        <Card className = {classes.users}>
            {props.users.length > 0 &&
                <ul>
                    {props.users.map(user => 
                        <li key={Math.random()}>{user.name} ({user.age} years old)</li>
                    )}
                </ul>
            }
        </Card>
    );
};

export default UserList;