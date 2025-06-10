
import GreetingCardChild from "./GreetingCardChild.jsx";

function GreetingCardParent() {

    return(
        <>
            <GreetingCardChild username="Alice" isVip={true} isLoggedIn={true} />
            <GreetingCardChild username="Bob" isVip={true} isLoggedIn={true} />
            <GreetingCardChild username="" isVip={false} isLoggedIn={true} />
        </>
    );
}

export default GreetingCardParent