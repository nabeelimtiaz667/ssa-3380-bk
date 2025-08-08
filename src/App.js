import NavSection from "./components/NavSection";
import TextContent from "./components/TextContent";
import FormPage1 from "./views/FormPage1";
import FormPage2 from "./views/FormPage2";
import FormPage3 from "./views/FormPage3";
import FormPage4 from "./views/FormPage4";
import FormPage5 from "./views/FormPage5";
import FormPage6 from "./views/FormPage6";
import FormPage7 from "./views/FormPage7";
import FormPage8 from "./views/FormPage8";

function App() {
  return (
    <>
      <FormPage1 />
      <FormPage2 />
      <FormPage3 />
      <FormPage4 />
      <FormPage5 />
      <FormPage6 />
      <FormPage7 />
      <FormPage8 />
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
      <NavSection id="350" />
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
      <NavSection id="352" />
    </ul>
  )
}

export default App;
