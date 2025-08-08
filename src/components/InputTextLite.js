export default function InputTextLite({ id = "" }) {
    return <input
        className="form-textbox validate[required, limitDate, validateLiteDate]"
        id={"lite_mode_" + id}
        type="text"
        size={12}
        data-maxlength={12}
        maxLength={12}
        data-age=""
        required=""
        data-format="mmddyyyy"
        data-seperator="/"
        placeholder="MM/DD/YYYY"
        data-placeholder="MM/DD/YYYY"
        autoComplete="off"
        aria-labelledby={"label_" + id}
        defaultValue="08/05/2025"
    />
}