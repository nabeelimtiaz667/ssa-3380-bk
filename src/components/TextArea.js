export default function TextArea({ id = "", name = "", required = true, width = 648, height = 100, defaultValue = "", labelled = "" }) {
    const style = { width: width, height: height }
    let className = "form-textarea";
    className = required ? (className + " validate[required]") : className
    return <textarea
        id={id}
        className={className}
        name={name}
        style={style}
        data-component="textarea"
        required={required}
        aria-labelledby={labelled}
        defaultValue={defaultValue}
    />
}