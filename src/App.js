import FormPage1 from "./views/FormPage1";

function App() {
  return (
    <>
      <OpeningPage />
      <PrivacyAgreement />
      <FormPage1 />
      <ul
        className="form-section page-section"
        role="presentation"
        style={{ display: "none" }}
      >
        <li className="form-line" data-type="control_text" id="id_359">
          <div id="cid_359" className="form-input-wide" data-layout="full">
            <div
              id="text_359"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p style={{ textAlign: "center" }}>
                <img
                  src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172449_Form203P20(1)20(2).pdf.66dee9450b4218.85233077.png"
                  alt=""
                />
              </p>
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>
                    SECTION C - INFORMATION ABOUT DAILY ACTIVITIES{" "}
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </li>
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
                <textarea
                  id="input_360"
                  className="form-textarea validate[required]"
                  name="q360_9Describe"
                  style={{ width: 648, height: 100 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_360"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_361"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_361"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_363"
                  className="form-textarea validate[required]"
                  name="q363_ifyes"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_363"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_362"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_362"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_365"
                  className="form-textarea validate[required]"
                  name="q365_ifyes365"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_365"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_364"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_364"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_367"
                  className="form-textarea validate[required]"
                  name="q367_ifyes367"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_367"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_368"
                  className="form-textarea validate[required]"
                  name="q368_13What"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_368"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_366"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_366"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_370"
                  className="form-textarea validate[required]"
                  name="q370_ifyes370"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_370"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_369"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_369"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_373"
                  className="form-textarea"
                  name="q373_dress"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_373"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_374"
                  className="form-textarea"
                  name="q374_bathe"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_374"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_375"
                  className="form-textarea"
                  name="q375_careFor"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_375"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_376"
                  className="form-textarea"
                  name="q376_shave"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_376"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_377"
                  className="form-textarea"
                  name="q377_feedSelf"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_377"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_378"
                  className="form-textarea"
                  name="q378_useThe"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_378"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_379"
                  className="form-textarea"
                  name="q379_other"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_379"
                  defaultValue={""}
                />
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
        <li id="cid_508" className="form-input-wide" data-type="control_pagebreak">
          <div className="form-pagebreak" data-component="pagebreak">
            <div className="form-pagebreak-back-container">
              <button
                id="form-pagebreak-back_508"
                type="button"
                className="form-pagebreak-back  jf-form-buttons"
                data-component="pagebreak-back"
              >
                Back
              </button>
            </div>
            <div className="form-pagebreak-next-container">
              <button
                id="form-pagebreak-next_508"
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
              id="pageInfo_508"
            />
          </div>
        </li>
      </ul>
      <ul
        className="form-section page-section"
        role="presentation"
        style={{ display: "none" }}
      >
        <li className="form-line" data-type="control_text" id="id_383">
          <div id="cid_383" className="form-input-wide" data-layout="full">
            <div
              id="text_383"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <img
                  src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172541_Form203P20(1)20(2).pdf.66dee97aac65d3.58070651.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_372"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_372"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_385"
                  className="form-textarea validate[required]"
                  name="q385_ifyes385"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_385"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_384"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_384"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_387"
                  className="form-textarea validate[required]"
                  name="q387_ifyes387"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_387"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_388">
          <div id="cid_388" className="form-input-wide" data-layout="full">
            <div
              id="text_388"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>16. MEALS</span>
                </strong>
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_386"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_386"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_390"
                  className="form-textarea validate[required]"
                  name="q390_ifyes390"
                  style={{ width: 648, height: 40 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_390"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_391"
                  className="form-textarea validate[required]"
                  name="q391_howOften"
                  style={{ width: 648, height: 40 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_391"
                  defaultValue={""}
                />
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
            <input
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
            />
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
                <textarea
                  id="input_392"
                  className="form-textarea validate[required]"
                  name="q392_anyChanges"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_392"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_394"
                  className="form-textarea validate[required]"
                  name="q394_bIf"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_394"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_395">
          <div id="cid_395" className="form-input-wide" data-layout="full">
            <div
              id="text_395"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>17. HOUSE AND YARD WORK </span>
                </strong>
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_485"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_485"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_396"
                  className="form-textarea validate[required]"
                  name="q396_a"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_396"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_397"
                  className="form-textarea validate[required]"
                  name="q397_bHow"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_397"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_389"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_389"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_398"
                  className="form-textarea validate[required]"
                  name="q398_ifyes398"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_398"
                  defaultValue={""}
                />
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
        <li id="cid_509" className="form-input-wide" data-type="control_pagebreak">
          <div className="form-pagebreak" data-component="pagebreak">
            <div className="form-pagebreak-back-container">
              <button
                id="form-pagebreak-back_509"
                type="button"
                className="form-pagebreak-back  jf-form-buttons"
                data-component="pagebreak-back"
              >
                Back
              </button>
            </div>
            <div className="form-pagebreak-next-container">
              <button
                id="form-pagebreak-next_509"
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
              id="pageInfo_509"
            />
          </div>
        </li>
      </ul>
      <ul
        className="form-section page-section"
        role="presentation"
        style={{ display: "none" }}
      >
        <li className="form-line" data-type="control_text" id="id_401">
          <div id="cid_401" className="form-input-wide" data-layout="full">
            <div
              id="text_401"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <img
                  src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172734_Form203P20(1)20(2).pdf.66dee9e831c3d6.52611950.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </li>
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
                <textarea
                  id="input_399"
                  className="form-textarea validate[required]"
                  name="q399_dIf"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_399"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_402">
          <div id="cid_402" className="form-input-wide" data-layout="full">
            <div
              id="text_402"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>18. GETTING AROUND</span>
                </strong>
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_404"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_404"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
            <input
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
            />
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
                <textarea
                  id="input_405"
                  className="form-textarea validate[required]"
                  name="q405_ifHeshe"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_405"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_406"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_406"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_406"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_406"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_406"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  type="checkbox"
                  className="form-checkbox-other form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_407"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_407"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_409"
                  className="form-textarea validate[required]"
                  name="q409_ifno"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_409"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_408"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_408"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_410"
                  className="form-textarea validate[required]"
                  name="q410_ifYou410"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_410"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_411">
          <div id="cid_411" className="form-input-wide" data-layout="full">
            <div
              id="text_411"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>19. SHOPPING </span>
                </strong>
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_486"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_486"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_412"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_412"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_412"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_412"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <textarea
                  id="input_413"
                  className="form-textarea validate[required]"
                  name="q413_bDescribe"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_413"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_414"
                  className="form-textarea validate[required]"
                  name="q414_cHow"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_414"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_415">
          <div id="cid_415" className="form-input-wide" data-layout="full">
            <div
              id="text_415"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>20. MONEY</span>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: "12pt" }}>
                  <strong>a. Is he/she able to: </strong>
                </span>
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_416"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_416"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_417"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_417"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_418"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_418"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_419"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_419"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_421"
                  className="form-textarea validate[required]"
                  name="q421_explainAll"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_421"
                  defaultValue={""}
                />
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
        <li id="cid_510" className="form-input-wide" data-type="control_pagebreak">
          <div className="form-pagebreak" data-component="pagebreak">
            <div className="form-pagebreak-back-container">
              <button
                id="form-pagebreak-back_510"
                type="button"
                className="form-pagebreak-back  jf-form-buttons"
                data-component="pagebreak-back"
              >
                Back
              </button>
            </div>
            <div className="form-pagebreak-next-container">
              <button
                id="form-pagebreak-next_510"
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
              id="pageInfo_510"
            />
          </div>
        </li>
      </ul>
      <ul
        className="form-section page-section"
        role="presentation"
        style={{ display: "none" }}
      >
        <li className="form-line" data-type="control_text" id="id_423">
          <div id="cid_423" className="form-input-wide" data-layout="full">
            <div
              id="text_423"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <img
                  src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172945_Form203P20(1)20(2).pdf.66deea6b7f3ff6.53954230.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_420"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_420"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_422"
                  className="form-textarea validate[required]"
                  name="q422_ifyes422"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_422"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_494">
          <div id="cid_494" className="form-input-wide" data-layout="full">
            <div
              id="text_494"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>
                    21. HOBBIES AND INTERESTS
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </li>
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
                <textarea
                  id="input_425"
                  className="form-textarea validate[required]"
                  name="q425_aWhat"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_425"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_426"
                  className="form-textarea validate[required]"
                  name="q426_bHow426"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_426"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_427"
                  className="form-textarea validate[required]"
                  name="q427_cDescribe"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_427"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_428">
          <div id="cid_428" className="form-input-wide" data-layout="full">
            <div
              id="text_428"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <strong>
                  <span style={{ fontSize: "14pt" }}>22. SOCIAL ACTIVITIES </span>
                </strong>
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_429"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_429"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_429"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_429"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_429"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_429"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  type="checkbox"
                  className="form-checkbox-other form-checkbox validate[required]"
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
                  <input
                    type="text"
                    className="form-checkbox-other-input form-textbox"
                    name="q429_aHow429[other]"
                    data-otherhint="Other (Explain)"
                    size={15}
                    id="input_429"
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
                <textarea
                  id="input_430"
                  className="form-textarea validate[required]"
                  name="q430_bDescribe430"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_430"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_431"
                  className="form-textarea validate[required]"
                  name="q431_howOften431"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_431"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_432"
                  className="form-textarea validate[required]"
                  name="q432_cList"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_432"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_433"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_433"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_435"
                  className="form-textarea validate[required]"
                  name="q435_howOften435"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_435"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_434"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_434"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
        <li id="cid_511" className="form-input-wide" data-type="control_pagebreak">
          <div className="form-pagebreak" data-component="pagebreak">
            <div className="form-pagebreak-back-container">
              <button
                id="form-pagebreak-back_511"
                type="button"
                className="form-pagebreak-back  jf-form-buttons"
                data-component="pagebreak-back"
              >
                Back
              </button>
            </div>
            <div className="form-pagebreak-next-container">
              <button
                id="form-pagebreak-next_511"
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
              id="pageInfo_511"
            />
          </div>
        </li>
      </ul>
      <ul
        className="form-section page-section"
        role="presentation"
        style={{ display: "none" }}
      >
        <li className="form-line" data-type="control_text" id="id_440">
          <div id="cid_440" className="form-input-wide" data-layout="full">
            <div
              id="text_440"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <img
                  src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_173126_Form203P20(1)20(2).pdf.66deeacd84afa9.26556945.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_436"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_436"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_438"
                  className="form-textarea validate[required]"
                  name="q438_ifyes438"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_438"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_439"
                  className="form-textarea validate[required]"
                  name="q439_eDescribe"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_439"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_495">
          <div id="cid_495" className="form-input-wide" data-layout="full">
            <div
              id="text_495"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>
                    SECTION D - INFORMATION ABOUT ABILITIES
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_442"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <textarea
                  id="input_444"
                  className="form-textarea validate[required]"
                  name="q444_pleaseExplain"
                  style={{ width: 648, height: 100 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_444"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_445"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_445"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <textarea
                  id="input_447"
                  className="form-textarea validate[required]"
                  name="q447_cHow447"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_447"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_448"
                  className="form-textarea validate[required]"
                  name="q448_ifYou448"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_448"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_449"
                  className="form-textarea validate[required]"
                  name="q449_dFor"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_449"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_450"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_450"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_451"
                  className="form-textarea validate[required]"
                  name="q451_fHow"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_451"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_452"
                  className="form-textarea validate[required]"
                  name="q452_gHow"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_452"
                  defaultValue={""}
                />
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
        <li id="cid_512" className="form-input-wide" data-type="control_pagebreak">
          <div className="form-pagebreak" data-component="pagebreak">
            <div className="form-pagebreak-back-container">
              <button
                id="form-pagebreak-back_512"
                type="button"
                className="form-pagebreak-back  jf-form-buttons"
                data-component="pagebreak-back"
              >
                Back
              </button>
            </div>
            <div className="form-pagebreak-next-container">
              <button
                id="form-pagebreak-next_512"
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
              id="pageInfo_512"
            />
          </div>
        </li>
      </ul>
      <ul
        className="form-section page-section"
        role="presentation"
        style={{ display: "none" }}
      >
        <li className="form-line" data-type="control_text" id="id_459">
          <div id="cid_459" className="form-input-wide" data-layout="full">
            <div
              id="text_459"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <img
                  src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_173244_Form203P20(1)20(2).pdf.66deeb208c84c2.45409133.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </li>
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
                <textarea
                  id="input_453"
                  className="form-textarea validate[required]"
                  name="q453_hHow"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_453"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_455"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_455"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_454"
                  className="form-textarea validate[required]"
                  name="q454_ifyes454"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_454"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_456"
                  className="form-textarea validate[required]"
                  name="q456_ifyes456"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_456"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_457"
                  className="form-textarea validate[required]"
                  name="q457_jHow"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_457"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_460"
                  className="form-textarea validate[required]"
                  name="q460_kHow"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_460"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_461"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_461"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_462"
                  className="form-textarea validate[required]"
                  name="q462_ifyes462"
                  style={{ width: 648, height: 80 }}
                  data-component="textarea"
                  required=""
                  aria-labelledby="label_462"
                  defaultValue={""}
                />
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  aria-describedby="label_463"
                  type="checkbox"
                  className="form-checkbox validate[required]"
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
                <input
                  type="checkbox"
                  className="form-checkbox-other form-checkbox validate[required]"
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
                  <input
                    type="text"
                    className="form-checkbox-other-input form-textbox"
                    name="q463_24Does[other]"
                    data-otherhint="Other (Explain)"
                    size={15}
                    id="input_463"
                    data-placeholder="Please type another option here"
                    placeholder="Please type another option here"
                  />
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
                <textarea
                  id="input_464"
                  className="form-textarea"
                  name="q464_whichOf"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_464"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_465"
                  className="form-textarea"
                  name="q465_whenWas"
                  style={{ width: 648, height: 60 }}
                  data-component="textarea"
                  aria-labelledby="label_465"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_466"
                  className="form-textarea"
                  name="q466_whenDoes"
                  style={{ width: 648, height: 100 }}
                  data-component="textarea"
                  aria-labelledby="label_466"
                  defaultValue={""}
                />
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
        <li id="cid_513" className="form-input-wide" data-type="control_pagebreak">
          <div className="form-pagebreak" data-component="pagebreak">
            <div className="form-pagebreak-back-container">
              <button
                id="form-pagebreak-back_513"
                type="button"
                className="form-pagebreak-back  jf-form-buttons"
                data-component="pagebreak-back"
              >
                Back
              </button>
            </div>
            <div className="form-pagebreak-next-container">
              <button
                id="form-pagebreak-next_513"
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
              id="pageInfo_513"
            />
          </div>
        </li>
      </ul>
      <ul
        className="form-section page-section"
        role="presentation"
        style={{ display: "none" }}
      >
        <li className="form-line" data-type="control_text" id="id_469">
          <div id="cid_469" className="form-input-wide" data-layout="full">
            <div
              id="text_469"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p>
                <img
                  src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_173330_Form203P20(1)20(2).pdf.66deeb498c8334.59374587.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </li>
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
                <input
                  aria-describedby="label_467"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_467"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_470"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <input
                  aria-describedby="label_470"
                  type="checkbox"
                  className="form-checkbox validate[required, maxselection]"
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
                <textarea
                  id="input_472"
                  className="form-textarea"
                  name="q472_1Name472"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  aria-labelledby="label_472"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_473"
                  className="form-textarea"
                  name="q473_1Side"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  aria-labelledby="label_473"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_474"
                  className="form-textarea"
                  name="q474_2Name"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  aria-labelledby="label_474"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_475"
                  className="form-textarea"
                  name="q475_2Side"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  aria-labelledby="label_475"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_476"
                  className="form-textarea"
                  name="q476_3Name"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  aria-labelledby="label_476"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_477"
                  className="form-textarea"
                  name="q477_3Side"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  aria-labelledby="label_477"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_478"
                  className="form-textarea"
                  name="q478_4Name"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  aria-labelledby="label_478"
                  defaultValue={""}
                />
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
                <textarea
                  id="input_479"
                  className="form-textarea"
                  name="q479_4Side"
                  style={{ width: 648, height: 20 }}
                  data-component="textarea"
                  aria-labelledby="label_479"
                  defaultValue={""}
                />
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
        <li className="form-line" data-type="control_text" id="id_482">
          <div id="cid_482" className="form-input-wide" data-layout="full">
            <div
              id="text_482"
              className="form-html"
              data-component="text"
              tabIndex={-1}
            >
              <p style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>SECTION E - REMARKS</span>
                </strong>
              </p>
              <p style={{ textAlign: "left" }}>
                <span style={{ fontSize: "12pt" }}>
                  Use this section for any added information you did not show in
                  earlier parts of this form. When you are done with this section
                  (or if you didn't have anything to add), be sure to complete the
                  fields at the bottom of this page.
                </span>
              </p>
            </div>
          </div>
        </li>
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
                <textarea
                  id="input_313"
                  className="form-textarea"
                  name="q313_typeA"
                  style={{ width: 648, height: 363 }}
                  data-component="textarea"
                  aria-labelledby="label_313"
                  defaultValue={""}
                />
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
            {" "}
            <input
              type="text"
              id="input_317"
              name="q317_name317"
              data-type="input-textbox"
              className="form-textbox validate[required]"
              data-defaultvalue=""
              style={{ width: 900 }}
              size={900}
              placeholder="(First, Middle Initial, Last) "
              data-component="textbox"
              aria-labelledby="label_317"
              required=""
              defaultValue=""
            />{" "}
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
                  <input
                    className="form-textbox validate[required, limitDate]"
                    id="month_483"
                    name="q483_date[month]"
                    type="tel"
                    size={2}
                    data-maxlength={2}
                    data-age=""
                    maxLength={2}
                    required=""
                    autoComplete="off"
                    aria-labelledby="label_483 sublabel_483_month"
                  />
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
                  <input
                    className="currentDate form-textbox validate[required, limitDate]"
                    id="day_483"
                    name="q483_date[day]"
                    type="tel"
                    size={2}
                    data-maxlength={2}
                    data-age=""
                    maxLength={2}
                    required=""
                    autoComplete="off"
                    aria-labelledby="label_483 sublabel_483_day"
                  />
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
                  <input
                    className="form-textbox validate[required, limitDate]"
                    id="year_483"
                    name="q483_date[year]"
                    type="tel"
                    size={4}
                    data-maxlength={4}
                    data-age=""
                    maxLength={4}
                    required=""
                    autoComplete="off"
                    aria-labelledby="label_483 sublabel_483_year"
                    defaultValue={2025}
                  />
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
                <input
                  className="form-textbox validate[required, limitDate, validateLiteDate]"
                  id="lite_mode_483"
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
                  aria-labelledby="label_483"
                  defaultValue="08/05/2025"
                />
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
            {" "}
            Email address:
          </label>
          <div id="cid_484" className="form-input-wide" data-layout="half">
            {" "}
            <input
              type="email"
              id="input_484"
              name="q484_emailAddress"
              className="form-textbox validate[Email]"
              data-defaultvalue=""
              autoComplete="section-input_484 email"
              style={{ width: 310 }}
              size={310}
              placeholder="example@example.com"
              data-component="email"
              aria-labelledby="label_484"
              defaultValue=""
            />{" "}
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
                    <input
                      type="text"
                      id="input_319_addr_line1"
                      name="q319_mailingAddress[addr_line1]"
                      className="form-textbox validate[required] form-address-line"
                      data-defaultvalue=""
                      autoComplete="section-input_319 address-line1"
                      data-component="address_line_1"
                      aria-labelledby="label_319 sublabel_319_addr_line1"
                      required=""
                      defaultValue=""
                    />
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
                    <input
                      type="text"
                      id="input_319_addr_line2"
                      name="q319_mailingAddress[addr_line2]"
                      className="form-textbox form-address-line"
                      data-defaultvalue=""
                      autoComplete="section-input_319 off"
                      data-component="address_line_2"
                      aria-labelledby="label_319 sublabel_319_addr_line2"
                      defaultValue=""
                    />
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
                    <input
                      type="text"
                      id="input_319_city"
                      name="q319_mailingAddress[city]"
                      className="form-textbox validate[required] form-address-city"
                      data-defaultvalue=""
                      autoComplete="section-input_319 address-level2"
                      data-component="city"
                      aria-labelledby="label_319 sublabel_319_city"
                      required=""
                      defaultValue=""
                    />
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
                    <input
                      type="text"
                      id="input_319_state"
                      name="q319_mailingAddress[state]"
                      className="form-textbox form-address-state"
                      data-defaultvalue=""
                      autoComplete="section-input_319 address-level1"
                      data-component="state"
                      aria-labelledby="label_319 sublabel_319_state"
                      defaultValue=""
                    />
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
                    <input
                      type="text"
                      id="input_319_postal"
                      name="q319_mailingAddress[postal]"
                      className="form-textbox validate[required] form-address-postal"
                      data-defaultvalue=""
                      autoComplete="section-input_319 postal-code"
                      data-component="zip"
                      aria-labelledby="label_319 sublabel_319_postal"
                      required=""
                      defaultValue=""
                    />
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
    </>
  );
}

function OpeningPage() {
  return (
    <ul className="form-section page-section" role="presentation">
      <li className="form-line" data-type="control_text" id="id_1">
        <div id="cid_1" className="form-input-wide" data-layout="full">
          <div
            id="text_1"
            className="form-html"
            data-component="text"
            tabIndex={-1}
          >
            <p style={{ textAlign: "center" }}>
              <img
                src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-08_080436_11120SSA-338020ADL.pdf.66dd147b065804.94852656.png"
                alt=""
              />
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "12pt" }}>
                <strong>
                  READ ALL OF THIS INFORMATION BEFORE
                  <br />
                  YOU BEGIN COMPLETING THIS FORM{" "}
                </strong>
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <strong>IF YOU NEED HELP</strong>
            </p>
            <p>
              If you need help with this form, complete as much of it as you can
              and call the phone number provided on the letter sent with the form,
              or contact the person who asked you to complete the form. If you
              need the address or phone number for the office that provided the
              form, you can get it by calling Social Security at 1-800-772-1213
              (TTY 1-800-325-0778).
            </p>
            <p style={{ textAlign: "center" }}>
              <strong>HOW TO COMPLETE THIS FORM</strong>
            </p>
            <p>
              The information that you give on this form will be used to make a
              decision on the disabled person's claim. You can help by completing
              as much of the form as you can. When a question refers to the
              "disabled person," it refers to the person who is applying for or
              receiving disability benefits.
            </p>
            <p>
              It is important that you tell us what you know about the disabled
              person's activities and abilities.
            </p>
            <ul style={{ listStyleType: "square" }}>
              <li>Print or type.</li>
              <li>
                <strong>DO NOT LEAVE ANSWERS BLANK.</strong>If you do not know the
                answer or the answer is "none" or "does not apply," please write
                "don't know" or "none" or "does not apply."{" "}
              </li>
              <li>Do not ask a doctor or hospital to complete this form.</li>
              <li>
                Be sure to explain an answer if the question asks for an
                explanation, or if you think you need to explain an answer.
              </li>
              <li>
                If more space is needed to answer any questions, use the "REMARKS"
                section on Page 10, and show the number of the question being
                answered.
              </li>
              <li>
                If a specific activity is performed with the help of others,
                please indicate that.
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li id="cid_350" className="form-input-wide" data-type="control_pagebreak">
        <div className="form-pagebreak" data-component="pagebreak">
          <div className="form-pagebreak-back-container">
            <button
              id="form-pagebreak-back_350"
              type="button"
              className="form-pagebreak-back  jf-form-buttons"
              data-component="pagebreak-back"
            >
              Back
            </button>
          </div>
          <div className="form-pagebreak-next-container">
            <button
              id="form-pagebreak-next_350"
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
            id="pageInfo_350"
          />
        </div>
      </li>
    </ul>
  )
}

function PrivacyAgreement() {
  return (
    <ul
      className="form-section page-section"
      role="presentation"
      style={{ display: "none" }}
    >
      <li className="form-line" data-type="control_text" id="id_351">
        <div id="cid_351" className="form-input-wide" data-layout="full">
          <div
            id="text_351"
            className="form-html"
            data-component="text"
            tabIndex={-1}
          >
            <p style={{ textAlign: "center" }}>
              <img
                src="https://www.jotform.com/uploads/linerlegal/form_files/Opera%20Snapshot_2024-09-09_172333_Form203P20(1)20(2).pdf.66dee8fe566c01.48187181.png"
                alt=""
              />
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18pt" }}>
                <strong>
                  Privacy Act Statements
                  <br />
                  Collection and Use of Personal Information{" "}
                </strong>
              </span>
            </p>
            <p>
              Sections 205(a), 223(d), 1631(d)(1), and 1631(e)(1) of the Social
              Security Act, as amended, allow us to collect this information.
              Furnishing us this information is voluntary. However, failing to
              provide all or part of the information may prevent an accurate and
              timely decision on any disability claim filed.
            </p>
            <p>
              We will use the information you provide to make a determination of
              eligibility for benefits. We may also share your information for the
              following purposes, called routine uses:
            </p>
            <p>
              • To contractors and other Federal agencies, as necessary, for the
              purpose of assisting the Social Security Administration (SSA) in the
              efficient administration of its programs. We will disclose
              information under this routine use only in situations in which we
              may enter into a contractual or similar agreement to obtain
              assistance in accomplishing an SSA function relating to this system
              of records; and
            </p>
            <p>
              • To applicants, claimants, prospective applicants or claimants,
              other than the data subject, their authorized representatives or
              representative payees to the extent necessary to pursue Social
              Security claims and to representative payees when the information
              pertains to individuals for whom they serve as representative
              payees, for the purpose of assisting SSA in administering its
              representative payment responsibilities under the Social Security
              Act and assisting the representative payees in performing their
              duties as payees, including receiving and accounting for benefits
              for individuals for whom they serve as payees.
            </p>
            <p>
              In addition, we may share this information in accordance with the
              Privacy Act and other Federal laws. For example, where authorized,
              we may use and disclose this information in computer matching
              programs, in which our records are compared with other records to
              establish or verify a person’s eligibility for Federal benefit
              programs and for repayment of incorrect or delinquent debts under
              these programs.
            </p>
            <p>
              A list of additional routine uses is available in our Privacy Act
              System of Records Notices (SORN) 60-0089, entitled Claims Folders
              System, as published in the Federal Register (FR) on October 31,
              2019, at 84 FR 58422, and 60-0320, entitled Electronic Disability
              Claim File, as published in the FR on June 4, 2020, at 85 FR 34477.
              Additional information, and a full listing of all of our SORNs, is
              available on our website at{" "}
              <a href="http://www.ssa.gov/privacy" target="_blank" rel="nofollow">
                www.ssa.gov/privacy
              </a>
              .
            </p>
            <p>
              <strong>Paperwork Reduction Act Statement -</strong>This information
              collection meets the requirements of 44 U.S.C. § 3507, as amended by
              section 2 of the{" "}
              <span style={{ textDecoration: "underline" }}>
                Paperwork Reduction Act of 1995
              </span>
              . You do not need to answer these questions unless we display a
              valid Office of Management and Budget (OMB) control number. We
              estimate that it will take about 61 minutes to read the
              instructions, gather the facts, and answer the questions.{" "}
              <em>
                <strong>
                  Send <span style={{ textDecoration: "underline" }}>only</span>
                  comments regarding this burden estimate or any other aspect of
                  this collection, including suggestions for reducing this burden
                  to:
                </strong>
              </em>
              <em>SSA, 6401 Security Blvd, Baltimore, MD 21235-6401.</em>
            </p>
          </div>
        </div>
      </li>
      <li id="cid_352" className="form-input-wide" data-type="control_pagebreak">
        <div className="form-pagebreak" data-component="pagebreak">
          <div className="form-pagebreak-back-container">
            <button
              id="form-pagebreak-back_352"
              type="button"
              className="form-pagebreak-back  jf-form-buttons"
              data-component="pagebreak-back"
            >
              Back
            </button>
          </div>
          <div className="form-pagebreak-next-container">
            <button
              id="form-pagebreak-next_352"
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
            id="pageInfo_352"
          />
        </div>
      </li>
    </ul>
  )
}

export default App;
