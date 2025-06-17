import { useRef } from "react";


const Footer = () => {

    const ref = useRef(null);
    return (
        <>
        <input type="text" ref={ref}/>
       <button onClick={() => ref.current.focus()}>aaa</button>
        </>
    )
}

export default Footer;