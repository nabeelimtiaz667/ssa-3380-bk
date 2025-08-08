import Checkbox from "../components/Checkbox";
import InputAddressBox from "../components/InputAddressBox";
import InputEmail from "../components/InputEmail";
import InputTelDate from "../components/InputTelDate";
import InputTextBox from "../components/InputTextBox";
import InputTextLite from "../components/InputTextLite";
import NavSection from "../components/NavSection";
import TextArea from "../components/TextArea";
import TextContent from "../components/TextContent";

export default function FormPage8() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
            style={{ display: "none" }}
        >
            <TextContent id="469" img="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_173330_Form203P20(1)20(2).pdf.66deeb498c8334.59374587.png" />
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_467"
            >
                <label
                    className="form-label form-label-top"
                    id="label_467"
                    aria-hidden="false"
                >
                    25. Does the disabled person currently take any medicines for his/her
                    illnesses, injuries, or conditions?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_467"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_467"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_467"
                                validate={["required", "maxselection"]}
                                id="input_467_0"
                                name="q467_25Does[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_467_0" htmlFor="input_467_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_467"
                                validate={["required", "maxselection"]}
                                id="input_467_1"
                                name="q467_25Does[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_467_1" htmlFor="input_467_1">
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
                id="id_470"
            >
                <label
                    className="form-label form-label-top"
                    id="label_470"
                    aria-hidden="false"
                >
                    If " YES," do any of the medicines cause side effects?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_470"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-single-column"
                        role="group"
                        aria-labelledby="label_470"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_470"
                                validate={["required", "maxselection"]}
                                id="input_470_0"
                                name="q470_if[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Yes"
                            />
                            <label id="label_input_470_0" htmlFor="input_470_0">
                                Yes
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <Checkbox
                                aria-describedby="label_470"
                                validate={["required", "maxselection"]}
                                id="input_470_1"
                                name="q470_if[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="No"
                            />
                            <label id="label_input_470_1" htmlFor="input_470_1">
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
                id="id_471"
            >
                <div id="cid_471" className="form-input-wide" data-layout="full">
                    <div
                        id="text_471"
                        className="form-html"
                        data-component="text"
                        tabIndex={-1}
                    >
                        <p>
                            <span style={{ fontSize: "12pt" }}>
                                If "YES," please explain. (Do not list all of the medicines that
                                the disabled person takes. List only the medicines that cause side
                                effects for the disabled person.)
                            </span>
                        </p>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-field-hidden"
                style={{ display: "none" }}
                data-type="control_textarea"
                id="id_472"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_472"
                    htmlFor="input_472"
                    aria-hidden="false"
                >
                    1. NAME OF MEDICINE{" "}
                </label>
                <div id="cid_472" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_472" name="q472_1Name472" labelled="label_472" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={40}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_472-limit"
                                >
                                    0/40
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
                id="id_473"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_473"
                    htmlFor="input_473"
                    aria-hidden="false"
                >
                    1. SIDE EFFECTS PERSON HAS{" "}
                </label>
                <div id="cid_473" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_473" name="q473_1Side" labelled="label_473" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={42}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_473-limit"
                                >
                                    0/42
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
                id="id_474"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_474"
                    htmlFor="input_474"
                    aria-hidden="false"
                >
                    2. NAME OF MEDICINE{" "}
                </label>
                <div id="cid_474" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_474" name="q474_2Name" labelled="label_474" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={40}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="None"
                                    id="input_474-limit"
                                >
                                    0/40
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
                id="id_475"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_475"
                    htmlFor="input_475"
                    aria-hidden="false"
                >
                    2. SIDE EFFECTS PERSON HAS{" "}
                </label>
                <div id="cid_475" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_475" name="q475_2Side" labelled="label_475" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={42}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_475-limit"
                                >
                                    0/42
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
                id="id_476"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_476"
                    htmlFor="input_476"
                    aria-hidden="false"
                >
                    3. NAME OF MEDICINE{" "}
                </label>
                <div id="cid_476" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_476" name="q476_3Name" labelled="label_476" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={40}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_476-limit"
                                >
                                    0/40
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
                id="id_477"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_477"
                    htmlFor="input_477"
                    aria-hidden="false"
                >
                    3. SIDE EFFECTS PERSON HAS{" "}
                </label>
                <div id="cid_477" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_477" name="q477_3Side" labelled="label_477" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={42}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_477-limit"
                                >
                                    0/42
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
                id="id_478"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_478"
                    htmlFor="input_478"
                    aria-hidden="false"
                >
                    4. NAME OF MEDICINE{" "}
                </label>
                <div id="cid_478" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_478" name="q478_4Name" labelled="label_478" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={40}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_478-limit"
                                >
                                    0/40
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
                id="id_479"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_479"
                    htmlFor="input_479"
                    aria-hidden="false"
                >
                    4. SIDE EFFECTS PERSON HAS{" "}
                </label>
                <div id="cid_479" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_479" name="q479_4Side" labelled="label_479" height={20} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={42}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_479-limit"
                                >
                                    0/42
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <TextContent id="482" heading="SECTION E - REMARKS">
                <p style={{ textAlign: "left" }}>
                    <span style={{ fontSize: "12pt" }}>
                        Use this section for any added information you did not show in
                        earlier parts of this form. When you are done with this section
                        (or if you didn't have anything to add), be sure to complete the
                        fields at the bottom of this page.
                    </span>
                </p>
            </TextContent>
            <li className="form-line" data-type="control_textarea" id="id_313">
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_313"
                    htmlFor="input_313"
                    aria-hidden="false"
                >
                    Remarks{" "}
                </label>
                <div id="cid_313" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <TextArea id="input_313" name="q313_typeA" labelled="label_313" height={363} required={false} />
                            <div className="form-textarea-limit-indicator">
                                <span
                                    data-limit={1748}
                                    type="Letters"
                                    data-minimum={-1}
                                    data-typeminimum="Letters"
                                    id="input_313-limit"
                                >
                                    0/1748
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line fixed-width jf-required"
                data-type="control_textbox"
                id="id_317"
            >
                <label
                    className="form-label form-label-top"
                    id="label_317"
                    htmlFor="input_317"
                    aria-hidden="false"
                >
                    {" "}
                    Name of person completing this form:
                    <span className="form-required">*</span>{" "}
                </label>
                <div
                    id="cid_317"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <InputTextBox id="input_317" name="q317_name317" style={{ width: 900 }} size={900} placeholder="(First, Middle Initial, Last)" labelled="label_317" />
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-1 jf-required"
                data-type="control_datetime"
                id="id_483"
            >
                <label
                    className="form-label form-label-top"
                    id="label_483"
                    htmlFor="lite_mode_483"
                    aria-hidden="false"
                >
                    {" "}
                    Date:<span className="form-required">*</span>{" "}
                </label>
                <div
                    id="cid_483"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <div data-wrapper-react="true">
                        <div style={{ display: "none" }}>
                            <span
                                className="form-sub-label-container"
                                style={{ verticalAlign: "top" }}
                            >
                                <InputTelDate id="month_483" name="q483_date[month]" labelled="label_483 sublabel_483_month" />
                                <span className="date-separate" aria-hidden="true">
                                    {" "}
                                    /
                                </span>
                                <label
                                    className="form-sub-label"
                                    htmlFor="month_483"
                                    id="sublabel_483_month"
                                    style={{ minHeight: 13 }}
                                >
                                    Month
                                </label>
                            </span>
                            <span
                                className="form-sub-label-container"
                                style={{ verticalAlign: "top" }}
                            >
                                <InputTelDate id="day_483" name="q483_date[day]" labelled="label_483 sublabel_483_day" isCurrentDate />
                                <span className="date-separate" aria-hidden="true">
                                    {" "}
                                    /
                                </span>
                                <label
                                    className="form-sub-label"
                                    htmlFor="day_483"
                                    id="sublabel_483_day"
                                    style={{ minHeight: 13 }}
                                >
                                    Day
                                </label>
                            </span>
                            <span
                                className="form-sub-label-container"
                                style={{ verticalAlign: "top" }}
                            >
                                <InputTelDate id="year_483" name="q483_date[year]" labelled="label_483 sublabel_483_year" size={4} defaultValue={2025} />
                                <label
                                    className="form-sub-label"
                                    htmlFor="year_483"
                                    id="sublabel_483_year"
                                    style={{ minHeight: 13 }}
                                >
                                    Year
                                </label>
                            </span>
                        </div>
                        <span
                            className="form-sub-label-container"
                            style={{ verticalAlign: "top" }}
                        >
                            <InputTextLite id="483" />
                            <button
                                type="button"
                                className=" newDefaultTheme-dateIcon focusable icon-liteMode"
                                id="input_483_pick"
                                data-component="datetime"
                                aria-hidden="true"
                                data-allow-time="No"
                                data-version="v2"
                            />
                            <label
                                className="form-sub-label is-empty"
                                htmlFor="lite_mode_483"
                                id="sublabel_483_litemode"
                                style={{ minHeight: 13 }}
                            />
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-2"
                data-type="control_email"
                id="id_484"
            >
                <label
                    className="form-label form-label-top"
                    id="label_484"
                    htmlFor="input_484"
                    aria-hidden="false"
                >
                    Email address:
                </label>
                <div id="cid_484" className="form-input-wide" data-layout="half">
                    <InputEmail id="input_484" name="q484_emailAddress" autoComplete="section-input_484 email" labelled="label_484" />
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_address"
                id="id_319"
                data-compound-hint=",,,,,,Please Select,"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_319"
                    htmlFor="input_319_addr_line1"
                    aria-hidden="false"
                >
                    {" "}
                    MAILING ADDRESS (Street or PO Box) Include the apartment number, if
                    applicable.<span className="form-required">*</span>{" "}
                </label>
                <div
                    id="cid_319"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div summary="" className="form-address-table jsTest-addressField">
                        <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                            <span className="form-address-line form-address-street-line jsTest-address-lineField">
                                <span
                                    className="form-sub-label-container"
                                    style={{ verticalAlign: "top" }}
                                >
                                    <InputAddressBox addressType="addr_line1" className="line" data="address_line_1" autoComplete="address-line1" required />
                                    <label
                                        className="form-sub-label"
                                        htmlFor="input_319_addr_line1"
                                        id="sublabel_319_addr_line1"
                                        style={{ minHeight: 13 }}
                                    >
                                        Number and Street
                                    </label>
                                </span>
                            </span>
                        </div>
                        <div
                            className="form-address-line-wrapper jsTest-address-line-wrapperField"
                            style={{ display: "none" }}
                        >
                            <span className="form-address-line form-address-street-line jsTest-address-lineField">
                                <span
                                    className="form-sub-label-container"
                                    style={{ verticalAlign: "top" }}
                                >
                                    <InputAddressBox addressType="addr_line2" className="line" data="address_line_2" autoComplete="off" />
                                    <label
                                        className="form-sub-label"
                                        htmlFor="input_319_addr_line2"
                                        id="sublabel_319_addr_line2"
                                        style={{ minHeight: 13 }}
                                    >
                                        Street Address Line 2
                                    </label>
                                </span>
                            </span>
                        </div>
                        <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                            <span className="form-address-line form-address-city-line jsTest-address-lineField ">
                                <span
                                    className="form-sub-label-container"
                                    style={{ verticalAlign: "top" }}
                                >
                                    <InputAddressBox addressType="city" className="city" autoComplete="address-level2" data="city" required />
                                    <label
                                        className="form-sub-label"
                                        htmlFor="input_319_city"
                                        id="sublabel_319_city"
                                        style={{ minHeight: 13 }}
                                    >
                                        City
                                    </label>
                                </span>
                            </span>
                            <span className="form-address-line form-address-state-line jsTest-address-lineField ">
                                <span
                                    className="form-sub-label-container"
                                    style={{ verticalAlign: "top" }}
                                >
                                    <InputAddressBox addressType="state" className="state" autoComplete="address-level1" data="state" />
                                    <label
                                        className="form-sub-label"
                                        htmlFor="input_319_state"
                                        id="sublabel_319_state"
                                        style={{ minHeight: 13 }}
                                    >
                                        State / Province
                                    </label>
                                </span>
                            </span>
                        </div>
                        <div className="form-address-line-wrapper jsTest-address-line-wrapperField">
                            <span className="form-address-line form-address-zip-line jsTest-address-lineField ">
                                <span
                                    className="form-sub-label-container"
                                    style={{ verticalAlign: "top" }}
                                >
                                    <InputAddressBox addressType="postal" className="postal" autoComplete="postal-code" data="zip" required />
                                    <label
                                        className="form-sub-label"
                                        htmlFor="input_319_postal"
                                        id="sublabel_319_postal"
                                        style={{ minHeight: 13 }}
                                    >
                                        Postal / Zip Code
                                    </label>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </li>
            <li className="form-line" data-type="control_button" id="id_188">
                <div id="cid_188" className="form-input-wide" data-layout="full">
                    <div
                        data-align="auto"
                        className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField"
                    >
                        <button
                            id="input_preview_188"
                            type="button"
                            className="form-submit-preview jf-form-buttons"
                            data-component="button"
                        >
                            <img
                                alt=""
                                src="https://cdn.jotfor.ms/assets/img/theme-assets/5ca4930530899c64ff77cfa1/previewPDF-icon.svg"
                            />
                            <span id="span_preview_188" className="span_preview">
                                Preview PDF
                            </span>
                        </button>
                        <span> </span>
                        <button
                            id="input_188"
                            type="submit"
                            className="form-submit-button submit-button jf-form-buttons jsTest-submitField legacy-submit"
                            data-component="button"
                            data-content=""
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </li>
            <li style={{ display: "none" }}>
                Should be Empty: <input type="text" name="website" defaultValue="" />
            </li>
        </ul>
    )
}