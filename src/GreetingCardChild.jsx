
function GreetingCardChild(props) {
    return (
        <div className="p-6 m-4 border-2 border-gray-300 rounded-lg bg-white shadow-lg max-w-sm">
            {props.isLoggedIn ? (
                <div>
                    <h2 className="text-xl font-bold text-green-600 mb-3">Welcome Back, {props.username}!</h2>
            {props.isVip ? (
                <div className="flex items-center space-x-2">
                    <span className="text-2xl">⭐</span>
                    <span className="bg-yellow-400 twxt-black px-3 py-1 rounded-full font-semibold">
                        Vip Member
                    </span>
                </div>
            ) : (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                    Member
                </span>
            )}
                </div>
            ):(
                <div>
                    <h2 className="text-xl font-bold text-red-600">
                        Please Log in
                    </h2>
                </div>
            )}
        </div>
  );
}

export default GreetingCardChild