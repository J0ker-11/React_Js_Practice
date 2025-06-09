import UserGreetingsChild from "./UserGreetingsChild";

function UserGreetingsParent() {

    return(
        <UserGreetingsChild isLoggedIn={false} username={"Hassan"}/>
    );
}

export default UserGreetingsParent