import UserGreetingsChild from "./UserGreetingsChild";

function UserGreetingsParent() {

    return(
        <div className="bg-red-200 m-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Practice Greeting Card
            </h1>
            <div className="text-center">
                <UserGreetingsChild 
                    isLoggedIn={true} 
                    username={"Hassan"}
                />
                <UserGreetingsChild 
                    isLoggedIn={false} 
                    username={"Ibrahim"}
                />
            </div>
        </div>
    );
}

export default UserGreetingsParent