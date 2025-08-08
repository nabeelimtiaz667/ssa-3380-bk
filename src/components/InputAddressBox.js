export default function InputAddressBox({ addressType = "", className = "", data = "", autoComplete = "", required = false }) {
    const isRequired = required ? { required: "" } : {}
    return <input
        type="text"
        id={"input_319_" + addressType}
        name={"q319_mailingAddress[" + addressType + "]"}
        className={"form-textbox" + (required ? " validate[required] " : " ") + "form-address-" + className}
        data-defaultvalue=""
        autoComplete={"section-input_319 " + autoComplete}
        data-component={data}
        aria-labelledby={"label_319 sublabel_319_" + addressType}
        defaultValue=""
        {...isRequired}
    />
}