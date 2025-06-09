import PropsChild from "./PropsChild";
function PropsParent() {

    return(
        <>
            <PropsChild name="SpongeBob" age={30} isStudent={true}/> 
            <PropsChild name="Patrick" age={42} isStudent={false}/> 
            <PropsChild name="Squidward" age={50} isStudent={false}/> 
            <PropsChild name="Sandy" age={27} isStudent={true}/> 
            <hr className="mt-3" />
        </>
    );
}

export default PropsParent