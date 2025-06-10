
import GreetingCardChild from "./GreetingCardChild.jsx";

function GreetingCardParent() {

    return(
        <>
            <GreetingCardChild username="Alice" isVip={true} isLoggedIn={true} />
            <GreetingCardChild username="Bob" isVip={false} isLoggedIn={true} />
            <GreetingCardChild username="" isVip={false} isLoggedIn={false} />
        </>
    );
}

export default GreetingCardParent