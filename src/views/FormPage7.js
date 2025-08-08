import Checkbox from "../components/Checkbox";
import InputTextOther from "../components/InputTextOther";
import NavSection from "../components/NavSection";
import TextArea from "../components/TextArea";
import TextContent from "../components/TextContent";

export default function FormPage7() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
            style={{ display: "none" }}
        >
            <TextContent id="459" img="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_173244_Form203P20(1)20(2).pdf.66deeb208c84c2.45409133.png" />
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_453"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_453"
                    htmlFor="input_453"
                    aria-hidden="false"
                >
                    h. How well does the disabled person get along with authority figures?
                    (For example, police, bosses, landlords or teachers.)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_453"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_453" name="q453_hHow" labelled="label_453" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={95}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_453-limit"
                                >
                                    0/95
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_455"
            >
                <label
                    className="form-label form-label-top"
                    id="label_455"
                    aria-hidden="false"
                >
                    i. Has he/she ever been fired or laid off from a job because of problems
                    getting along with other people?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_455"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_455"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_455"
                                validate={["required", "maxselection"]}
                                id="input_455_0"
                                name="q455_iHas[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_455_0" htmlFor="input_455_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_455"
                                validate={["required", "maxselection"]}
                                id="input_455_1"
                                name="q455_iHas[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_455_1" htmlFor="input_455_1">
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
                id="id_454"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_454"
                    htmlFor="input_454"
                    aria-hidden="false"
                >
                    If "YES," please explain.<span className="form-required">*</span>
                </label>
                <div
                    id="cid_454"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_454" name="q454_ifyes454" labelled="label_454" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={92}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_454-limit"
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
                id="id_456"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_456"
                    htmlFor="input_456"
                    aria-hidden="false"
                >
                    If "YES," please give name of employer.
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_456"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_456" name="q456_ifyes456" labelled="label_456" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={53}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_456-limit"
                                >
                                    0/53
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_457"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_457"
                    htmlFor="input_457"
                    aria-hidden="false"
                >
                    j. How well does the disabled person handle stress?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_457"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_457" name="q457_jHow" labelled="label_457" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={188}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_457-limit"
                                >
                                    0/188
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_460"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_460"
                    htmlFor="input_460"
                    aria-hidden="false"
                >
                    k. How well does he/she handle changes in routine?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_460"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_460" name="q460_kHow" labelled="label_460" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={188}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_460-limit"
                                >
                                    0/188
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_461"
            >
                <label
                    className="form-label form-label-top"
                    id="label_461"
                    aria-hidden="false"
                >
                    l. Have you noticed any unusual behavior or fears in the disabled
                    person?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_461"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_461"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_461"
                                validate={["required", "maxselection"]}
                                id="input_461_0"
                                name="q461_lHave[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_461_0" htmlFor="input_461_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_461"
                                validate={["required", "maxselection"]}
                                id="input_461_1"
                                name="q461_lHave[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_461_1" htmlFor="input_461_1">
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
                id="id_462"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_462"
                    htmlFor="input_462"
                    aria-hidden="false"
                >
                    If "YES," please explain.<span className="form-required">*</span>
                </label>
                <div
                    id="cid_462"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_462" name="q462_ifyes462" labelled="label_462" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={270}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_462-limit"
                                >
                                    0/270
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_463"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_463"
                    aria-hidden="false"
                >
                    24. Does the disabled person use any of the following? (Check all that
                    apply.)<span className="form-required">*</span>
                </label>
                <div
                    id="cid_463"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-multiple-column"
                        data-columncount={3}
                        role="group"
                        aria-labelledby="label_463"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_0"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Crutches"
                            />
                            <label id="label_input_463_0" htmlFor="input_463_0">
                                Crutches
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_1"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Cane"
                            />
                            <label id="label_input_463_1" htmlFor="input_463_1">
                                Cane
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_2"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Hearing Aid"
                            />
                            <label id="label_input_463_2" htmlFor="input_463_2">
                                Hearing Aid
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_3"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Walker"
                            />
                            <label id="label_input_463_3" htmlFor="input_463_3">
                                Walker
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_4"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Brace/Splint"
                            />
                            <label id="label_input_463_4" htmlFor="input_463_4">
                                Brace/Splint
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_5"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Glasses/Contact Lenses"
                            />
                            <label id="label_input_463_5" htmlFor="input_463_5">
                                Glasses/Contact Lenses
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_6"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Wheelchair"
                            />
                            <label id="label_input_463_6" htmlFor="input_463_6">
                                Wheelchair
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_7"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Artificial Limb"
                            />
                            <label id="label_input_463_7" htmlFor="input_463_7">
                                Artificial Limb
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_8"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="Artificial Voice Box"
                            />
                            <label id="label_input_463_8" htmlFor="input_463_8">
                                Artificial Voice Box
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_463"
                                validate={["required"]}
                                id="input_463_9"
                                name="q463_24Does[]"
                                required=""
                                defaultValue="None"
                            />
                            <label id="label_input_463_9" htmlFor="input_463_9">
                                None
                            </label>
                        </span>
                        <span className="form-checkbox-item formCheckboxOther">
                            <Checkbox
                                validate={["required"]}
                                isOther
                                name="q463_24Does[other]"
                                id="other_463"
                                tabIndex={0}
                                aria-label="Other (Explain)"
                                defaultValue="other"
                            />
                            <label
                                id="label_other_463"
                                style={{ textIndent: 0 }}
                                htmlFor="other_463"
                            >
                                Other (Explain)
                            </label>
                            <span
                                id="other_463_input"
                                className="other-input-container"
                                style={{ display: "none" }}
                            >
                                <InputTextOther id="input_463" name="q463_24Does[other]" hint="Other (Explain)" placeholder="Please type another option here" />
                            </span>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_464"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_464"
                    htmlFor="input_464"
                    aria-hidden="false"
                >
                    Which of these were prescribed by a doctor? If you do not know or do not
                    recall, please write that.{" "}
                </label>
                <div id="cid_464" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_464" name="q464_whichOf" labelled="label_464" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={184}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_464-limit"
                                >
                                    0/184
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
                id="id_465"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_465"
                    htmlFor="input_465"
                    aria-hidden="false"
                >
                    When was it prescribed? If you do not know or do not recall, please
                    write that.{" "}
                </label>
                <div id="cid_465" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_465" name="q465_whenWas" labelled="label_465" height={60} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={276}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_465-limit"
                                >
                                    0/276
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
                id="id_466"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_466"
                    htmlFor="input_466"
                    aria-hidden="false"
                >
                    When does this person need to use these aids?{" "}
                </label>
                <div id="cid_466" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_466" name="q466_whenDoes" labelled="label_466" required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={368}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_466-limit"
                                >
                                    0/368
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <NavSection id="513" />
        </ul>
    )
}