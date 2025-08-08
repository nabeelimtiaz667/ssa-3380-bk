export default function InputTextOther({ id = "", name = "", hint = "", placeholder = "" }) {
    return <input
        id={id}
        name={name}
        type="text"
        className="form-checkbox-other-input form-textbox"
        data-otherhint={hint}
        size={15}
        data-placeholder={placeholder}
        placeholder={placeholder}
    />
}