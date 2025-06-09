import UserGreetingsChild from "./UserGreetingsChild";

function UserGreetingsParent() {

    return(
        <UserGreetingsChild isLoggedIn={true} username={"Hassan"}/>
    );
}

export default UserGreetingsParent