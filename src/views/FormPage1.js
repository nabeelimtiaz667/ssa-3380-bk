import Checkbox from "../components/Checkbox";
import CheckboxGroup from "../components/CheckboxGroup";
import DatePicker from "../components/DatePickerForm1";
import FormInput from "../components/FormInput";
import FormLabel from "../components/FormLabel";
import FormLine from "../components/FormLine";
import InputTelBox from "../components/InputTelBox";
import InputTelDate from "../components/InputTelDate";
import InputTextBox from "../components/InputTextBox";
import InputTextLite from "../components/InputTextLite";
import InputTextOther from "../components/InputTextOther";
import NavSection from "../components/NavSection";
import TextArea from "../components/TextArea";
import TextContent from "../components/TextContent";

export default function FormPage1() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
        >
            <FormLine control="control_textbox" id="id_190">
                <FormLabel id="label_190" htmlFor="input_190" aria-hidden="false"
                >
                    1. NAME OF DISABLED PERSON<span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_190">
                    <InputTextBox id="input_190" name="q190_1Name" placeholder="First, Middle Initial, Last, Suffix" labelled="label_190" />
                </FormInput>
            </FormLine>
            <FormLine control="control_textbox" id="id_487">
                <FormLabel id="label_487" htmlFor="input_487" aria-hidden="false"
                >
                    2. YOUR NAME<span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_487">
                    <InputTextBox id="input_487" name="q487_2Your" placeholder="Person completing the form" labelled="label_487" />
                </FormInput>
            </FormLine>
            <FormLine control="control_textbox" id="id_488">
                <FormLabel id="label_488" htmlFor="input_488" aria-hidden="false"
                >
                    3. RELATIONSHIP (To disabled person)
                    <span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_488">
                    <InputTextBox id="input_488" name="q488_3Relationship" labelled="label_488" />
                </FormInput>
            </FormLine>
            <FormLine control="control_datetime" id="id_489">
                <FormLabel id="label_489" htmlFor="lite_mode_489">
                    4. DATE<span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_489">
                    <DatePicker />
                </FormInput>
            </FormLine>
            <TextContent id="193">
                <p>
                    3. <strong>YOUR DAYTIME TELEPHONE NUMBER</strong>
                    <em>
                        (If there is no telephone number where you can be reached, please
                        give us a daytime number where we can leave a message for you.){" "}
                    </em>
                </p>
            </TextContent>
            <FormLine control="control_phone" id="id_327">
                <FormLabel id="label_327" htmlFor="input_327_area" aria-hidden="false">
                    Primary:<span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_327">
                    <div className="flex flex-row" data-wrapper-react="true">
                        <span
                            className="form-sub-label-container"
                            style={{ verticalAlign: "top" }}
                            data-input-type="areaCode"
                        >
                            <InputTelBox id="input_327_area" name="q327_primary327[area]" autoComplete="section-input_327 tel-area-code" placeholder={212} dataComponent="areaCode" labelled="label_327 sublabel_327_area" />
                            <span className="phone-separate" aria-hidden="true">
                                -
                            </span>
                            <label
                                className="form-sub-label"
                                htmlFor="input_327_area"
                                id="sublabel_327_area"
                                style={{ minHeight: 13 }}
                            >
                                Area Code
                            </label>
                        </span>
                        <span
                            className="form-sub-label-container"
                            style={{ verticalAlign: "top" }}
                            data-input-type="phone"
                        >
                            <InputTelBox id="input_327_phone" name="q327_primary327[phone]" autoComplete="section-input_327 tel-local" placeholder="555-5555" dataComponent="phone" labelled="label_327 sublabel_327_phone" />
                            <label
                                className="form-sub-label"
                                htmlFor="input_327_phone"
                                id="sublabel_327_phone"
                                style={{ minHeight: 13 }}
                            >
                                Phone Number
                            </label>
                        </span>
                    </div>
                </FormInput>
            </FormLine>
            <FormLine control="control_checkbox" id="id_354">
                <FormLabel id="label_354" aria-hidden="true">
                    <span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_354">
                    <CheckboxGroup>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_354"
                                validate={["required", "maxselection"]}
                                id="input_354_0"
                                name="q354_typeA354[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Your Number"
                            />
                            <label id="label_input_354_0" htmlFor="input_354_0">
                                Your Number
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_354"
                                validate={["required", "maxselection"]}
                                id="input_354_1"
                                name="q354_typeA354[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Message Number"
                            />
                            <label id="label_input_354_1" htmlFor="input_354_1">
                                Message Number
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_354"
                                validate={["required", "maxselection"]}
                                id="input_354_2"
                                name="q354_typeA354[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="None"
                            />
                            <label id="label_input_354_2" htmlFor="input_354_2">
                                None
                            </label>
                        </span>
                    </CheckboxGroup>
                </FormInput>
            </FormLine>
            <TextContent id="490">
                <p>
                    <span style={{ fontSize: "12pt" }}>
                        <em>
                            <strong>
                                If you do not know the answer or the answer is “none” or “does
                                not apply, ” please write “don't know” or “none” or “does not
                                apply.”
                            </strong>
                        </em>
                    </span>
                </p>
            </TextContent>
            <FormLine control="control_textarea" id="id_491">
                <FormLabel id="label_491" htmlFor="input_491" aria-hidden="false"
                >
                    6. a. How long have you known the disabled person?
                    <span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_491">
                    <div className="form-textarea-limit">
                        <span>

                            <TextArea id="input_491" name="q491_6A" labelled="label_491" height={20} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={45}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_491-limit"
                                >
                                    0/45
                                </span>
                            </div>
                        </span>
                    </div>
                </FormInput>
            </FormLine>
            <li className="form-line" data-type="control_textarea" id="id_492">
                <FormLabel id="label_492" htmlFor="input_492" aria-hidden="false"
                >
                    b. How much time do you spend with the disabled person and what do you
                    do together?{" "}
                </FormLabel>
                <div id="cid_492" className="form-input-wide" >
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_492" name="q492_bHow492" labelled="label_492" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={100}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_492-limit"
                                >
                                    0/100
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <FormLine control="control_checkbox" id="id_355">
                <FormLabel id="label_355" aria-hidden="false">
                    7. a. Where does the disabled person live? (Check one.)
                    <span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_355">
                    <CheckboxGroup>
                        <Checkbox
                            aria-describedby="label_355"
                            validate={["required", "maxselection"]}
                            id="input_355_0"
                            name="q355_4aWheredoyouliveCheckone[]"
                            required=""
                            data-maxselection={1}
                            defaultValue="House"
                        />
                        <label id="label_input_355_0" htmlFor="input_355_0">
                            House
                        </label>
                        <Checkbox
                            aria-describedby="label_355"
                            validate={["required", "maxselection"]}
                            id="input_355_1"
                            name="q355_4aWheredoyouliveCheckone[]"
                            required=""
                            data-maxselection={1}
                            defaultValue="Apartment"
                        />
                        <label id="label_input_355_1" htmlFor="input_355_1">
                            Apartment
                        </label>
                        <Checkbox
                            aria-describedby="label_355"
                            validate={["required", "maxselection"]}
                            id="input_355_2"
                            name="q355_4aWheredoyouliveCheckone[]"
                            required=""
                            data-maxselection={1}
                            defaultValue="Boarding House"
                        />
                        <label id="label_input_355_2" htmlFor="input_355_2">
                            Boarding House
                        </label>
                        <Checkbox
                            aria-describedby="label_355"
                            validate={["required", "maxselection"]}
                            id="input_355_3"
                            name="q355_4aWheredoyouliveCheckone[]"
                            required=""
                            data-maxselection={1}
                            defaultValue="Nursing Home"
                        />
                        <label id="label_input_355_3" htmlFor="input_355_3">
                            Nursing Home
                        </label>
                        <Checkbox
                            aria-describedby="label_355"
                            validate={["required", "maxselection"]}
                            id="input_355_4"
                            name="q355_4aWheredoyouliveCheckone[]"
                            required=""
                            data-maxselection={1}
                            defaultValue="Shelter"
                        />
                        <label id="label_input_355_4" htmlFor="input_355_4">
                            Shelter
                        </label>
                        <Checkbox
                            aria-describedby="label_355"
                            validate={["required", "maxselection"]}
                            id="input_355_5"
                            name="q355_4aWheredoyouliveCheckone[]"
                            required=""
                            data-maxselection={1}
                            defaultValue="Group Home"
                        />
                        <label id="label_input_355_5" htmlFor="input_355_5">
                            Group Home
                        </label>
                        <Checkbox
                            validate={["required", "maxselection"]}
                            data-maxselection={1}
                            name="q355_4aWheredoyouliveCheckone[other]"
                            id="other_355"
                            tabIndex={0}
                            aria-label="Other (What?)"
                            defaultValue="other"
                            isOther
                        />
                        <label
                            id="label_other_355"
                            style={{ textIndent: 0 }}
                            htmlFor="other_355"
                        >
                            Other (What?)
                        </label>
                        <span
                            id="other_355_input"
                            className="other-input-container is-none"
                        >
                            <InputTextOther id="input_355" name="q355_4aWheredoyouliveCheckone[other]" hint="Other (Explain)" placeholder="Please type another option here" />
                        </span>
                    </CheckboxGroup>
                </FormInput>
            </FormLine>
            <FormLine control="control_checkbox" id="id_356">
                <FormLabel id="label_356" aria-hidden="false">
                    b. With whom does he/she live? (Check one.)
                    <span className="form-required">*</span>
                </FormLabel>
                <FormInput id="cid_356">
                    <CheckboxGroup>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_356"
                                validate={["required", "maxselection"]}
                                data-maxselection={1}
                                id="input_356_0"
                                name="q356_bWith[]"
                                required=""
                                defaultValue="Alone"
                            />
                            <label id="label_input_356_0" htmlFor="input_356_0">
                                Alone
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_356"
                                validate={["required", "maxselection"]}
                                data-maxselection={1}
                                id="input_356_1"
                                name="q356_bWith[]"
                                required=""
                                defaultValue="With Family"
                            />
                            <label id="label_input_356_1" htmlFor="input_356_1">
                                With Family
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_356"
                                validate={["required", "maxselection"]}
                                data-maxselection={1}
                                id="input_356_2"
                                name="q356_bWith[]"
                                required=""
                                defaultValue="With Friends"
                            />
                            <label id="label_input_356_2" htmlFor="input_356_2">
                                With Friends
                            </label>
                        </span>
                        <span className="form-checkbox-item formCheckboxOther">
                            <Checkbox
                                validate={["required", "maxselection"]}
                                data-maxselection={1}
                                isOther
                                name="q356_bWith[other]"
                                id="other_356"
                                tabIndex={0}
                                aria-label="Other (Describe relationship.)"
                                defaultValue="other"
                            />
                            <label
                                id="label_other_356"
                                style={{ textIndent: 0 }}
                                htmlFor="other_356"
                            >
                                Other (Describe relationship.)
                            </label>
                            <span
                                id="other_356_input"
                                className="other-input-container"
                                style={{ display: "none" }}
                            >
                                <InputTextOther id="input_356" name="q356_bWith[other]" hint="Other (Explain)" placeholder="Please type another option here" />
                            </span>
                        </span>
                    </CheckboxGroup>
                </FormInput>
            </FormLine>
            <TextContent id="357" heading="SECTION B - INFORMATION ABOUT ILLNESSES, INJURIES, OR CONDITIONS" />
            <FormLine control="control_textarea" id="id_358">
                <FormLabel id="label_358" htmlFor="input_358" aria-hidden="false"
                >
                    8. How does this person's illnesses, injuries, or conditions limit
                    his/her ability to work?<span className="form-required">*</span>{" "}
                </FormLabel>
                <FormInput id="cid_358">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_358" name="q358_8How" labelled="label_358" />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={400}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_358-limit"
                                >
                                    0/400
                                </span>
                            </div>
                        </span>
                    </div>
                </FormInput>
            </FormLine>
            <NavSection id="507" />
        </ul>
    )
}