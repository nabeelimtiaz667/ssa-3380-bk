export default function FormLabel({ children, id = "", htmlFor = "", ariaHidden = "false" }) {
    return <label
        className=""
        id={id}
        htmlFor={htmlFor}
        aria-hidden={ariaHidden}
    >{children}</label>
}