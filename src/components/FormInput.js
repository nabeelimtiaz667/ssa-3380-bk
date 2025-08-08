export default function FormInput({ children, id = "" }) {
    return <div
        id={id}
        className="form-input-wide flex flex-col jf-required"

    >{children}</div>
}