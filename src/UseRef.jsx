
import {useRef} from "react";

function UseRef(){
    const emailVal=useRef(null);
    const phoneVal=useRef(null);

function handleSubmit(e){
e.preventDefault();
console.log(emailVal.current.value);
console.log(phoneVal.current.value);
}
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            ref={emailVal}
            />
            <input
            type="phone"
            ref={phoneVal}
            />
            <button>Submit</button>
        </form>

        </>
    )
}

export default UseRef;







