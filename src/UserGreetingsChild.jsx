

function UserGreetingsChild(props) {

    return(
            /*  props.isLoggedIn ? <h1 className="bg-green-400 text-2xl text-white p-3 text-center mt-3">Welcome {props.username}</h1> : <h1 className="bg-red-400 text-2xl text-white text-center p-3 mt-3">Please Log in to continue</h1> */
            <div className="">
                {props.isLoggedIn ? (
                    <h1 className="bg-green-400 text-2xl text-white p-3 mt-3">
                        Welcome Back {props.username}
                    </h1>
                ):
                <h1 className="bg-red-400 text-2xl text-white p-3 mt-3">
                    Please Log in 
                </h1>
                }
            </div>
    );
}

export default UserGreetingsChild