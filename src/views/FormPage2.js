import NavSection from "../components/NavSection";
import TextContent from "../components/TextContent";
import TextArea from "../components/TextArea";
import Checkbox from "../components/Checkbox";

export default function FormPage2() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
            style={{ display: "none" }}
        >
            <TextContent id="359" img="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172449_Form203P20(1)20(2).pdf.66dee9450b4218.85233077.png" imgStyle={{ textAlign: "center" }} heading="SECTION C - INFORMATION ABOUT DAILY ACTIVITIES" />
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_360"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_360"
                    htmlFor="input_360"
                    aria-hidden="false"
                >
                    9. Describe what the disabled person does from the time he/she wakes up
                    until going to bed.<span className="form-required">*</span>
                </label>
                <div
                    id="cid_360"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_360" name="q360_9Describe" labelled="label_360" />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={400}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_360-limit"
                                >
                                    0/400
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_361"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_361"
                    aria-hidden="false"
                >
                    10. Does this person take care of anyone else such as a wife/husband,
                    children, grandchildren, parents, friend, other?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_361"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_361"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_361"
                                validate={["required", "maxselection"]}
                                id="input_361_0"
                                name="q361_10Does[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_361_0" htmlFor="input_361_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_361"
                                validate={["required", "maxselection"]}
                                id="input_361_1"
                                name="q361_10Does[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_361_1" htmlFor="input_361_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_363"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_363"
                    htmlFor="input_363"
                    aria-hidden="false"
                >
                    If "YES," for whom does he/she care, and what does he/she do for them?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_363"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_363" name="q363_ifyes" labelled="label_363" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_363-limit"
                                >
                                    0/300
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_362"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_362"
                    aria-hidden="false"
                >
                    11. Does he/she take care of pets or other animals?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_362"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_362"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_362"
                                validate={["required", "maxselection"]}
                                id="input_362_0"
                                name="q362_11Does[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_362_0" htmlFor="input_362_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_362"
                                validate={["required", "maxselection"]}
                                id="input_362_1"
                                name="q362_11Does[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_362_1" htmlFor="input_362_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_365"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_365"
                    htmlFor="input_365"
                    aria-hidden="false"
                >
                    If "YES," what does he/she do for them?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_365"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_365" name="q365_ifyes365" labelled="label_365" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={200}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_365-limit"
                                >
                                    0/200
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_364"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_364"
                    aria-hidden="false"
                >
                    12. Does anyone help this person care for other people or animals?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_364"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_364"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_364"
                                validate={["required", "maxselection"]}
                                id="input_364_0"
                                name="q364_12Does[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_364_0" htmlFor="input_364_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_364"
                                validate={["required", "maxselection"]}
                                id="input_364_1"
                                name="q364_12Does[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_364_1" htmlFor="input_364_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_367"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_367"
                    htmlFor="input_367"
                    aria-hidden="false"
                >
                    If "YES," who helps, and what do they do to help?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_367"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_367" name="q367_ifyes367" labelled="label_367" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_367-limit"
                                >
                                    0/300
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_368"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_368"
                    htmlFor="input_368"
                    aria-hidden="false"
                >
                    13. What was the disabled person able to do before his/her illnesses,
                    injuries, or conditions that he/she can't do now?
                    <span className="form-required">*</span>{" "}
                </label>
                <div
                    id="cid_368"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_368" name="q368_13What" labelled="label_368" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_368-limit"
                                >
                                    0/300
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_366"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_366"
                    aria-hidden="false"
                >
                    14. Do the illnesses, injuries, or conditions affect his/her sleep?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_366"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_366"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_366"
                                validate={["required", "maxselection"]}
                                id="input_366_0"
                                name="q366_14Do[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_366_0" htmlFor="input_366_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_366"
                                validate={["required", "maxselection"]}
                                id="input_366_1"
                                name="q366_14Do[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_366_1" htmlFor="input_366_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_370"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_370"
                    htmlFor="input_370"
                    aria-hidden="false"
                >
                    If "YES," how?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_370"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_370" name="q370_ifyes370" labelled="label_370" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_370-limit"
                                >
                                    0/300
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_369"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_369"
                    aria-hidden="false"
                >
                    15. PERSONAL CARE: Does the disabled person have PROBLEMS with personal
                    care?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_369"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_369"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_369"
                                validate={["required", "maxselection"]}
                                id="input_369_0"
                                name="q369_15Personal[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_369_0" htmlFor="input_369_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_369"
                                validate={["required", "maxselection"]}
                                id="input_369_1"
                                name="q369_15Personal[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_369_1" htmlFor="input_369_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_text"
                id="id_371"
            >
                <div id="cid_371" className="form-input-wide" data-layout="full">
                    <div
                        id="text_371"
                        className="form-html"
                        data-component="text"
                        tabIndex={-1}
                    >
                        <p>
                            <strong>
                                <span style={{ fontSize: "12pt" }}>
                                    a. Explain how the illnesses, injuries, or conditions affect
                                    this person's ability to:{" "}
                                </span>
                            </strong>
                        </p>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_373"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_373"
                    htmlFor="input_373"
                    aria-hidden="false"
                >
                    Dress:
                </label>
                <div id="cid_373" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_373" name="q373_dress" labelled="label_373" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={88}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_373-limit"
                                >
                                    0/88
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_374"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_374"
                    htmlFor="input_374"
                    aria-hidden="false"
                >
                    Bathe:
                </label>
                <div id="cid_374" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_374" name="q374_bathe" labelled="label_374" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={88}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_374-limit"
                                >
                                    0/88
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_375"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_375"
                    htmlFor="input_375"
                    aria-hidden="false"
                >
                    Care for hair:{" "}
                </label>
                <div id="cid_375" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_375" name="q375_careFor" labelled="label_375" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={80}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_375-limit"
                                >
                                    0/80
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_376"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_376"
                    htmlFor="input_376"
                    aria-hidden="false"
                >
                    Shave:
                </label>
                <div id="cid_376" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_376" name="q376_shave" labelled="label_376" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={80}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="None"
                                    id="input_376-limit"
                                >
                                    0/80
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_377"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_377"
                    htmlFor="input_377"
                    aria-hidden="false"
                >
                    Feed self:{" "}
                </label>
                <div id="cid_377" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_377" name="q377_feedSelf" labelled="label_377" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={80}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_377-limit"
                                >
                                    0/80
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_378"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_378"
                    htmlFor="input_378"
                    aria-hidden="false"
                >
                    Use the toilet:{" "}
                </label>
                <div id="cid_378" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_378" name="q378_useThe" labelled="label_378" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={80}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_378-limit"
                                >
                                    0/80
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_379"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_379"
                    htmlFor="input_379"
                    aria-hidden="false"
                >
                    Other:
                </label>
                <div id="cid_379" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_379" name="q379_other" labelled="label_379" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={80}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_379-limit"
                                >
                                    0/80
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <NavSection id="508" />
        </ul>
    )
}