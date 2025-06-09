import  profilePic from "./assets/Profile pix HNG.jpg"

function Card() {

    return(
        <div className="md:max-w-63 md:mx-auto flex
                        flex-col
                        items-center 
                        justify-center mt-6 border rounded-2xl
                         border-gray-100 shadow-lg shadow-gray-300">
            <img className="max-w-45 rounded-full mb-2 mt-2" src={profilePic} alt="Profile Picture" />
            <h1 className="mb-2 font-bold text-gray-500 text-3xl">Joker</h1>
            <p className="text-gray-500">I am Learning ReactJs</p>
        </div>
    );
}

export default Card