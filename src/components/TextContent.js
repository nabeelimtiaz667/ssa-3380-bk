export default function TextContent({ id = "", img = "", text = "", heading = "", imgStyle = {}, headingStyle = { textAlign: "center" }, children }) {
    return (
        <li className="form-line" data-type="control_text" id={"id_" + id}>
            <div id={"cid_" + id} className="form-input-wide" data-layout="full">
                <div
                    id={"text_" + id}
                    className="form-html"
                    data-component="text"
                    tabIndex={-1}
                >
                    {img.length > 0 && (
                        <p style={imgStyle}>
                            <img
                                src={img}
                                alt=""
                            />
                        </p>
                    )}
                    {text.length > 0 && (
                        <p>
                            <em>
                                {text}
                            </em>
                        </p>
                    )}
                    {heading.length > 0 && (
                        <p style={headingStyle}>
                            <span style={{ fontSize: "14pt" }}>
                                <strong>{heading}</strong>
                            </span>
                        </p>
                    )}
                    {children && children}
                </div>
            </div>
        </li>
    )
}