

function UserGreetingsChild(props) {

    return(
             props.isLoggedIn ? <h1 className="bg-green-400 text-2xl text-white p-3 mt-3">Welcome {props.username}</h1> : <h1 className="bg-red-400 text-2xl text-white p-3 mt-3">Please Log in to continue</h1>
    );
}

export default UserGreetingsChild