import Checkbox from "../components/Checkbox";
import InputTextBox from "../components/InputTextBox";
import NavSection from "../components/NavSection";
import TextArea from "../components/TextArea";
import TextContent from "../components/TextContent";

export default function FormPage4() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
            style={{ display: "none" }}
        >
            <TextContent id="401" img="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172734_Form203P20(1)20(2).pdf.66dee9e831c3d6.52611950.png" />
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_399"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_399"
                    htmlFor="input_399"
                    aria-hidden="false"
                >
                    d. If the disabled person doesn't do house or yard work, explain why
                    not.<span className="form-required">*</span>{" "}
                </label>
                <div
                    id="cid_399"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_399" name="q399_dIf" labelled="label_399" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={200}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_399-limit"
                                >
                                    0/200
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="402" heading="18. GETTING AROUND" headingStyle={{}} />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_404"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_404"
                    aria-hidden="false"
                >
                    Does this person go outside?<span className="form-required">*</span>
                </label>
                <div
                    id="cid_404"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_404"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_404"
                                validate={["required", "maxselection"]}
                                id="input_404_0"
                                name="q404_doesThis[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_404_0" htmlFor="input_404_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_404"
                                validate={["required", "maxselection"]}
                                id="input_404_1"
                                name="q404_doesThis[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_404_1" htmlFor="input_404_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textbox"
                id="id_403"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_403"
                    htmlFor="input_403"
                    aria-hidden="false"
                >
                    a. How often does this person go outside?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_403"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <InputTextBox id="input_403" name="q403_aHow" labelled="label_403" maxLength={60} />
                    {/* <input
                        type="text"
                        id="input_403"
                        name="q403_aHow"
                        data-type="input-textbox"
                        className="form-textbox validate[required]"
                        data-defaultvalue=""
                        style={{ width: 310 }}
                        size={310}
                        maxLength={60}
                        data-component="textbox"
                        aria-labelledby="label_403"
                        required=""
                        defaultValue=""
                    /> */}
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_405"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_405"
                    htmlFor="input_405"
                    aria-hidden="false"
                >
                    If he/she doesn't go out at all, explain why not.
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_405"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_405" name="q405_ifHeshe" labelled="label_405" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={198}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_405-limit"
                                >
                                    0/198
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
                id="id_406"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_406"
                    aria-hidden="false"
                >
                    b. When going out, how does he/she travel? (Check all that apply.)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_406"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-multiple-column"
                        data-columncount={2}
                        role="group"
                        aria-labelledby="label_406"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_406"
                                validate={["required"]}
                                id="input_406_0"
                                name="q406_bWhen[]"
                                required=""
                                defaultValue="Walk"
                            />
                            <label id="label_input_406_0" htmlFor="input_406_0">
                                Walk
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_406"
                                validate={["required"]}
                                id="input_406_1"
                                name="q406_bWhen[]"
                                required=""
                                defaultValue="Drive a car"
                            />
                            <label id="label_input_406_1" htmlFor="input_406_1">
                                Drive a car
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_406"
                                validate={["required"]}
                                id="input_406_2"
                                name="q406_bWhen[]"
                                required=""
                                defaultValue="Ride in a car"
                            />
                            <label id="label_input_406_2" htmlFor="input_406_2">
                                Ride in a car
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_406"
                                validate={["required"]}
                                id="input_406_3"
                                name="q406_bWhen[]"
                                required=""
                                defaultValue="Ride a bicycle"
                            />
                            <label id="label_input_406_3" htmlFor="input_406_3">
                                Ride a bicycle
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_406"
                                validate={["required"]}
                                id="input_406_4"
                                name="q406_bWhen[]"
                                required=""
                                defaultValue="Use public transportation"
                            />
                            <label id="label_input_406_4" htmlFor="input_406_4">
                                Use public transportation
                            </label>
                        </span>
                        <span className="form-checkbox-item formCheckboxOther">
                            <Checkbox
                                validate={["required"]}
                                isOther
                                name="q406_bWhen[other]"
                                id="other_406"
                                tabIndex={0}
                                aria-label="Other (Explain)"
                                defaultValue="other"
                            />
                            <label
                                id="label_other_406"
                                style={{ textIndent: 0 }}
                                htmlFor="other_406"
                            >
                                Other (Explain)
                            </label>
                            <span
                                id="other_406_input"
                                className="other-input-container"
                                style={{ display: "none" }}
                            >
                                <input
                                    type="text"
                                    className="form-checkbox-other-input form-textbox"
                                    name="q406_bWhen[other]"
                                    data-otherhint="Other (Explain)"
                                    size={15}
                                    id="input_406"
                                    data-placeholder="Please type another option here"
                                    placeholder="Please type another option here"
                                />
                            </span>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_checkbox"
                id="id_407"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_407"
                    aria-hidden="false"
                >
                    c. When going out, can he/she go out alone?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_407"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_407"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_407"
                                validate={["required", "maxselection"]}
                                id="input_407_0"
                                name="q407_cWhen[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_407_0" htmlFor="input_407_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_407"
                                validate={["required", "maxselection"]}
                                id="input_407_1"
                                name="q407_cWhen[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_407_1" htmlFor="input_407_1">
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
                id="id_409"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_409"
                    htmlFor="input_409"
                    aria-hidden="false"
                >
                    If "NO," explain why he/she can't go out alone.
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_409"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_409" name="q409_ifno" labelled="label_409" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={99}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_409-limit"
                                >
                                    0/99
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
                id="id_408"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_408"
                    aria-hidden="false"
                >
                    d. Does the disabled person drive?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_408"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_408"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_408"
                                validate={["required", "maxselection"]}
                                id="input_408_0"
                                name="q408_dDoes[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_408_0" htmlFor="input_408_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_408"
                                validate={["required", "maxselection"]}
                                id="input_408_1"
                                name="q408_dDoes[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_408_1" htmlFor="input_408_1">
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
                id="id_410"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_410"
                    htmlFor="input_410"
                    aria-hidden="false"
                >
                    If he/she doesn't drive, explain why not.
                    <span className="form-required">*</span>{" "}
                </label>
                <div
                    id="cid_410"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_410" name="q410_ifYou410" labelled="label_410" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={200}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_410-limit"
                                >
                                    0/200
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="411" heading="19. SHOPPING" headingStyle={{}} />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_486"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_486"
                    aria-hidden="false"
                >
                    Does the disabled person do shopping?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_486"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_486"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_486"
                                validate={["required", "maxselection"]}
                                id="input_486_0"
                                name="q486_doesThe[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_486_0" htmlFor="input_486_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_486"
                                validate={["required", "maxselection"]}
                                id="input_486_1"
                                name="q486_doesThe[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_486_1" htmlFor="input_486_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_checkbox"
                id="id_412"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_412"
                    aria-hidden="false"
                >
                    a. If the disabled person does any shopping, does he/she shop: (Check
                    all that apply.)<span className="form-required">*</span>
                </label>
                <div
                    id="cid_412"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-multiple-column"
                        data-columncount={4}
                        role="group"
                        aria-labelledby="label_412"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_412"
                                validate={["required"]}
                                id="input_412_0"
                                name="q412_aIf[]"
                                required=""
                                defaultValue="In stores"
                            />
                            <label id="label_input_412_0" htmlFor="input_412_0">
                                In stores
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_412"
                                validate={["required"]}
                                id="input_412_1"
                                name="q412_aIf[]"
                                required=""
                                defaultValue="By phone"
                            />
                            <label id="label_input_412_1" htmlFor="input_412_1">
                                By phone
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_412"
                                validate={["required"]}
                                id="input_412_2"
                                name="q412_aIf[]"
                                required=""
                                defaultValue="By mail"
                            />
                            <label id="label_input_412_2" htmlFor="input_412_2">
                                By mail
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_412"
                                validate={["required"]}
                                id="input_412_3"
                                name="q412_aIf[]"
                                required=""
                                defaultValue="By computer"
                            />
                            <label id="label_input_412_3" htmlFor="input_412_3">
                                By computer
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_413"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_413"
                    htmlFor="input_413"
                    aria-hidden="false"
                >
                    b. Describe what he/she shops for.
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_413"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_413" name="q413_bDescribe" labelled="label_413" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={200}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_413-limit"
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
                id="id_414"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_414"
                    htmlFor="input_414"
                    aria-hidden="false"
                >
                    c. How often does he/she shop and how long does it take?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_414"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_414" name="q414_cHow" labelled="label_414" height={80} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={300}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_414-limit"
                                >
                                    0/300
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="415" heading="20. MONEY" headingStyle={{}}>
                <p>
                    <span style={{ fontSize: "12pt" }}>
                        <strong>a. Is he/she able to: </strong>
                    </span>
                </p>
            </TextContent>
            <li
                className="form-line form-line-column form-col-1 jf-required"
                data-type="control_checkbox"
                id="id_416"
            >
                <label
                    className="form-label form-label-top"
                    id="label_416"
                    aria-hidden="false"
                >
                    Pay bills:<span className="form-required">*</span>
                </label>
                <div
                    id="cid_416"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_416"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_416"
                                validate={["required", "maxselection"]}
                                id="input_416_0"
                                name="q416_payBills[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_416_0" htmlFor="input_416_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_416"
                                validate={["required", "maxselection"]}
                                id="input_416_1"
                                name="q416_payBills[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_416_1" htmlFor="input_416_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-2 jf-required"
                data-type="control_checkbox"
                id="id_417"
            >
                <label
                    className="form-label form-label-top"
                    id="label_417"
                    aria-hidden="false"
                >
                    Handle a savings account:<span className="form-required">*</span>
                </label>
                <div
                    id="cid_417"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_417"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_417"
                                validate={["required", "maxselection"]}
                                id="input_417_0"
                                name="q417_handleA[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_417_0" htmlFor="input_417_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_417"
                                validate={["required", "maxselection"]}
                                id="input_417_1"
                                name="q417_handleA[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_417_1" htmlFor="input_417_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-3 jf-required"
                data-type="control_checkbox"
                id="id_418"
            >
                <label
                    className="form-label form-label-top"
                    id="label_418"
                    aria-hidden="false"
                >
                    Count change:<span className="form-required">*</span>
                </label>
                <div
                    id="cid_418"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_418"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_418"
                                validate={["required", "maxselection"]}
                                id="input_418_0"
                                name="q418_countChange[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_418_0" htmlFor="input_418_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_418"
                                validate={["required", "maxselection"]}
                                id="input_418_1"
                                name="q418_countChange[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_418_1" htmlFor="input_418_1">
                                No
                            </label>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-4 jf-required"
                data-type="control_checkbox"
                id="id_419"
            >
                <label
                    className="form-label form-label-top"
                    id="label_419"
                    aria-hidden="false"
                >
                    Use a checkbook/money orders:<span className="form-required">*</span>
                </label>
                <div
                    id="cid_419"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_419"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_419"
                                validate={["required", "maxselection"]}
                                id="input_419_0"
                                name="q419_useA[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_419_0" htmlFor="input_419_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_419"
                                validate={["required", "maxselection"]}
                                id="input_419_1"
                                name="q419_useA[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_419_1" htmlFor="input_419_1">
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
                id="id_421"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_421"
                    htmlFor="input_421"
                    aria-hidden="false"
                >
                    Explain all "NO" answers.<span className="form-required">*</span>
                </label>
                <div
                    id="cid_421"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_421" name="q421_explainAll" labelled="label_421" height={60} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={200}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_421-limit"
                                >
                                    0/200
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <NavSection id="510" />
        </ul>
    )
}