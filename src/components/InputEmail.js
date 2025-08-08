export default function InputEmail({ id = "", name = "", autoComplete = "", labelled = "" }) {
    return <input
        type="email"
        id={id}
        name={name}
        className="form-textbox validate[Email]"
        data-defaultvalue=""
        autoComplete={autoComplete + " mail"}
        style={{ width: 310 }}
        size={310}
        placeholder="example@example.com"
        data-component="email"
        aria-labelledby={labelled}
        defaultValue=""
    />
}