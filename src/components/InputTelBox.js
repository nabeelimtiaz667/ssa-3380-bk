export default function InputTelBox({ id = "", name = "", defaultValue = "", autoComplete = "", placeholder, dataComponent = "", required = true, labelled = "" }) {
    return <input
        type="tel"
        id={id}
        name={name}
        className="form-textbox validate[required]"
        data-defaultvalue={defaultValue}
        autoComplete={autoComplete}
        placeholder={placeholder}
        data-component={dataComponent}
        aria-labelledby={labelled}
        required={required}
        defaultValue={defaultValue}
    />
}