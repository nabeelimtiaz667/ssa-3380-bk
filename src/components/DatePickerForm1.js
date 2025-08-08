import InputTelDate from "./InputTelDate";
import InputTextLite from "./InputTextLite";

export default function DatePicker() {
    return <div data-wrapper-react="true">
        <div style={{ display: "none" }}>
            <span
                className="form-sub-label-container"
                style={{ verticalAlign: "top" }}
            >
                <InputTelDate id="month_489" name="q489_4Date[month]" labelled="label_489 sublabel_489_month" />
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
                <InputTelDate id="day_489" name="q489_4Date[day]" labelled="label_489 sublabel_489_day" isCurrentDate />
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
                <InputTelDate id="year_489" name="q489_4Date[year]" labelled="label_489 sublabel_489_year" size={4} defaultValue={2025} />
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
            <InputTextLite id="489" />
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
}