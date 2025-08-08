export default function FormLine({ children, control = "", id = "" }) {
    return <li
        className="form-line jf-required"
        data-type={control}
        id={id}
    >{children}</li>
}