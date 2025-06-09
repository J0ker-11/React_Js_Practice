
function GreetingCardChild(props) {

    return(
       props.isLoggedIn && props.isVip  ? <h2>Welcome back {props.username}! <p> Vip Member⭐</p> </h2> : props.isLoggedIn && !props.isVip ? <h2> Welcome back {props.username}! <p>Vip Member</p> </h2>  : <h2>Please Log in</h2> 
    );
}

export default GreetingCardChild