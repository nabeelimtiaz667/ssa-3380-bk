import Checkbox from "../components/Checkbox";
import InputTextBox from "../components/InputTextBox";
import NavSection from "../components/NavSection";
import TextArea from "../components/TextArea";
import TextContent from "../components/TextContent";

export default function FormPage3() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
            style={{ display: "none" }}
        >
            <TextContent id="383" img="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172541_Form203P20(1)20(2).pdf.66dee97aac65d3.58070651.png" />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_372"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_372"
                    aria-hidden="false"
                >
                    b. Does he/she need any special reminders to take care of personal needs
                    and grooming?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_372"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_372"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_372"
                                validate={["required", "maxselection"]}
                                id="input_372_0"
                                name="q372_12Do372[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_372_0" htmlFor="input_372_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_372"
                                validate={["required", "maxselection"]}
                                id="input_372_1"
                                name="q372_12Do372[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_372_1" htmlFor="input_372_1">
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
                id="id_385"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_385"
                    htmlFor="input_385"
                    aria-hidden="false"
                >
                    If "YES," what type of help or reminders are needed?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_385"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_385" name="q385_ifyes385" labelled="label_385" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={276}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_385-limit"
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
                id="id_384"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_384"
                    aria-hidden="false"
                >
                    c. Does he/she need help or reminders taking medicine?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_384"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_384"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_384"
                                validate={["required", "maxselection"]}
                                id="input_384_0"
                                name="q384_cDoes[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_384_0" htmlFor="input_384_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_384"
                                validate={["required", "maxselection"]}
                                id="input_384_1"
                                name="q384_cDoes[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_384_1" htmlFor="input_384_1">
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
                id="id_387"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_387"
                    htmlFor="input_387"
                    aria-hidden="false"
                >
                    If "YES," what kind of help does he/she need?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_387"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_387" name="q387_ifyes387" labelled="label_387" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={276}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_387-limit"
                                >
                                    0/276
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="388" heading="16. MEALS" headingStyle={{}} />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_386"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_386"
                    aria-hidden="false"
                >
                    a. Does the disabled person prepare his/her own meals?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_386"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_386"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_386"
                                validate={["required", "maxselection"]}
                                id="input_386_0"
                                name="q386_aDoes[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_386_0" htmlFor="input_386_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_386"
                                validate={["required", "maxselection"]}
                                id="input_386_1"
                                name="q386_aDoes[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_386_1" htmlFor="input_386_1">
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
                id="id_390"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_390"
                    htmlFor="input_390"
                    aria-hidden="false"
                >
                    If "Yes," what kind of food is prepared? (For example, sandwiches,
                    frozen dinners, or complete meals with several courses.)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_390"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_390" name="q390_ifyes390" labelled="label_390" height={40} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={92}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_390-limit"
                                >
                                    0/92
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_391"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_391"
                    htmlFor="input_391"
                    aria-hidden="false"
                >
                    How often does he/she prepare food or meals? (For example, daily,
                    weekly, monthly.)<span className="form-required">*</span>
                </label>
                <div
                    id="cid_391"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_391" name="q391_howOften" labelled="label_391" height={40} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={92}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_391-limit"
                                >
                                    0/92
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textbox"
                id="id_393"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_393"
                    htmlFor="input_393"
                    aria-hidden="false"
                >
                    How long does it take him/her?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_393"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <InputTextBox id="input_393" name="q393_howLong" labelled="label_393" maxLength={70} />
                    {/* <input
                        type="text"
                        id="input_393"
                        name="q393_howLong"
                        data-type="input-textbox"
                        className="form-textbox validate[required]"
                        data-defaultvalue=""
                        style={{ width: 310 }}
                        size={310}
                        maxLength={70}
                        data-component="textbox"
                        aria-labelledby="label_393"
                        required=""
                        defaultValue=""
                    /> */}
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_392"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_392"
                    htmlFor="input_392"
                    aria-hidden="false"
                >
                    Any changes in cooking habits since the illness, injuries, or conditions
                    began?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_392"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_392" name="q392_anyChanges" labelled="label_392" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={92}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_392-limit"
                                >
                                    0/92
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_394"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_394"
                    htmlFor="input_394"
                    aria-hidden="false"
                >
                    b. If "No," explain why he/she cannot or does not prepare meals.
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_394"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_394" name="q394_bIf" labelled="label_394" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={200}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_394-limit"
                                >
                                    0/200
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="395" heading="17. HOUSE AND YARD WORK" headingStyle={{}} />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_485"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_485"
                    aria-hidden="false"
                >
                    Do the disabled person do household and yard work?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_485"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_485"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_485"
                                validate={["required", "maxselection"]}
                                id="input_485_0"
                                name="q485_doThe[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_485_0" htmlFor="input_485_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_485"
                                validate={["required", "maxselection"]}
                                id="input_485_1"
                                name="q485_doThe[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_485_1" htmlFor="input_485_1">
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
                id="id_396"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_396"
                    htmlFor="input_396"
                    aria-hidden="false"
                >
                    a . List household chores, both indoors and outdoors, that the disabled
                    person is able to do . (For example, cleaning, laundry, household
                    repairs, ironing, mowing, etc.)<span className="form-required">*</span>
                </label>
                <div
                    id="cid_396"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_396" name="q396_a" labelled="label_396" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={200}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_396-limit"
                                >
                                    0/200
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_397"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_397"
                    htmlFor="input_397"
                    aria-hidden="false"
                >
                    b. How much time do chores take, and how often does he/she do each of
                    these things?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_397"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_397" name="q397_bHow" labelled="label_397" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={200}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_397-limit"
                                >
                                    0/200
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_checkbox"
                id="id_389"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_389"
                    aria-hidden="false"
                >
                    c. Does he/she need help or encouragement doing these things?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_389"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_389"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_389"
                                validate={["required", "maxselection"]}
                                id="input_389_0"
                                name="q389_cDo389[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_389_0" htmlFor="input_389_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_389"
                                validate={["required", "maxselection"]}
                                id="input_389_1"
                                name="q389_cDo389[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_389_1" htmlFor="input_389_1">
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
                id="id_398"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_398"
                    htmlFor="input_398"
                    aria-hidden="false"
                >
                    If "YES," what help is needed?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_398"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_398" name="q398_ifyes398" labelled="label_398" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={100}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_398-limit"
                                >
                                    0/100
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <NavSection id="509" />
        </ul>
    )
}