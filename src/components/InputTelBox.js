export default function InputTelBox({ id = "", name = "", defaultValue = "", autoComplete = "", placeholder, dataComponent = "", required = true, labelled = "", tailwind = "" }) {
    return <input
        type="tel"
        id={id}
        name={name}
        className={"validate[required] " + tailwind}
        data-defaultvalue={defaultValue}
        autoComplete={autoComplete}
        placeholder={placeholder}
        data-component={dataComponent}
        aria-labelledby={labelled}
        required={required}
        defaultValue={defaultValue}
    />
}