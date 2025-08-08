import Checkbox from "../components/Checkbox";
import InputTextOther from "../components/InputTextOther";
import NavSection from "../components/NavSection";
import TextArea from "../components/TextArea";
import TextContent from "../components/TextContent";

export default function FormPage5() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
            style={{ display: "none" }}
        >
            <TextContent id="423" img="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172945_Form203P20(1)20(2).pdf.66deea6b7f3ff6.53954230.png" />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_420"
            >
                <label
                    className="form-label form-label-top"
                    id="label_420"
                    aria-hidden="false"
                >
                    b. Has the disabled person's ability to handle money changed since the
                    illnesses, injuries, or conditions began?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_420"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_420"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_420"
                                validate={["required", "maxselection"]}
                                id="input_420_0"
                                name="q420_useA420[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_420_0" htmlFor="input_420_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_420"
                                validate={["required", "maxselection"]}
                                id="input_420_1"
                                name="q420_useA420[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_420_1" htmlFor="input_420_1">
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
                id="id_422"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_422"
                    htmlFor="input_422"
                    aria-hidden="false"
                >
                    If "YES," explain how the ability to handle money has changed
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_422"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_422" name="q422_ifyes422" labelled="label_422" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_422-limit"
                                >
                                    0/300
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="494" heading="21. HOBBIES AND INTERESTS" headingStyle={{}} />
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_425"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_425"
                    htmlFor="input_425"
                    aria-hidden="false"
                >
                    a. What are his/her hobbies and interests? (For example, reading,
                    watching TV, sewing, playing sports, etc.)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_425"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_425" name="q425_aWhat" labelled="label_425" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_425-limit"
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
                id="id_426"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_426"
                    htmlFor="input_426"
                    aria-hidden="false"
                >
                    b. How often and how well does he/she do these things?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_426"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_426" name="q426_bHow426" labelled="label_426" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_426-limit"
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
                id="id_427"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_427"
                    htmlFor="input_427"
                    aria-hidden="false"
                >
                    c. Describe any changes in these activities since the illnesses,
                    injuries, or conditions began.<span className="form-required">*</span>
                </label>
                <div
                    id="cid_427"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_427" name="q427_cDescribe" labelled="label_427" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_427-limit"
                                >
                                    0/300
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="428" heading="22. SOCIAL ACTIVITIES" headingStyle={{}} />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_429"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_429"
                    aria-hidden="false"
                >
                    a. How does the disabled person spend time with others? (Check all that
                    apply.)<span className="form-required">*</span>
                </label>
                <div
                    id="cid_429"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-multiple-column"
                        data-columncount={2}
                        role="group"
                        aria-labelledby="label_429"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_429"
                                validate={["required"]}
                                id="input_429_0"
                                name="q429_aHow429[]"
                                required=""
                                defaultValue="In person"
                            />
                            <label id="label_input_429_0" htmlFor="input_429_0">
                                In person
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_429"
                                validate={["required"]}
                                id="input_429_1"
                                name="q429_aHow429[]"
                                required=""
                                defaultValue="On the phone"
                            />
                            <label id="label_input_429_1" htmlFor="input_429_1">
                                On the phone
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_429"
                                validate={["required"]}
                                id="input_429_2"
                                name="q429_aHow429[]"
                                required=""
                                defaultValue="Email"
                            />
                            <label id="label_input_429_2" htmlFor="input_429_2">
                                Email
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_429"
                                validate={["required"]}
                                id="input_429_3"
                                name="q429_aHow429[]"
                                required=""
                                defaultValue="Texting"
                            />
                            <label id="label_input_429_3" htmlFor="input_429_3">
                                Texting
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_429"
                                validate={["required"]}
                                id="input_429_4"
                                name="q429_aHow429[]"
                                required=""
                                defaultValue="Mail"
                            />
                            <label id="label_input_429_4" htmlFor="input_429_4">
                                Mail
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_429"
                                validate={["required"]}
                                id="input_429_5"
                                name="q429_aHow429[]"
                                required=""
                                defaultValue="Video Chat (for example Skype or Facetime)"
                            />
                            <label id="label_input_429_5" htmlFor="input_429_5">
                                Video Chat (for example Skype or Facetime)
                            </label>
                        </span>
                        <span className="form-checkbox-item formCheckboxOther">
                            <Checkbox
                                validate={["required"]}
                                isOther
                                name="q429_aHow429[other]"
                                id="other_429"
                                tabIndex={0}
                                aria-label="Other (Explain)"
                                defaultValue="other"
                            />
                            <label
                                id="label_other_429"
                                style={{ textIndent: 0 }}
                                htmlFor="other_429"
                            >
                                Other (Explain)
                            </label>
                            <span
                                id="other_429_input"
                                className="other-input-container"
                                style={{ display: "none" }}
                            >
                                <InputTextOther id="input_429" name="q429_aHow429[other]" hint="Other (Explain)" placeholder="Please type another option here" />
                            </span>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_430"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_430"
                    htmlFor="input_430"
                    aria-hidden="false"
                >
                    b. Describe the kinds of things he/she does with others.
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_430"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_430" name="q430_bDescribe430" labelled="label_430" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={100}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_430-limit"
                                >
                                    0/100
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_431"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_431"
                    htmlFor="input_431"
                    aria-hidden="false"
                >
                    How often does he/she do these things?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_431"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_431" name="q431_howOften431" labelled="label_431" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={48}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_431-limit"
                                >
                                    0/48
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_432"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_432"
                    htmlFor="input_432"
                    aria-hidden="false"
                >
                    c. List the places he/she goes on a regular basis. (For example, church,
                    community center, sports events, social groups, etc.)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_432"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_432" name="q432_cList" labelled="label_432" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={276}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_432-limit"
                                >
                                    0/276
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_433"
            >
                <label
                    className="form-label form-label-top"
                    id="label_433"
                    aria-hidden="false"
                >
                    Does he/she need to be reminded to go places?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_433"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_433"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_433"
                                validate={["required", "maxselection"]}
                                id="input_433_0"
                                name="q433_doesHeshe[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_433_0" htmlFor="input_433_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_433"
                                validate={["required", "maxselection"]}
                                id="input_433_1"
                                name="q433_doesHeshe[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_433_1" htmlFor="input_433_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_435"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_435"
                    htmlFor="input_435"
                    aria-hidden="false"
                >
                    How often does he/she go and how much does he/she take part?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_435"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_435" name="q435_howOften435" labelled="label_435" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={276}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_435-limit"
                                >
                                    0/276
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_434"
            >
                <label
                    className="form-label form-label-top"
                    id="label_434"
                    aria-hidden="false"
                >
                    Does he/she need someone to accompany him/her?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_434"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_434"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_434"
                                validate={["required", "maxselection"]}
                                id="input_434_0"
                                name="q434_doYou434[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_434_0" htmlFor="input_434_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_434"
                                validate={["required", "maxselection"]}
                                id="input_434_1"
                                name="q434_doYou434[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_434_1" htmlFor="input_434_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <NavSection id="511" />
        </ul>
    )
}