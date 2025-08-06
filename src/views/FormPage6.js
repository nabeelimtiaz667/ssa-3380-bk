import Checkbox from "../components/Checkbox";
import NavSection from "../components/NavSection";
import TextArea from "../components/TextArea";
import TextContent from "../components/TextContent";

export default function FormPage6() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
            style={{ display: "none" }}
        >
            <TextContent id="440" img="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_173126_Form203P20(1)20(2).pdf.66deeacd84afa9.26556945.png" />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_436"
            >
                <label
                    className="form-label form-label-top"
                    id="label_436"
                    aria-hidden="false"
                >
                    d. Does this person have any problems getting along with family,
                    friends, neighbors, or others?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_436"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_436"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_436"
                                validate={["required", "maxselection"]}
                                id="input_436_0"
                                name="q436_dDo436[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_436_0" htmlFor="input_436_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_436"
                                validate={["required", "maxselection"]}
                                id="input_436_1"
                                name="q436_dDo436[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_436_1" htmlFor="input_436_1">
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
                id="id_438"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_438"
                    htmlFor="input_438"
                    aria-hidden="false"
                >
                    If "YES," explain.<span className="form-required">*</span>
                </label>
                <div
                    id="cid_438"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_438" name="q438_ifyes438" labelled="label_438" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={98}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_438-limit"
                                >
                                    0/98
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_439"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_439"
                    htmlFor="input_439"
                    aria-hidden="false"
                >
                    e. Describe any changes in social activities since the illnesses,
                    injuries, or conditions began.<span className="form-required">*</span>
                </label>
                <div
                    id="cid_439"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_439" name="q439_eDescribe" labelled="label_439" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={276}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_439-limit"
                                >
                                    0/276
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="495" heading="SECTION D - INFORMATION ABOUT ABILITIES" />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_442"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_442"
                    aria-hidden="false"
                >
                    23. a. Check any of the following items the disabled person's illnesses,
                    injuries, or conditions affect:<span className="form-required">*</span>{" "}
                </label>
                <div
                    id="cid_442"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-multiple-column"
                        data-columncount={3}
                        role="group"
                        aria-labelledby="label_442"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_0"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Lifting"
                            />
                            <label id="label_input_442_0" htmlFor="input_442_0">
                                Lifting
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_1"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Squatting"
                            />
                            <label id="label_input_442_1" htmlFor="input_442_1">
                                Squatting
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_2"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Bending"
                            />
                            <label id="label_input_442_2" htmlFor="input_442_2">
                                Bending
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_3"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Standing"
                            />
                            <label id="label_input_442_3" htmlFor="input_442_3">
                                Standing
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_4"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Reaching"
                            />
                            <label id="label_input_442_4" htmlFor="input_442_4">
                                Reaching
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_5"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Walking"
                            />
                            <label id="label_input_442_5" htmlFor="input_442_5">
                                Walking
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_6"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Sitting"
                            />
                            <label id="label_input_442_6" htmlFor="input_442_6">
                                Sitting
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_7"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Kneeling"
                            />
                            <label id="label_input_442_7" htmlFor="input_442_7">
                                Kneeling
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_8"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Talking"
                            />
                            <label id="label_input_442_8" htmlFor="input_442_8">
                                Talking
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_9"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Hearing"
                            />
                            <label id="label_input_442_9" htmlFor="input_442_9">
                                Hearing
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_10"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Stair Climbing"
                            />
                            <label id="label_input_442_10" htmlFor="input_442_10">
                                Stair Climbing
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_11"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Seeing"
                            />
                            <label id="label_input_442_11" htmlFor="input_442_11">
                                Seeing
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_12"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Memory"
                            />
                            <label id="label_input_442_12" htmlFor="input_442_12">
                                Memory
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_13"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Completing Tasks"
                            />
                            <label id="label_input_442_13" htmlFor="input_442_13">
                                Completing Tasks
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_14"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Concentration"
                            />
                            <label id="label_input_442_14" htmlFor="input_442_14">
                                Concentration
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_15"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Understanding"
                            />
                            <label id="label_input_442_15" htmlFor="input_442_15">
                                Understanding
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_16"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Following Instructions"
                            />
                            <label id="label_input_442_16" htmlFor="input_442_16">
                                Following Instructions
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_17"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Using Hands"
                            />
                            <label id="label_input_442_17" htmlFor="input_442_17">
                                Using Hands
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_442"
                                validate={["required"]}
                                id="input_442_18"
                                name="q442_23A[]"
                                required=""
                                defaultValue="Getting Along With Others"
                            />
                            <label id="label_input_442_18" htmlFor="input_442_18">
                                Getting Along With Others
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_444"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_444"
                    htmlFor="input_444"
                    aria-hidden="false"
                >
                    Please explain how his/her illnesses, injuries, or conditions affect
                    each of the items you checked. (For example, he/she can only lift [how
                    many pounds], or he/she can only walk [how far])
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_444"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_444" name="q444_pleaseExplain" labelled="label_444" />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={368}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_444-limit"
                                >
                                    0/368
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_445"
            >
                <label
                    className="form-label form-label-left"
                    id="label_445"
                    aria-hidden="false"
                >
                    b. Is the disabled person:<span className="form-required">*</span>
                </label>
                <div id="cid_445" className="form-input jf-required" data-layout="full">
                    <div
                        className="form-multiple-column"
                        data-columncount={2}
                        role="group"
                        aria-labelledby="label_445"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_445"
                                validate={["required"]}
                                id="input_445_0"
                                name="q445_bIs[]"
                                required=""
                                defaultValue="Right Handed?"
                            />
                            <label id="label_input_445_0" htmlFor="input_445_0">
                                Right Handed?
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_445"
                                validate={["required"]}
                                id="input_445_1"
                                name="q445_bIs[]"
                                required=""
                                defaultValue="Left Handed?"
                            />
                            <label id="label_input_445_1" htmlFor="input_445_1">
                                Left Handed?
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_447"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_447"
                    htmlFor="input_447"
                    aria-hidden="false"
                >
                    c. How far can he/she walk before needing to stop and rest?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_447"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_447" name="q447_cHow447" labelled="label_447" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={35}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_447-limit"
                                >
                                    0/35
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
                id="id_448"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_448"
                    htmlFor="input_448"
                    aria-hidden="false"
                >
                    If he/she has to rest, how long before he/she can resume walking?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_448"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_448" name="q448_ifYou448" labelled="label_448" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={90}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_448-limit"
                                >
                                    0/90
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_449"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_449"
                    htmlFor="input_449"
                    aria-hidden="false"
                >
                    d. For how long can the disabled person pay attention?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_449"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_449" name="q449_dFor" labelled="label_449" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={37}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_449-limit"
                                >
                                    0/37
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_450"
            >
                <label
                    className="form-label form-label-top"
                    id="label_450"
                    aria-hidden="false"
                >
                    e. Does the disabled person finish what he/she starts? (For example, a
                    conversation, chores, reading, watching a movie.)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_450"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_450"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_450"
                                validate={["required", "maxselection"]}
                                id="input_450_0"
                                name="q450_eDoes[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_450_0" htmlFor="input_450_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_450"
                                validate={["required", "maxselection"]}
                                id="input_450_1"
                                name="q450_eDoes[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_450_1" htmlFor="input_450_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_451"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_451"
                    htmlFor="input_451"
                    aria-hidden="false"
                >
                    f. How well does the disabled person follow written instructions? (For
                    example, a recipe.)<span className="form-required">*</span>
                </label>
                <div
                    id="cid_451"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_451" name="q451_fHow" labelled="label_451" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={276}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_451-limit"
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
                data-type="control_textarea"
                id="id_452"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_452"
                    htmlFor="input_452"
                    aria-hidden="false"
                >
                    g. How well does the disabled person follow spoken instructions?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_452"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_452" name="q452_gHow" labelled="label_452" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={276}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_452-limit"
                                >
                                    0/276
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <NavSection id="512" />
        </ul>
    )
}