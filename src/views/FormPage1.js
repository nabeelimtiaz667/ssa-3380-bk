export default function FormPage1() {
    return (
        <ul
            className="form-section page-section"
            role="presentation"
            style={{ display: "none" }}
        >
            <li className="form-line" data-type="control_text" id="id_353">
                <div id="cid_353" className="form-input-wide" data-layout="full">
                    <div
                        id="text_353"
                        className="form-html"
                        data-component="text"
                        tabIndex={-1}
                    >
                        <p>
                            <img
                                src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-08_095733_11120SSA-338020ADL.pdf.66dd2f17d60011.98973832.png"
                                alt=""
                            />
                        </p>
                        <p>
                            <em>
                                Anyone who makes or causes to be made a false statement or
                                representation of material fact for use in determining a payment
                                under the Social Security Act, or knowingly conceals or fails to
                                disclose an event with an intent to affect an initial or continued
                                right to payment, commits a crime punishable under Federal law by
                                fine, imprisonment, or both, and may be subject to administrative
                                sanctions.
                            </em>
                        </p>
                        <p style={{ textAlign: "center" }}>
                            <span style={{ fontSize: "14pt" }}>
                                <strong>SECTION A - GENERAL INFORMATION</strong>
                            </span>
                        </p>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-1 jf-required"
                data-type="control_textbox"
                id="id_190"
            >
                <label
                    className="form-label form-label-top"
                    id="label_190"
                    htmlFor="input_190"
                    aria-hidden="false"
                >
                    1. NAME OF DISABLED PERSON<span className="form-required">*</span>
                </label>
                <div
                    id="cid_190"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <input
                        type="text"
                        id="input_190"
                        name="q190_1Name"
                        data-type="input-textbox"
                        className="form-textbox validate[required]"
                        data-defaultvalue=""
                        style={{ width: 310 }}
                        size={310}
                        placeholder="First, Middle Initial, Last, Suffix"
                        data-component="textbox"
                        aria-labelledby="label_190"
                        required=""
                        defaultValue=""
                    />
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-2 jf-required"
                data-type="control_textbox"
                id="id_487"
            >
                <label
                    className="form-label form-label-top"
                    id="label_487"
                    htmlFor="input_487"
                    aria-hidden="false"
                >
                    2. YOUR NAME<span className="form-required">*</span>
                </label>
                <div
                    id="cid_487"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <input
                        type="text"
                        id="input_487"
                        name="q487_2Your"
                        data-type="input-textbox"
                        className="form-textbox validate[required]"
                        data-defaultvalue=""
                        style={{ width: 310 }}
                        size={310}
                        placeholder="Person completing the form"
                        data-component="textbox"
                        aria-labelledby="label_487"
                        required=""
                        defaultValue=""
                    />
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-3 jf-required"
                data-type="control_textbox"
                id="id_488"
            >
                <label
                    className="form-label form-label-top"
                    id="label_488"
                    htmlFor="input_488"
                    aria-hidden="false"
                >
                    3. RELATIONSHIP (To disabled person)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_488"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <input
                        type="text"
                        id="input_488"
                        name="q488_3Relationship"
                        data-type="input-textbox"
                        className="form-textbox validate[required]"
                        data-defaultvalue=""
                        style={{ width: 310 }}
                        size={310}
                        data-component="textbox"
                        aria-labelledby="label_488"
                        required=""
                        defaultValue=""
                    />
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-4 jf-required"
                data-type="control_datetime"
                id="id_489"
            >
                <label
                    className="form-label form-label-top"
                    id="label_489"
                    htmlFor="lite_mode_489"
                    aria-hidden="false"
                >
                    4. DATE<span className="form-required">*</span>
                </label>
                <div
                    id="cid_489"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <div data-wrapper-react="true">
                        <div style={{ display: "none" }}>
                            <span
                                className="form-sub-label-container"
                                style={{ verticalAlign: "top" }}
                            >
                                <input
                                    className="form-textbox validate[required, limitDate]"
                                    id="month_489"
                                    name="q489_4Date[month]"
                                    type="tel"
                                    size={2}
                                    data-maxlength={2}
                                    data-age=""
                                    maxLength={2}
                                    required=""
                                    autoComplete="off"
                                    aria-labelledby="label_489 sublabel_489_month"
                                />
                                <span className="date-separate" aria-hidden="true">
                                    /
                                </span>
                                <label
                                    className="form-sub-label"
                                    htmlFor="month_489"
                                    id="sublabel_489_month"
                                    style={{ minHeight: 13 }}
                                >
                                    Month
                                </label>
                            </span>
                            <span
                                className="form-sub-label-container"
                                style={{ verticalAlign: "top" }}
                            >
                                <input
                                    className="currentDate form-textbox validate[required, limitDate]"
                                    id="day_489"
                                    name="q489_4Date[day]"
                                    type="tel"
                                    size={2}
                                    data-maxlength={2}
                                    data-age=""
                                    maxLength={2}
                                    required=""
                                    autoComplete="off"
                                    aria-labelledby="label_489 sublabel_489_day"
                                />
                                <span className="date-separate" aria-hidden="true">
                                    /
                                </span>
                                <label
                                    className="form-sub-label"
                                    htmlFor="day_489"
                                    id="sublabel_489_day"
                                    style={{ minHeight: 13 }}
                                >
                                    Day
                                </label>
                            </span>
                            <span
                                className="form-sub-label-container"
                                style={{ verticalAlign: "top" }}
                            >
                                <input
                                    className="form-textbox validate[required, limitDate]"
                                    id="year_489"
                                    name="q489_4Date[year]"
                                    type="tel"
                                    size={4}
                                    data-maxlength={4}
                                    data-age=""
                                    maxLength={4}
                                    required=""
                                    autoComplete="off"
                                    aria-labelledby="label_489 sublabel_489_year"
                                    defaultValue={2025}
                                />
                                <label
                                    className="form-sub-label"
                                    htmlFor="year_489"
                                    id="sublabel_489_year"
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
                            <input
                                className="form-textbox validate[required, limitDate, validateLiteDate]"
                                id="lite_mode_489"
                                type="text"
                                size={12}
                                data-maxlength={12}
                                maxLength={12}
                                data-age=""
                                required=""
                                data-format="mmddyyyy"
                                data-seperator="/"
                                placeholder="MM/DD/YYYY"
                                data-placeholder="MM/DD/YYYY"
                                autoComplete="off"
                                aria-labelledby="label_489"
                                defaultValue="08/05/2025"
                            />
                            <button
                                type="button"
                                className=" newDefaultTheme-dateIcon focusable icon-liteMode"
                                id="input_489_pick"
                                data-component="datetime"
                                aria-hidden="true"
                                data-allow-time="No"
                                data-version="v2"
                            />
                            <label
                                className="form-sub-label is-empty"
                                htmlFor="lite_mode_489"
                                id="sublabel_489_litemode"
                                style={{ minHeight: 13 }}
                            />
                        </span>
                    </div>
                </div>
            </li>
            <li className="form-line" data-type="control_text" id="id_193">
                <div id="cid_193" className="form-input-wide" data-layout="full">
                    <div
                        id="text_193"
                        className="form-html"
                        data-component="text"
                        tabIndex={-1}
                    >
                        <p>
                            3. <strong>YOUR DAYTIME TELEPHONE NUMBER</strong>
                            <em>
                                (If there is no telephone number where you can be reached, please
                                give us a daytime number where we can leave a message for you.){" "}
                            </em>
                        </p>
                    </div>
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-1 jf-required"
                data-type="control_phone"
                id="id_327"
                data-compound-hint="212,555-5555"
            >
                <label
                    className="form-label form-label-top"
                    id="label_327"
                    htmlFor="input_327_area"
                    aria-hidden="false"
                >
                    Primary:<span className="form-required">*</span>
                </label>
                <div
                    id="cid_327"
                    className="form-input-wide jf-required"
                    data-layout="half"
                >
                    <div data-wrapper-react="true">
                        <span
                            className="form-sub-label-container"
                            style={{ verticalAlign: "top" }}
                            data-input-type="areaCode"
                        >
                            <input
                                type="tel"
                                id="input_327_area"
                                name="q327_primary327[area]"
                                className="form-textbox validate[required]"
                                data-defaultvalue=""
                                autoComplete="section-input_327 tel-area-code"
                                placeholder={212}
                                data-component="areaCode"
                                aria-labelledby="label_327 sublabel_327_area"
                                required=""
                                defaultValue=""
                            />
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
                            <input
                                type="tel"
                                id="input_327_phone"
                                name="q327_primary327[phone]"
                                className="form-textbox validate[required]"
                                data-defaultvalue=""
                                autoComplete="section-input_327 tel-local"
                                placeholder="555-5555"
                                data-component="phone"
                                aria-labelledby="label_327 sublabel_327_phone"
                                required=""
                                defaultValue=""
                            />
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
                </div>
            </li>
            <li
                className="form-line form-line-column form-col-2 jf-required"
                data-type="control_checkbox"
                id="id_354"
            >
                <label
                    className="form-label form-label-top"
                    id="label_354"
                    aria-hidden="true"
                >
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_354"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-multiple-column"
                        data-columncount={2}
                        role="group"
                        aria-labelledby="label_354"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <input
                                aria-describedby="label_354"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
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
                            <input
                                aria-describedby="label_354"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
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
                            <input
                                aria-describedby="label_354"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
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
                    </div>
                </div>
            </li>
            <li className="form-line" data-type="control_text" id="id_490">
                <div id="cid_490" className="form-input-wide" data-layout="full">
                    <div
                        id="text_490"
                        className="form-html"
                        data-component="text"
                        tabIndex={-1}
                    >
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
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_491"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_491"
                    htmlFor="input_491"
                    aria-hidden="false"
                >
                    6. a. How long have you known the disabled person?
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_491"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <textarea
                                id="input_491"
                                className="form-textarea validate[required]"
                                name="q491_6A"
                                style={{ width: 648, height: 20 }}
                                data-component="textarea"
                                required=""
                                aria-labelledby="label_491"
                                defaultValue={""}
                            />
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
                </div>
            </li>
            <li className="form-line" data-type="control_textarea" id="id_492">
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_492"
                    htmlFor="input_492"
                    aria-hidden="false"
                >
                    b. How much time do you spend with the disabled person and what do you
                    do together?{" "}
                </label>
                <div id="cid_492" className="form-input-wide" data-layout="full">
                    <div className="form-textarea-limit">
                        <span>
                            <textarea
                                id="input_492"
                                className="form-textarea"
                                name="q492_bHow492"
                                style={{ width: 648, height: 20 }}
                                data-component="textarea"
                                aria-labelledby="label_492"
                                defaultValue={""}
                            />
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
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_355"
            >
                <label
                    className="form-label form-label-top"
                    id="label_355"
                    aria-hidden="false"
                >
                    7. a. Where does the disabled person live? (Check one.)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_355"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-multiple-column"
                        data-columncount={3}
                        role="group"
                        aria-labelledby="label_355"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <input
                                aria-describedby="label_355"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
                                id="input_355_0"
                                name="q355_4aWheredoyouliveCheckone[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="House"
                            />
                            <label id="label_input_355_0" htmlFor="input_355_0">
                                House
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <input
                                aria-describedby="label_355"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
                                id="input_355_1"
                                name="q355_4aWheredoyouliveCheckone[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Apartment"
                            />
                            <label id="label_input_355_1" htmlFor="input_355_1">
                                Apartment
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <input
                                aria-describedby="label_355"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
                                id="input_355_2"
                                name="q355_4aWheredoyouliveCheckone[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Boarding House"
                            />
                            <label id="label_input_355_2" htmlFor="input_355_2">
                                Boarding House
                            </label>
                        </span>
                        <span className="form-checkbox-item" style={{ clear: "left" }}>
                            <span className="dragger-item" />
                            <input
                                aria-describedby="label_355"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
                                id="input_355_3"
                                name="q355_4aWheredoyouliveCheckone[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Nursing Home"
                            />
                            <label id="label_input_355_3" htmlFor="input_355_3">
                                Nursing Home
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <input
                                aria-describedby="label_355"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
                                id="input_355_4"
                                name="q355_4aWheredoyouliveCheckone[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Shelter"
                            />
                            <label id="label_input_355_4" htmlFor="input_355_4">
                                Shelter
                            </label>
                        </span>
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <input
                                aria-describedby="label_355"
                                type="checkbox"
                                className="form-checkbox validate[required, maxselection]"
                                id="input_355_5"
                                name="q355_4aWheredoyouliveCheckone[]"
                                required=""
                                data-maxselection={1}
                                defaultValue="Group Home"
                            />
                            <label id="label_input_355_5" htmlFor="input_355_5">
                                Group Home
                            </label>
                        </span>
                        <span className="form-checkbox-item formCheckboxOther">
                            <input
                                type="checkbox"
                                className="form-checkbox-other form-checkbox validate[required, maxselection]"
                                data-maxselection={1}
                                name="q355_4aWheredoyouliveCheckone[other]"
                                id="other_355"
                                tabIndex={0}
                                aria-label="Other (What?)"
                                defaultValue="other"
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
                                className="other-input-container"
                                style={{ display: "none" }}
                            >
                                <input
                                    type="text"
                                    className="form-checkbox-other-input form-textbox"
                                    name="q355_4aWheredoyouliveCheckone[other]"
                                    data-otherhint="Other (What?)"
                                    size={15}
                                    id="input_355"
                                    data-placeholder="Please type another option here"
                                    placeholder="Please type another option here"
                                />
                            </span>
                        </span>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_checkbox"
                id="id_356"
            >
                <label
                    className="form-label form-label-top"
                    id="label_356"
                    aria-hidden="false"
                >
                    b. With whom does he/she live? (Check one.)
                    <span className="form-required">*</span>
                </label>
                <div
                    id="cid_356"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div
                        className="form-multiple-column"
                        data-columncount={3}
                        role="group"
                        aria-labelledby="label_356"
                        data-component="checkbox"
                    >
                        <span className="form-checkbox-item">
                            <span className="dragger-item" />
                            <input
                                aria-describedby="label_356"
                                type="checkbox"
                                className="form-checkbox validate[required]"
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
                            <input
                                aria-describedby="label_356"
                                type="checkbox"
                                className="form-checkbox validate[required]"
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
                            <input
                                aria-describedby="label_356"
                                type="checkbox"
                                className="form-checkbox validate[required]"
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
                            <input
                                type="checkbox"
                                className="form-checkbox-other form-checkbox validate[required]"
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
                                <input
                                    type="text"
                                    className="form-checkbox-other-input form-textbox"
                                    name="q356_bWith[other]"
                                    data-otherhint="Other (Describe relationship.)"
                                    size={15}
                                    id="input_356"
                                    data-placeholder="Please type another option here"
                                    placeholder="Please type another option here"
                                />
                            </span>
                        </span>
                    </div>
                </div>
            </li>
            <li className="form-line" data-type="control_text" id="id_357">
                <div id="cid_357" className="form-input-wide" data-layout="full">
                    <div
                        id="text_357"
                        className="form-html"
                        data-component="text"
                        tabIndex={-1}
                    >
                        <p style={{ textAlign: "center" }}>
                            <strong>
                                <span style={{ fontSize: "14pt" }}>
                                    SECTION B - INFORMATION ABOUT ILLNESSES, INJURIES, OR CONDITIONS{" "}
                                </span>
                            </strong>
                        </p>
                    </div>
                </div>
            </li>
            <li
                className="form-line jf-required"
                data-type="control_textarea"
                id="id_358"
            >
                <label
                    className="form-label form-label-top form-label-auto"
                    id="label_358"
                    htmlFor="input_358"
                    aria-hidden="false"
                >
                    8. How does this person's illnesses, injuries, or conditions limit
                    his/her ability to work?<span className="form-required">*</span>{" "}
                </label>
                <div
                    id="cid_358"
                    className="form-input-wide jf-required"
                    data-layout="full"
                >
                    <div className="form-textarea-limit">
                        <span>
                            <textarea
                                id="input_358"
                                className="form-textarea validate[required]"
                                name="q358_8How"
                                style={{ width: 648, height: 100 }}
                                data-component="textarea"
                                required=""
                                aria-labelledby="label_358"
                                defaultValue={""}
                            />
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
                </div>
            </li>
            <li id="cid_507" className="form-input-wide" data-type="control_pagebreak">
                <div className="form-pagebreak" data-component="pagebreak">
                    <div className="form-pagebreak-back-container">
                        <button
                            id="form-pagebreak-back_507"
                            type="button"
                            className="form-pagebreak-back  jf-form-buttons"
                            data-component="pagebreak-back"
                        >
                            Back
                        </button>
                    </div>
                    <div className="form-pagebreak-next-container">
                        <button
                            id="form-pagebreak-next_507"
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
                        id="pageInfo_507"
                    />
                </div>
            </li>
        </ul>
    )
}