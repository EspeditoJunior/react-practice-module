function AddUser (props){

    function AddUserHandler(event){
        event.preventDefault();
    }

    return (
        <form onSubmit={AddUserHandler}>
            <label htmlFor="userName">UserName</label>
            <input id="userName" type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"/>
            <button type="submit">Add User</button>
        </form>
    );

};

export default AddUser;