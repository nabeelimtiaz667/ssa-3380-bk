export default function NavSection({ id = "" }) {
    return (
        <li id={"cid_" + id} className="form-input-wide" data-type="control_pagebreak">
            <div className="form-pagebreak" data-component="pagebreak">
                <div className="form-pagebreak-back-container">
                    <button
                        id={"form-pagebreak-back_" + id}
                        type="button"
                        className="form-pagebreak-back  jf-form-buttons"
                        data-component="pagebreak-back"
                    >
                        Back
                    </button>
                </div>
                <div className="form-pagebreak-next-container">
                    <button
                        id={"form-pagebreak-next_" + id}
                        type="button"
                        className="form-pagebreak-next  jf-form-buttons"
                        data-component="pagebreak-next"
                    >
                        Next
                    </button>
                </div>
                <div
                    style={{ clear: "both" }}
                    className="pageInfo form-sub-label"
                    id={"pageInfo_" + id}
                />
            </div>
        </li>
    )
}