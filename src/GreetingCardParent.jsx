
import GreetingCardChild from "./GreetingCardChild.jsx";

function GreetingCardParent() {

    return(
       <div className="bg-gray-200 m-h-screen p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Greeting Card Examples
        </h1>

        <div className="flex flex-wrap justify-center">
            
                <GreetingCardChild 
                    isLoggedIn={true} 
                    username="Alice" 
                    isVip={true}/>

                <GreetingCardChild 
                    isLoggedIn={true} 
                    username="Bob" 
                    isVip={false}/>

                <GreetingCardChild 
                    isLoggedIn={false} 
                    username="" 
                    isVip={false}/>
        </div>
       </div>
    );
}

export default GreetingCardParent