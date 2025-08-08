export default function InputTelDate({ id = "", name = "", size = 2, autoComplete = "off", labelled = "", defaultValue = undefined, isCurrentDate = false }) {
    const maxLength = size;
    const customData = defaultValue ? { defaultValue: defaultValue } : {}
    const currentDate = isCurrentDate ? "currentDate " : "";
    return (
        <input
            className={currentDate + "form-textbox validate[required, limitDate]"}
            id={id}
            name={name}
            type="tel"
            size={size}
            data-maxlength={maxLength}
            data-age=""
            maxLength={maxLength}
            required=""
            autoComplete={autoComplete}
            aria-labelledby={labelled}
            {...customData}
        />
    );
}