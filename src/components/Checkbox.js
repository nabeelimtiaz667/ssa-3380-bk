export default function Checkbox({
    id,
    name,
    defaultValue,
    className = "form-checkbox",
    isOther = false,
    validate = [],
    ...restProps
}) {
    // Handle the "other" checkbox class
    const checkboxClass = isOther
        ? `${className} form-checkbox-other`
        : className;

    // Add validation rules to class if provided
    const finalClassName = validate.length > 0
        ? `${checkboxClass} validate[${validate.join(",")}]`
        : checkboxClass;

    return (
        <input
            type="checkbox"
            id={id}
            name={name}
            className={finalClassName}
            defaultValue={defaultValue}
            {...restProps}
        />
    );
}