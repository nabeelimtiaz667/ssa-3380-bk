export default function InputTextBox({ id = "", name = "", defaultValue = "", style = { width: 310 }, size = 310, placeholder = "", required = true, labelled = "", ...restProps }) {
    let className = "";
    className = required ? (className + " validate[required]") : className
    return <input
        type="text"
        id={id}
        name={name}
        data-type="input-textbox"
        className={className}
        data-defaultvalue={defaultValue}
        // style={style}
        // size={size}
        placeholder={placeholder}
        data-component="textbox"
        aria-labelledby={labelled}
        required={required}
        defaultValue={defaultValue}
        {...restProps}
    />
}