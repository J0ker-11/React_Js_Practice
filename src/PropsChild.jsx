

function PropsChild(props) {

    return(
        <div  className="w-60 mt-3 border-1 border-black p-2 text-2xl">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Student: {props.isStudent ? "Yes" : "No"} </p>
        </div>
    );
}

export default PropsChild