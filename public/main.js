var favicon = document.querySelector('link[rel="shortcut icon"]');
window.isDarkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
if (favicon && window.isDarkMode) {
    favicon.href = favicon.href.replaceAll('favicon-2021-light%402x.png', 'favicon-2021-dark%402x.png');
}
window.enableEventObserver = true

const initJotForm = () => {
    JotForm.newDefaultTheme = true;
    JotForm.extendsNewTheme = false;
    JotForm.CDN_VENDOR_PATH = "https://cdn.jotfor.ms/s/vendor/static";
    JotForm.singleProduct = false;
    JotForm.newPaymentUIForNewCreatedForms = true;

    JotForm.texts = {
        "confirmEmail": "E-mail does not match",
        "pleaseWait": "Please wait...",
        "validateEmail": "You need to validate this e-mail",
        "confirmClearForm": "Are you sure you want to clear the form",
        "lessThan": "Your score should be less than or equal to",
        "incompleteFields": "There are incomplete required fields. Please complete them.",
        "required": "This field is required.",
        "requireOne": "At least one field required.",
        "requireEveryRow": "Every row is required.",
        "requireEveryCell": "Every cell is required.",
        "email": "Enter a valid e-mail address",
        "alphabetic": "This field can only contain letters",
        "numeric": "This field can only contain numeric values",
        "alphanumeric": "This field can only contain letters and numbers.",
        "cyrillic": "This field can only contain cyrillic characters",
        "url": "This field can only contain a valid URL",
        "currency": "This field can only contain currency values.",
        "fillMask": "Field value must fill mask.",
        "uploadExtensions": "You can only upload following files:",
        "noUploadExtensions": "File has no extension file type (e.g. .txt, .png, .jpeg)",
        "uploadFilesize": "File size cannot be bigger than:",
        "uploadFilesizemin": "File size cannot be smaller than:",
        "gradingScoreError": "Score total should only be less than or equal to",
        "inputCarretErrorA": "Input should not be less than the minimum value:",
        "inputCarretErrorB": "Input should not be greater than the maximum value:",
        "maxDigitsError": "The maximum digits allowed is",
        "minCharactersError": "The number of characters should not be less than the minimum value:",
        "maxCharactersError": "The number of characters should not be more than the maximum value:",
        "freeEmailError": "Free email accounts are not allowed",
        "minSelectionsError": "The minimum required number of selections is ",
        "maxSelectionsError": "The maximum number of selections allowed is ",
        "pastDatesDisallowed": "Date must not be in the past.",
        "dateLimited": "This date is unavailable.",
        "dateInvalid": "This date is not valid. The date format is {format}",
        "dateInvalidSeparate": "This date is not valid. Enter a valid {element}.",
        "ageVerificationError": "You must be older than {minAge} years old to submit this form.",
        "multipleFileUploads_typeError": "{file} has invalid extension. Only {extensions} are allowed.",
        "multipleFileUploads_sizeError": "{file} is too large, maximum file size is {sizeLimit}.",
        "multipleFileUploads_minSizeError": "{file} is too small, minimum file size is {minSizeLimit}.",
        "multipleFileUploads_emptyError": "{file} is empty, please select files again without it.",
        "multipleFileUploads_uploadFailed": "File upload failed, please remove it and upload the file again.",
        "multipleFileUploads_onLeave": "The files are being uploaded, if you leave now the upload will be cancelled.",
        "multipleFileUploads_fileLimitError": "Only {fileLimit} file uploads allowed.",
        "dragAndDropFilesHere_infoMessage": "Drag and drop files here",
        "chooseAFile_infoMessage": "Choose a file",
        "maxFileSize_infoMessage": "Max. file size",
        "generalError": "There are errors on the form. Please fix them before continuing.",
        "generalPageError": "There are errors on this page. Please fix them before continuing.",
        "wordLimitError": "Too many words. The limit is",
        "wordMinLimitError": "Too few words.  The minimum is",
        "characterLimitError": "Too many Characters.  The limit is",
        "characterMinLimitError": "Too few characters. The minimum is",
        "ccInvalidNumber": "Credit Card Number is invalid.",
        "ccInvalidCVC": "CVC number is invalid.",
        "ccInvalidExpireDate": "Expire date is invalid.",
        "ccInvalidExpireMonth": "Expiration month is invalid.",
        "ccInvalidExpireYear": "Expiration year is invalid.",
        "ccMissingDetails": "Please fill up the credit card details.",
        "ccMissingProduct": "Please select at least one product.",
        "ccMissingDonation": "Please enter numeric values for donation amount.",
        "disallowDecimals": "Please enter a whole number.",
        "restrictedDomain": "This domain is not allowed",
        "ccDonationMinLimitError": "Minimum amount is {minAmount} {currency}",
        "requiredLegend": "All fields marked with * are required and must be filled.",
        "geoPermissionTitle": "Permission Denied",
        "geoPermissionDesc": "Check your browser's privacy settings.",
        "geoNotAvailableTitle": "Position Unavailable",
        "geoNotAvailableDesc": "Location provider not available. Please enter the address manually.",
        "geoTimeoutTitle": "Timeout",
        "geoTimeoutDesc": "Please check your internet connection and try again.",
        "selectedTime": "Selected Time",
        "formerSelectedTime": "Former Time",
        "cancelAppointment": "Cancel Appointment",
        "cancelSelection": "Cancel Selection",
        "confirmSelection": "Confirm Selection",
        "noSlotsAvailable": "No slots available",
        "slotUnavailable": "{time} on {date} has been selected is unavailable. Please select another slot.",
        "multipleError": "There are {count} errors on this page. Please correct them before moving on.",
        "oneError": "There is {count} error on this page. Please correct it before moving on.",
        "doneMessage": "Well done! All errors are fixed.",
        "invalidTime": "Enter a valid time",
        "doneButton": "Done",
        "reviewSubmitText": "Review and Submit",
        "nextButtonText": "Next",
        "prevButtonText": "Previous",
        "seeErrorsButton": "See Errors",
        "notEnoughStock": "Not enough stock for the current selection",
        "notEnoughStock_remainedItems": "Not enough stock for the current selection ({count} items left)",
        "soldOut": "Sold Out",
        "justSoldOut": "Just Sold Out",
        "selectionSoldOut": "Selection Sold Out",
        "subProductItemsLeft": "({count} items left)",
        "startButtonText": "START", "submitButtonText": "Submit", "submissionLimit": "Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.", "reviewBackText": "Back to Form", "seeAllText": "See All", "progressMiddleText": "of", "fieldError": "field has an error.", "error": "Error"
    }

        ;
    JotForm.newPaymentUI = true;
    JotForm.importedPDF = "aHR0cHMlM0ElMkYlMkZ3d3cuam90Zm9ybS5jb20lMkZ1cGxvYWRzJTJGbGluZXJsZWdhbCUyRmZvcm1fZmlsZXMlMkZwZmNfZmxfNjZkZWQ2OWU0YjU2ZF9Gb3JtX1NTQS0zMzgwXzNQX0FETF8oMSlfKDIpLnBkZiUzRm5jJTNEMQ==";

    JotForm.importedPDFSettings = {
        "isConnected": "Yes", "enableThumbnail": "No", "hasPreviewButton": "Yes", "startButtonText": "Start Filling", "formType": "legacyForm", "welcomeThumbnail": ""
    }

        ;
    JotForm.originalLanguage = "en";
    JotForm.isFormViewTrackingAllowed = true;
    JotForm.replaceTagTest = true;
    JotForm.activeRedirect = "thanktext";
    JotForm.uploadServerURL = "https://upload.jotform.com/upload";

    JotForm.setCalculations([{
        "replaceText": "", "readOnly": false, "newCalculationType": true, "allowZeroCopy": true, "useCommasForDecimals": false, "operands": "", "equation": "N\u002FA", "showBeforeInput": false, "showEmptyDecimals": false, "ignoreHiddenFields": false, "insertAsText": false, "id": "action_0_1725591851190", "resultField": "396", "decimalPlaces": "2", "isError": false, "conditionId": "1725542309559", "conditionTrue": false, "baseField": "485"
    }

        , {
        "replaceText": "", "readOnly": false, "newCalculationType": true, "allowZeroCopy": true, "useCommasForDecimals": false, "operands": "", "equation": "Never", "showBeforeInput": false, "showEmptyDecimals": false, "ignoreHiddenFields": false, "insertAsText": false, "id": "action_0_1725591850281", "resultField": "403", "decimalPlaces": "2", "isError": false, "conditionId": "1725591850281", "conditionTrue": false, "baseField": "404"
    }

    ]);

    JotForm.setConditions([{
        "action": [{
            "id": "action_0_1725790445745", "visibility": "ShowMultiple", "isError": false, "fields": ["471", "472", "473", "474", "475", "476", "477", "478", "479"]
        }

        ], "id": "1725594109246", "index": "0", "link": "All", "priority": "0", "terms": [{
            "id": "term_0_1725790445745", "field": "470", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725594654479", "visibility": "ShowMultiple", "isError": false, "fields": ["470"]
        }

        ], "id": "1725594654479", "index": "1", "link": "All", "priority": "1", "terms": [{
            "id": "term_0_1725594654479", "field": "467", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725594621712", "visibility": "ShowMultiple", "isError": false, "fields": ["464", "465", "466"]
        }

        ], "id": "1725594621712", "index": "2", "link": "All", "priority": "2", "terms": [{
            "id": "term_0_1725594621712", "field": "463", "operator": "notEquals", "value": "None", "isError": false
        }

            , {
            "id": "term_1_1725594621712", "field": "463", "operator": "isFilled", "value": "", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725594557878", "visibility": "ShowMultiple", "isError": false, "fields": ["462"]
        }

        ], "id": "1725594557878", "index": "3", "link": "Any", "priority": "3", "terms": [{
            "id": "term_0_1725594557878", "field": "461", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725594522574", "visibility": "ShowMultiple", "isError": false, "fields": ["454", "456"]
        }

        ], "id": "1725594522574", "index": "4", "link": "Any", "priority": "4", "terms": [{
            "id": "term_0_1725594522574", "field": "455", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725594436144", "visibility": "ShowMultiple", "isError": false, "fields": ["447", "448"]
        }

        ], "id": "1725594436144", "index": "5", "link": "Any", "priority": "5", "terms": [{
            "id": "term_0_1725594436144", "field": "442", "operator": "equals", "value": "Walking", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725594324020", "visibility": "ShowMultiple", "isError": false, "fields": ["444"]
        }

        ], "id": "1725594324020", "index": "6", "link": "Any", "priority": "6", "terms": [{
            "id": "term_0_1725594324020", "field": "442", "operator": "isFilled", "value": "", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725594289286", "visibility": "ShowMultiple", "isError": false, "fields": ["438"]
        }

        ], "id": "1725594289286", "index": "7", "link": "Any", "priority": "7", "terms": [{
            "id": "term_0_1725594289286", "field": "436", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725594112221", "visibility": "ShowMultiple", "isError": false, "fields": ["422"]
        }

        ], "id": "1725594112221", "index": "8", "link": "Any", "priority": "8", "terms": [{
            "id": "term_0_1725594112221", "field": "420", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593345143", "visibility": "ShowMultiple", "isError": false, "fields": ["421"]
        }

        ], "id": "1725592613342", "index": "9", "link": "Any", "priority": "9", "terms": [{
            "id": "term_1725593379278", "field": "419", "operator": "equals", "value": "No", "isError": false
        }

            , {
            "id": "term_1725593370099", "field": "418", "operator": "equals", "value": "No", "isError": false
        }

            , {
            "id": "term_1725593360220", "field": "417", "operator": "equals", "value": "No", "isError": false
        }

            , {
            "id": "term_0_1725593345143", "field": "416", "operator": "equals", "value": "No", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593344313", "visibility": "ShowMultiple", "isError": false, "fields": ["412", "413", "414"]
        }

        ], "id": "1725593344313", "index": "10", "link": "Any", "priority": "10", "terms": [{
            "id": "term_0_1725593344313", "field": "486", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593298423", "visibility": "ShowMultiple", "isError": false, "fields": ["410"]
        }

        ], "id": "1725593298423", "index": "11", "link": "Any", "priority": "11", "terms": [{
            "id": "term_0_1725593298423", "field": "408", "operator": "equals", "value": "No", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593275657", "visibility": "ShowMultiple", "isError": false, "fields": ["409"]
        }

        ], "id": "1725593275657", "index": "12", "link": "Any", "priority": "12", "terms": [{
            "id": "term_0_1725593275657", "field": "407", "operator": "equals", "value": "No", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593249453", "visibility": "ShowMultiple", "isError": false, "fields": ["405"]
        }

        ], "id": "1725593249453", "index": "13", "link": "Any", "priority": "13", "terms": [{
            "id": "term_0_1725593249453", "field": "404", "operator": "equals", "value": "No", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593215058", "visibility": "ShowMultiple", "isError": false, "fields": ["403", "406", "407", "408"]
        }

        ], "id": "1725593215058", "index": "14", "link": "Any", "priority": "14", "terms": [{
            "id": "term_0_1725593215058", "field": "404", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593175732", "visibility": "ShowMultiple", "isError": false, "fields": ["398"]
        }

        ], "id": "1725593175732", "index": "15", "link": "Any", "priority": "15", "terms": [{
            "id": "term_0_1725593175732", "field": "389", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593146062", "visibility": "ShowMultiple", "isError": false, "fields": ["399"]
        }

        ], "id": "1725593146062", "index": "16", "link": "Any", "priority": "16", "terms": [{
            "id": "term_0_1725593146062", "field": "485", "operator": "equals", "value": "No", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593132654", "visibility": "ShowMultiple", "isError": false, "fields": ["396", "397", "389"]
        }

        ], "id": "1725593132654", "index": "17", "link": "Any", "priority": "17", "terms": [{
            "id": "term_0_1725593132654", "field": "485", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593095462", "visibility": "ShowMultiple", "isError": false, "fields": ["394"]
        }

        ], "id": "1725593095462", "index": "18", "link": "Any", "priority": "18", "terms": [{
            "id": "term_0_1725593095462", "field": "386", "operator": "equals", "value": "No", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593080893", "visibility": "ShowMultiple", "isError": false, "fields": ["390", "391", "393", "392"]
        }

        ], "id": "1725593080893", "index": "19", "link": "Any", "priority": "19", "terms": [{
            "id": "term_0_1725593080893", "field": "386", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593047484", "visibility": "ShowMultiple", "isError": false, "fields": ["387"]
        }

        ], "id": "1725593047484", "index": "20", "link": "Any", "priority": "20", "terms": [{
            "id": "term_0_1725593047484", "field": "384", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725593004651", "visibility": "ShowMultiple", "isError": false, "fields": ["385"]
        }

        ], "id": "1725593004651", "index": "21", "link": "Any", "priority": "21", "terms": [{
            "id": "term_0_1725593004651", "field": "372", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725592955324", "visibility": "ShowMultiple", "isError": false, "fields": ["371", "373", "374", "375", "376", "377", "378", "379"]
        }

        ], "id": "1725592955324", "index": "22", "link": "Any", "priority": "22", "terms": [{
            "id": "term_0_1725592955324", "field": "369", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725592916315", "visibility": "ShowMultiple", "isError": false, "fields": ["370"]
        }

        ], "id": "1725592916315", "index": "23", "link": "Any", "priority": "23", "terms": [{
            "id": "term_0_1725592916315", "field": "366", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725592854116", "visibility": "ShowMultiple", "isError": false, "fields": ["367"]
        }

        ], "id": "1725592854116", "index": "24", "link": "Any", "priority": "24", "terms": [{
            "id": "term_0_1725592854116", "field": "364", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725592656387", "visibility": "ShowMultiple", "isError": false, "fields": ["365"]
        }

        ], "id": "1725592656387", "index": "25", "link": "Any", "priority": "25", "terms": [{
            "id": "term_0_1725592656387", "field": "362", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_0_1725592617524", "visibility": "ShowMultiple", "isError": false, "fields": ["363"]
        }

        ], "id": "1725592617524", "index": "26", "link": "Any", "priority": "26", "terms": [{
            "id": "term_0_1725592617525", "field": "361", "operator": "equals", "value": "Yes", "isError": false
        }

        ], "type": "field"
    }

        , {
        "action": [{
            "id": "action_1725592290766", "visibility": "Require", "field": "448", "isError": false
        }

        ], "id": "1725592324383", "index": "27", "link": "Any", "priority": "27", "terms": [{
            "id": "term_1725592290766", "field": "442", "operator": "equals", "value": "Walking", "isError": false
        }

        ], "type": "require"
    }

        , {
        "action": [{
            "replaceText": "", "readOnly": false, "newCalculationType": true, "allowZeroCopy": true, "useCommasForDecimals": false, "operands": "", "equation": "N\u002FA", "showBeforeInput": false, "showEmptyDecimals": false, "ignoreHiddenFields": false, "insertAsText": false, "id": "action_0_1725591851190", "resultField": "396", "decimalPlaces": "2", "isError": false, "conditionId": "1725542309559", "conditionTrue": false, "baseField": "485"
        }

        ], "id": "1725542309559", "index": "28", "link": "Any", "priority": "28", "terms": [{
            "id": "term_0_1725591851190", "field": "485", "operator": "equals", "value": "No", "isError": false
        }

        ], "type": "calculation"
    }

        , {
        "action": [{
            "replaceText": "", "readOnly": false, "newCalculationType": true, "allowZeroCopy": true, "useCommasForDecimals": false, "operands": "", "equation": "Never", "showBeforeInput": false, "showEmptyDecimals": false, "ignoreHiddenFields": false, "insertAsText": false, "id": "action_0_1725591850281", "resultField": "403", "decimalPlaces": "2", "isError": false, "conditionId": "1725591850281", "conditionTrue": false, "baseField": "404"
        }

        ], "id": "1725591850281", "index": "29", "link": "Any", "priority": "29", "terms": [{
            "id": "term_0_1725591850281", "field": "404", "operator": "equals", "value": "No", "isError": false
        }

        ], "type": "calculation"
    }

    ]);
    JotForm.clearFieldOnHide = "disable";
    JotForm.submitError = "jumpToFirstError";

    JotForm.init(function () {
        /*INIT-START*/
        if (window.JotForm && JotForm.accessible) $('input_190').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_487').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_488').setAttribute('tabindex', 0);

        JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {}

            ; JotForm.calenderViewMonths[489] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {}

            ; JotForm.calenderViewDays[489] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        JotForm.calendarOther = {
            "today": "Today"
        }

            ;
        var languageOptions = document.querySelectorAll('#langList li');

        for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
            languageOptions[langIndex].on('click', function (e) {
                setTimeout(function () {
                    JotForm.setCalendar("489", false, {
                        "days": {
                            "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true
                        }

                        , "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "", "countSelectedDaysOnly": false
                    });
                }

                    , 0);
            });
        }

        JotForm.onTranslationsFetch(function () {
            JotForm.setCalendar("489", false, {
                "days": {
                    "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true
                }

                , "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "", "countSelectedDaysOnly": false
            });
        });

        JotForm.formatDate({
            date: (new Date()), dateField: $("id_" + 489)
        });
        if (window.JotForm && JotForm.accessible) $('input_491').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_492').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_358').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_360').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_363').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_365').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_367').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_368').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_370').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_373').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_374').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_375').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_376').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_377').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_378').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_379').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_385').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_387').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_390').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_391').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_393').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_392').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_394').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_396').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_397').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_398').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_399').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_403').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_405').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_409').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_410').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_413').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_414').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_421').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_422').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_425').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_426').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_427').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_430').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_431').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_432').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_435').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_438').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_439').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_444').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_447').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_448').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_449').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_451').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_452').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_453').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_454').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_456').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_457').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_460').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_462').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_464').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_465').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_466').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_472').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_473').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_474').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_475').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_476').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_477').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_478').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_479').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_313').setAttribute('tabindex', 0);
        if (window.JotForm && JotForm.accessible) $('input_317').setAttribute('tabindex', 0);

        JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {}

            ; JotForm.calenderViewMonths[483] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {}

            ; JotForm.calenderViewDays[483] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        JotForm.calendarOther = {
            "today": "Today"
        }

            ;
        var languageOptions = document.querySelectorAll('#langList li');

        for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
            languageOptions[langIndex].on('click', function (e) {
                setTimeout(function () {
                    JotForm.setCalendar("483", false, {
                        "days": {
                            "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true
                        }

                        , "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "", "countSelectedDaysOnly": false
                    });
                }

                    , 0);
            });
        }

        JotForm.onTranslationsFetch(function () {
            JotForm.setCalendar("483", false, {
                "days": {
                    "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true
                }

                , "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "", "countSelectedDaysOnly": false
            });
        });

        JotForm.formatDate({
            date: (new Date()), dateField: $("id_" + 483)
        });

        JotForm.alterTexts({
            "ageVerificationError": "You must be older than {minAge} years old to submit this form.", "alphabetic": "This field can only contain letters", "alphanumeric": "This field can only contain letters and numbers.", "cancelAppointment": "Cancel Appointment", "cancelSelection": "Cancel Selection", "ccDonationMinLimitError": "Minimum amount is {minAmount} {currency}", "ccInvalidCVC": "CVC number is invalid.", "ccInvalidExpireDate": "Expire date is invalid.", "ccInvalidExpireMonth": "Expiration month is invalid.", "ccInvalidExpireYear": "Expiration year is invalid.", "ccInvalidNumber": "Credit Card Number is invalid.", "ccMissingDetails": "Please fill up the credit card details.", "ccMissingDonation": "Please enter numeric values for donation amount.", "ccMissingProduct": "Please select at least one product.", "characterLimitError": "Too many Characters.  The limit is", "characterMinLimitError": "Too few characters. The minimum is", "chooseAFile_infoMessage": "Choose a file", "confirmClearForm": "Are you sure you want to clear the form", "confirmEmail": "E-mail does not match", "currency": "This field can only contain currency values.", "cyrillic": "This field can only contain cyrillic characters", "dateInvalid": "This date is not valid. The date format is {format}", "dateInvalidSeparate": "This date is not valid. Enter a valid {element}.", "dateLimited": "This date is unavailable.", "disallowDecimals": "Please enter a whole number.", "doneButton": "Done", "doneMessage": "Well done! All errors are fixed.", "dragAndDropFilesHere_infoMessage": "Drag and drop files here", "email": "Enter a valid e-mail address", "error": "Error", "fieldError": "field has an error.", "fillMask": "Field value must fill mask.", "formerSelectedTime": "Former Time", "freeEmailError": "Free email accounts are not allowed", "generalError": "There are errors on the form. Please fix them before continuing.", "generalPageError": "There are errors on this page. Please fix them before continuing.", "geoNotAvailableDesc": "Location provider not available. Please enter the address manually.", "geoNotAvailableTitle": "Position Unavailable", "geoPermissionDesc": "Check your browser's privacy settings.", "geoPermissionTitle": "Permission Denied", "geoTimeoutDesc": "Please check your internet connection and try again.", "geoTimeoutTitle": "Timeout", "gradingScoreError": "Score total should only be less than or equal to", "incompleteFields": "There are incomplete required fields. Please complete them.", "inputCarretErrorA": "Input should not be less than the minimum value:", "inputCarretErrorB": "Input should not be greater than the maximum value:", "invalidTime": "Enter a valid time", "justSoldOut": "Just Sold Out", "lessThan": "Your score should be less than or equal to", "maxCharactersError": "The number of characters should not be more than the maximum value:", "maxDigitsError": "The maximum digits allowed is", "maxFileSize_infoMessage": "Max. file size", "maxSelectionsError": "The maximum number of selections allowed is ", "minCharactersError": "The number of characters should not be less than the minimum value:", "minSelectionsError": "The minimum required number of selections is ", "multipleError": "There are {count} errors on this page. Please correct them before moving on.", "multipleFileUploads_emptyError": "{file} is empty, please select files again without it.", "multipleFileUploads_fileLimitError": "Only {fileLimit} file uploads allowed.", "multipleFileUploads_minSizeError": "{file} is too small, minimum file size is {minSizeLimit}.", "multipleFileUploads_onLeave": "The files are being uploaded, if you leave now the upload will be cancelled.", "multipleFileUploads_sizeError": "{file} is too large, maximum file size is {sizeLimit}.", "multipleFileUploads_typeError": "{file} has invalid extension. Only {extensions} are allowed.", "multipleFileUploads_uploadFailed": "File upload failed, please remove it and upload the file again.", "nextButtonText": "Next", "noSlotsAvailable": "No slots available", "notEnoughStock": "Not enough stock for the current selection", "notEnoughStock_remainedItems": "Not enough stock for the current selection ({count} items left)", "noUploadExtensions": "File has no extension file type (e.g. .txt, .png, .jpeg)", "numeric": "This field can only contain numeric values", "oneError": "There is {count} error on this page. Please correct it before moving on.", "pastDatesDisallowed": "Date must not be in the past.", "pleaseWait": "Please wait...", "prevButtonText": "Previous", "progressMiddleText": "of", "required": "This field is required.", "requiredLegend": "All fields marked with * are required and must be filled.", "requireEveryCell": "Every cell is required.", "requireEveryRow": "Every row is required.", "requireOne": "At least one field required.", "restrictedDomain": "This domain is not allowed", "reviewBackText": "Back to Form", "reviewSubmitText": "Review and Submit", "seeAllText": "See All", "seeErrorsButton": "See Errors", "selectedTime": "Selected Time", "selectionSoldOut": "Selection Sold Out", "slotUnavailable": "{time} on {date} has been selected is unavailable. Please select another slot.", "soldOut": "Sold Out", "startButtonText": "START", "submissionLimit": "Sorry! Only one entry is allowed. &lt;br&gt; Multiple submissions are disabled for this form.", "submitButtonText": "Submit", "subProductItemsLeft": "({count} items left)", "uploadExtensions": "You can only upload following files:", "uploadFilesize": "File size cannot be bigger than:", "uploadFilesizemin": "File size cannot be smaller than:", "url": "This field can only contain a valid URL", "validateEmail": "You need to validate this e-mail", "wordLimitError": "Too many words. The limit is", "wordMinLimitError": "Too few words.  The minimum is"
        });
        /*INIT-END*/
    });

    setTimeout(function () {
        JotForm.paymentExtrasOnTheFly([null, {
            "name": "ltpgtltspanStylecolor", "qid": "1", "text": "\r\nREAD ALL OF THIS INFORMATION BEFOREYOU BEGIN COMPLETING THIS FORM \r\nIF YOU NEED HELP\r\nIf you need help with this form, complete as much of it as you can and call the phone number provided on the letter sent with the form, or contact the person who asked you to complete the form. If you need the address or phone number for the office that provided the form, you can get it by calling Social Security at 1-800-772-1213 (TTY 1-800-325-0778).\r\nHOW TO COMPLETE THIS FORM\r\nThe information that you give on this form will be used to make a decision on the disabled person's claim. You can help by completing as much of the form as you can. When a question refers to the \"disabled person,\" it refers to the person who is applying for or receiving disability benefits.\r\nIt is important that you tell us what you know about the disabled person's activities and abilities.\r\n\r\nPrint or type.\r\nDO NOT LEAVE ANSWERS BLANK. If you do not know the answer or the answer is \"none\" or \"does not apply,\" please write \"don't know\" or \"none\" or \"does not apply.\"\r\nDo not ask a doctor or hospital to complete this form.\r\nBe sure to explain an answer if the question asks for an explanation, or if you think you need to explain an answer.\r\nIf more space is needed to answer any questions, use the \"REMARKS\" section on Page 10, and show the number of the question being answered.\r\nIf a specific activity is performed with the help of others, please indicate that.\r\n", "type": "control_text"
        }

            , null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {
                "name": "submit", "qid": "188", "text": "Submit", "type": "control_button"
            }

            , null, {
                "description": "", "name": "1Name", "qid": "190", "subLabel": "", "text": "1. NAME OF DISABLED PERSON", "type": "control_textbox"
            }

            , null, null, {
                "name": "input193", "qid": "193", "text": "3. YOUR DAYTIME TELEPHONE NUMBER (If there is no telephone number where you can be reached, please give us a daytime number where we can leave a message for you.) ", "type": "control_text"
            }

            , null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {
                "description": "", "mde": "No", "name": "typeA", "qid": "313", "subLabel": "", "text": "Remarks", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , null, null, null, {
                "description": "", "name": "name317", "qid": "317", "subLabel": "", "text": "Name of person completing this form:", "type": "control_textbox"
            }

            , null, {
                "description": "", "name": "mailingAddress", "qid": "319", "text": "MAILING ADDRESS (Street or PO Box) Include the apartment number, if applicable.", "type": "control_address"
            }

            , null, null, null, null, null, null, null, {
                "description": "", "name": "primary327", "qid": "327", "text": "Primary:", "type": "control_phone"
            }

            , null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {
                "name": "pageBreak350", "qid": "350", "text": "Page Break", "type": "control_pagebreak"
            }

            , {
                "name": "ltpStyletextalign351", "qid": "351", "text": "\r\nPrivacy Act StatementsCollection and Use of Personal Information  \r\nSections 205(a), 223(d), 1631(d)(1), and 1631(e)(1) of the Social Security Act, as amended, allow us to collect this information. Furnishing us this information is voluntary. However, failing to provide all or part of the information may prevent an accurate and timely decision on any disability claim filed.\r\nWe will use the information you provide to make a determination of eligibility for benefits. We may also share your information for the following purposes, called routine uses:\r\n• To contractors and other Federal agencies, as necessary, for the purpose of assisting the Social Security Administration (SSA) in the efficient administration of its programs. We will disclose information under this routine use only in situations in which we may enter into a contractual or similar agreement to obtain assistance in accomplishing an SSA function relating to this system of records; and\r\n• To applicants, claimants, prospective applicants or claimants, other than the data subject, their authorized representatives or representative payees to the extent necessary to pursue Social Security claims and to representative payees when the information pertains to individuals for whom they serve as representative payees, for the purpose of assisting SSA in administering its representative payment responsibilities under the Social Security Act and assisting the representative payees in performing their duties as payees, including receiving and accounting for benefits for individuals for whom they serve as payees.\r\nIn addition, we may share this information in accordance with the Privacy Act and other Federal laws. For example, where authorized, we may use and disclose this information in computer matching programs, in which our records are compared with other records to establish or verify a person’s eligibility for Federal benefit programs and for repayment of incorrect or delinquent debts under these programs.\r\nA list of additional routine uses is available in our Privacy Act System of Records Notices (SORN) 60-0089, entitled Claims Folders System, as published in the Federal Register (FR) on October 31, 2019, at 84 FR 58422, and 60-0320, entitled Electronic Disability Claim File, as published in the FR on June 4, 2020, at 85 FR 34477. Additional information, and a full listing of all of our SORNs, is available on our website at www.ssa.gov\u002Fprivacy.\r\nPaperwork Reduction Act Statement - This information collection meets the requirements of 44 U.S.C. § 3507, as amended by section 2 of the Paperwork Reduction Act of 1995. You do not need to answer these questions unless we display a valid Office of Management and Budget (OMB) control number. We estimate that it will take about 61 minutes to read the instructions, gather the facts, and answer the questions. Send only comments regarding this burden estimate or any other aspect of this collection, including suggestions for reducing this burden to: SSA, 6401 Security Blvd, Baltimore, MD 21235-6401.", "type": "control_text"
            }

            , {
                "name": "pageBreak352", "qid": "352", "text": "Page Break", "type": "control_pagebreak"
            }

            , {
                "name": "input353", "qid": "353", "text": "\r\nAnyone who makes or causes to be made a false statement or representation of material fact for use in determining a payment under the Social Security Act, or knowingly conceals or fails to disclose an event with an intent to affect an initial or continued right to payment, commits a crime punishable under Federal law by fine, imprisonment, or both, and may be subject to administrative sanctions.\r\nSECTION A - GENERAL INFORMATION", "type": "control_text"
            }

            , {
                "description": "", "name": "typeA354", "qid": "354", "text": "", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "4aWheredoyouliveCheckone", "qid": "355", "text": "7. a. Where does the disabled person live? (Check one.)", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "bWith", "qid": "356", "text": "b. With whom does he\u002Fshe live? (Check one.)", "type": "control_checkbox"
            }

            , {
                "name": "input357", "qid": "357", "text": "SECTION B - INFORMATION ABOUT ILLNESSES, INJURIES, OR CONDITIONS ", "type": "control_text"
            }

            , {
                "description": "", "mde": "No", "name": "8How", "qid": "358", "subLabel": "", "text": "8. How does this person's illnesses, injuries, or conditions limit his\u002Fher ability to work?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "ltpStyletextalign359", "qid": "359", "text": "\r\nSECTION C - INFORMATION ABOUT DAILY ACTIVITIES ", "type": "control_text"
            }

            , {
                "description": "", "mde": "No", "name": "9Describe", "qid": "360", "subLabel": "", "text": "9. Describe what the disabled person does from the time he\u002Fshe wakes up until going to bed.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "10Does", "qid": "361", "text": "10. Does this person take care of anyone else such as a wife\u002Fhusband, children, grandchildren, parents, friend, other?", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "11Does", "qid": "362", "text": "11. Does he\u002Fshe take care of pets or other animals?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes", "qid": "363", "subLabel": "", "text": "If \"YES,\" for whom does he\u002Fshe care, and what does he\u002Fshe do for them?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "12Does", "qid": "364", "text": "12. Does anyone help this person care for other people or animals?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes365", "qid": "365", "subLabel": "", "text": "If \"YES,\" what does he\u002Fshe do for them?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "14Do", "qid": "366", "text": "14. Do the illnesses, injuries, or conditions affect his\u002Fher sleep?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes367", "qid": "367", "subLabel": "", "text": "If \"YES,\" who helps, and what do they do to help?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "13What", "qid": "368", "subLabel": "", "text": "13. What was the disabled person able to do before his\u002Fher illnesses, injuries, or conditions that he\u002Fshe can't do now?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "15Personal", "qid": "369", "text": "15. PERSONAL CARE: Does the disabled person have PROBLEMS with personal care?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes370", "qid": "370", "subLabel": "", "text": "If \"YES,\" how?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "input371", "qid": "371", "text": "a. Explain how the illnesses, injuries, or conditions affect this person's ability to: ", "type": "control_text"
            }

            , {
                "description": "", "name": "12Do372", "qid": "372", "text": "b. Does he\u002Fshe need any special reminders to take care of personal needs and grooming?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "dress", "qid": "373", "subLabel": "", "text": "Dress:", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "bathe", "qid": "374", "subLabel": "", "text": "Bathe:", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "careFor", "qid": "375", "subLabel": "", "text": "Care for hair:", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "shave", "qid": "376", "subLabel": "", "text": "Shave:", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "feedSelf", "qid": "377", "subLabel": "", "text": "Feed self:", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "useThe", "qid": "378", "subLabel": "", "text": "Use the toilet:", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "other", "qid": "379", "subLabel": "", "text": "Other:", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , null, null, null, {
                "name": "input383", "qid": "383", "text": "", "type": "control_text"
            }

            , {
                "description": "", "name": "cDoes", "qid": "384", "text": "c. Does he\u002Fshe need help or reminders taking medicine?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes385", "qid": "385", "subLabel": "", "text": "If \"YES,\" what type of help or reminders are needed?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "aDoes", "qid": "386", "text": "a. Does the disabled person prepare his\u002Fher own meals?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes387", "qid": "387", "subLabel": "", "text": "If \"YES,\" what kind of help does he\u002Fshe need?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "input388", "qid": "388", "text": "16. MEALS", "type": "control_text"
            }

            , {
                "description": "", "name": "cDo389", "qid": "389", "text": "c. Does he\u002Fshe need help or encouragement doing these things?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes390", "qid": "390", "subLabel": "", "text": "If \"Yes,\" what kind of food is prepared? (For example, sandwiches, frozen dinners, or complete meals with several courses.)", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "howOften", "qid": "391", "subLabel": "", "text": "How often does he\u002Fshe prepare food or meals? (For example, daily, weekly, monthly.)", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "anyChanges", "qid": "392", "subLabel": "", "text": "Any changes in cooking habits since the illness, injuries, or conditions began?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "howLong", "qid": "393", "subLabel": "", "text": "How long does it take him\u002Fher?", "type": "control_textbox"
            }

            , {
                "description": "", "mde": "No", "name": "bIf", "qid": "394", "subLabel": "", "text": "b. If \"No,\" explain why he\u002Fshe cannot or does not prepare meals.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "ltpgtltstronggtltspanStylefontsize", "qid": "395", "text": "17. HOUSE AND YARD WORK ", "type": "control_text"
            }

            , {
                "description": "", "mde": "No", "name": "a", "qid": "396", "subLabel": "", "text": "a . List household chores, both indoors and outdoors, that the disabled person is able to do . (For example, cleaning, laundry, household repairs, ironing, mowing, etc.)", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "bHow", "qid": "397", "subLabel": "", "text": "b. How much time do chores take, and how often does he\u002Fshe do each of these things?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes398", "qid": "398", "subLabel": "", "text": "If \"YES,\" what help is needed?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "dIf", "qid": "399", "subLabel": "", "text": "d. If the disabled person doesn't do house or yard work, explain why not.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , null, {
                "name": "input401", "qid": "401", "text": "", "type": "control_text"
            }

            , {
                "name": "ltpgtltstronggtltspanStylefontsize402", "qid": "402", "text": "18. GETTING AROUND", "type": "control_text"
            }

            , {
                "description": "", "name": "aHow", "qid": "403", "subLabel": "", "text": "a. How often does this person go outside?", "type": "control_textbox"
            }

            , {
                "description": "", "name": "doesThis", "qid": "404", "text": "Does this person go outside?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifHeshe", "qid": "405", "subLabel": "", "text": "If he\u002Fshe doesn't go out at all, explain why not.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "bWhen", "qid": "406", "text": "b. When going out, how does he\u002Fshe travel? (Check all that apply.)", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "cWhen", "qid": "407", "text": "c. When going out, can he\u002Fshe go out alone?", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "dDoes", "qid": "408", "text": "d. Does the disabled person drive?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifno", "qid": "409", "subLabel": "", "text": "If \"NO,\" explain why he\u002Fshe can't go out alone.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "ifYou410", "qid": "410", "subLabel": "", "text": "If he\u002Fshe doesn't drive, explain why not.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "ltpgtltstronggtltspanStylefontsize411", "qid": "411", "text": "19. SHOPPING ", "type": "control_text"
            }

            , {
                "description": "", "name": "aIf", "qid": "412", "text": "a. If the disabled person does any shopping, does he\u002Fshe shop: (Check all that apply.)", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "bDescribe", "qid": "413", "subLabel": "", "text": "b. Describe what he\u002Fshe shops for.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "cHow", "qid": "414", "subLabel": "", "text": "c. How often does he\u002Fshe shop and how long does it take?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "ltpgtltstronggtltspanStylefontsize415", "qid": "415", "text": "20. MONEY\r\na. Is he\u002Fshe able to: ", "type": "control_text"
            }

            , {
                "description": "", "name": "payBills", "qid": "416", "text": "Pay bills:", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "handleA", "qid": "417", "text": "Handle a savings account:", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "countChange", "qid": "418", "text": "Count change:", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "useA", "qid": "419", "text": "Use a checkbook\u002Fmoney orders:", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "useA420", "qid": "420", "text": "b. Has the disabled person's ability to handle money changed since the illnesses, injuries, or conditions began?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "explainAll", "qid": "421", "subLabel": "", "text": "Explain all \"NO\" answers.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes422", "qid": "422", "subLabel": "", "text": "If \"YES,\" explain how the ability to handle money has changed", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "ltpgtltstronggtltspanStylefontsize423", "qid": "423", "text": "", "type": "control_text"
            }

            , null, {
                "description": "", "mde": "No", "name": "aWhat", "qid": "425", "subLabel": "", "text": "a. What are his\u002Fher hobbies and interests? (For example, reading, watching TV, sewing, playing sports, etc.)", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "bHow426", "qid": "426", "subLabel": "", "text": "b. How often and how well does he\u002Fshe do these things?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "cDescribe", "qid": "427", "subLabel": "", "text": "c. Describe any changes in these activities since the illnesses, injuries, or conditions began.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "ltpgtltstronggtltspanStylefontsize428", "qid": "428", "text": "22. SOCIAL ACTIVITIES ", "type": "control_text"
            }

            , {
                "description": "", "name": "aHow429", "qid": "429", "text": "a. How does the disabled person spend time with others? (Check all that apply.)", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "bDescribe430", "qid": "430", "subLabel": "", "text": "b. Describe the kinds of things he\u002Fshe does with others.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "howOften431", "qid": "431", "subLabel": "", "text": "How often does he\u002Fshe do these things?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "cList", "qid": "432", "subLabel": "", "text": "c. List the places he\u002Fshe goes on a regular basis. (For example, church, community center, sports events, social groups, etc.)", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "doesHeshe", "qid": "433", "text": "Does he\u002Fshe need to be reminded to go places?", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "doYou434", "qid": "434", "text": "Does he\u002Fshe need someone to accompany him\u002Fher?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "howOften435", "qid": "435", "subLabel": "", "text": "How often does he\u002Fshe go and how much does he\u002Fshe take part?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "dDo436", "qid": "436", "text": "d. Does this person have any problems getting along with family, friends, neighbors, or others?", "type": "control_checkbox"
            }

            , null, {
                "description": "", "mde": "No", "name": "ifyes438", "qid": "438", "subLabel": "", "text": "If \"YES,\" explain.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "eDescribe", "qid": "439", "subLabel": "", "text": "e. Describe any changes in social activities since the illnesses, injuries, or conditions began.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "name": "ltpStyletextalign440", "qid": "440", "text": "", "type": "control_text"
            }

            , null, {
                "description": "", "name": "23A", "qid": "442", "text": "23. a. Check any of the following items the disabled person's illnesses, injuries, or conditions affect:", "type": "control_checkbox"
            }

            , null, {
                "description": "", "mde": "No", "name": "pleaseExplain", "qid": "444", "subLabel": "", "text": "Please explain how his\u002Fher illnesses, injuries, or conditions affect each of the items you checked. (For example, he\u002Fshe can only lift [how many pounds], or he\u002Fshe can only walk [how far])", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "bIs", "qid": "445", "text": "b. Is the disabled person:", "type": "control_checkbox"
            }

            , null, {
                "description": "", "mde": "No", "name": "cHow447", "qid": "447", "subLabel": "", "text": "c. How far can he\u002Fshe walk before needing to stop and rest?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "ifYou448", "qid": "448", "subLabel": "", "text": "If he\u002Fshe has to rest, how long before he\u002Fshe can resume walking?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "dFor", "qid": "449", "subLabel": "", "text": "d. For how long can the disabled person pay attention?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "eDoes", "qid": "450", "text": "e. Does the disabled person finish what he\u002Fshe starts? ( For example, a conversation, chores, reading, watching a movie.)", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "fHow", "qid": "451", "subLabel": "", "text": "f. How well does the disabled person follow written instructions? (For example, a recipe.)", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "gHow", "qid": "452", "subLabel": "", "text": "g. How well does the disabled person follow spoken instructions?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "hHow", "qid": "453", "subLabel": "", "text": "h. How well does the disabled person get along with authority figures? (For example, police, bosses, landlords or teachers.)", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes454", "qid": "454", "subLabel": "", "text": "If \"YES,\" please explain.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "iHas", "qid": "455", "text": "i. Has he\u002Fshe ever been fired or laid off from a job because of problems getting along with other people?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes456", "qid": "456", "subLabel": "", "text": "If \"YES,\" please give name of employer.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "jHow", "qid": "457", "subLabel": "", "text": "j. How well does the disabled person handle stress?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , null, {
                "name": "input459", "qid": "459", "text": "", "type": "control_text"
            }

            , {
                "description": "", "mde": "No", "name": "kHow", "qid": "460", "subLabel": "", "text": "k. How well does he\u002Fshe handle changes in routine?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "lHave", "qid": "461", "text": "l. Have you noticed any unusual behavior or fears in the disabled person?", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "ifyes462", "qid": "462", "subLabel": "", "text": "If \"YES,\" please explain.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "24Does", "qid": "463", "text": "24. Does the disabled person use any of the following? (Check all that apply.)", "type": "control_checkbox"
            }

            , {
                "description": "", "mde": "No", "name": "whichOf", "qid": "464", "subLabel": "", "text": "Which of these were prescribed by a doctor? If you do not know or do not recall, please write that.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "whenWas", "qid": "465", "subLabel": "", "text": "When was it prescribed? If you do not know or do not recall, please write that.", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "whenDoes", "qid": "466", "subLabel": "", "text": "When does this person need to use these aids?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "name": "25Does", "qid": "467", "text": "25. Does the disabled person currently take any medicines for his\u002Fher illnesses, injuries, or conditions?", "type": "control_checkbox"
            }

            , null, {
                "name": "input469", "qid": "469", "text": "", "type": "control_text"
            }

            , {
                "description": "", "name": "if", "qid": "470", "text": "If \" YES,\" do any of the medicines cause side effects?", "type": "control_checkbox"
            }

            , {
                "name": "input471", "qid": "471", "text": "If \"YES,\" please explain. (Do not list all of the medicines that the disabled person takes. List only the medicines that cause side effects for the disabled person.) ", "type": "control_text"
            }

            , {
                "description": "", "mde": "No", "name": "1Name472", "qid": "472", "subLabel": "", "text": "1. NAME OF MEDICINE ", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "1Side", "qid": "473", "subLabel": "", "text": "1. SIDE EFFECTS PERSON HAS", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "2Name", "qid": "474", "subLabel": "", "text": "2. NAME OF MEDICINE ", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "2Side", "qid": "475", "subLabel": "", "text": "2. SIDE EFFECTS PERSON HAS", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "3Name", "qid": "476", "subLabel": "", "text": "3. NAME OF MEDICINE ", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "3Side", "qid": "477", "subLabel": "", "text": "3. SIDE EFFECTS PERSON HAS", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "4Name", "qid": "478", "subLabel": "", "text": "4. NAME OF MEDICINE ", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "4Side", "qid": "479", "subLabel": "", "text": "4. SIDE EFFECTS PERSON HAS", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , null, null, {
                "name": "ltpStyletextalign482", "qid": "482", "text": "SECTION E - REMARKS\r\nUse this section for any added information you did not show in earlier parts of this form. When you are done with this section (or if you didn't have anything to add), be sure to complete the fields at the bottom of this page.", "type": "control_text"
            }

            , {
                "description": "", "name": "date", "qid": "483", "text": "Date:", "type": "control_datetime"
            }

            , {
                "description": "", "name": "emailAddress", "qid": "484", "subLabel": "", "text": "Email address:", "type": "control_email"
            }

            , {
                "description": "", "name": "doThe", "qid": "485", "text": "Do the disabled person do household and yard work?", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "doesThe", "qid": "486", "text": "Does the disabled person do shopping?", "type": "control_checkbox"
            }

            , {
                "description": "", "name": "2Your", "qid": "487", "subLabel": "", "text": "2. YOUR NAME", "type": "control_textbox"
            }

            , {
                "description": "", "name": "3Relationship", "qid": "488", "subLabel": "", "text": "3. RELATIONSHIP (To disabled person)", "type": "control_textbox"
            }

            , {
                "description": "", "name": "4Date", "qid": "489", "text": "4. DATE", "type": "control_datetime"
            }

            , {
                "name": "input490", "qid": "490", "text": "If you do not know the answer or the answer is “none” or “does not apply,” please write “don't know” or “none” or “does not apply.”", "type": "control_text"
            }

            , {
                "description": "", "mde": "No", "name": "6A", "qid": "491", "subLabel": "", "text": "6. a. How long have you known the disabled person?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , {
                "description": "", "mde": "No", "name": "bHow492", "qid": "492", "subLabel": "", "text": "b. How much time do you spend with the disabled person and what do you do together?", "type": "control_textarea", "wysiwyg": "Disable"
            }

            , null, {
                "name": "ltpgtltstronggtltspanStylefontsize494", "qid": "494", "text": "21. HOBBIES AND INTERESTS", "type": "control_text"
            }

            , {
                "name": "ltpStyletextalign", "qid": "495", "text": "SECTION D - INFORMATION ABOUT ABILITIES", "type": "control_text"
            }

            , null, null, null, null, null, null, null, null, null, null, null, {
                "name": "pageBreak", "qid": "507", "text": "Page Break", "type": "control_pagebreak"
            }

            , {
                "name": "pageBreak508", "qid": "508", "text": "Page Break", "type": "control_pagebreak"
            }

            , {
                "name": "pageBreak509", "qid": "509", "text": "Page Break", "type": "control_pagebreak"
            }

            , {
                "name": "pageBreak510", "qid": "510", "text": "Page Break", "type": "control_pagebreak"
            }

            , {
                "name": "pageBreak511", "qid": "511", "text": "Page Break", "type": "control_pagebreak"
            }

            , {
                "name": "pageBreak512", "qid": "512", "text": "Page Break", "type": "control_pagebreak"
            }

            , {
                "name": "pageBreak513", "qid": "513", "text": "Page Break", "type": "control_pagebreak"
            }

        ]);
    }, 20);
    JotForm.showJotFormPowered = "0";
    JotForm.poweredByText = "Powered by Jotform";
    var all_spc = document.querySelectorAll("form[id='242508927461461'] .si" + "mple" + "_spc");
    for (var i = 0; i < all_spc.length; i++) {
        all_spc[i].value = "242508927461461-242508927461461";
    }
    JotForm.ownerView = true;
    JotForm.isNewSACL = true;
}

// Watch for your specific element
const observer = new MutationObserver((mutations, obs) => {
    const targetElement = document.getElementById('input_188');
    if (targetElement) {
        // Show loading overlay
        const overlay = document.getElementById('jotform-loading-overlay');
        overlay.style.display = 'flex';

        setTimeout(() => {
            initJotForm();
            // Hide loading overlay after initialization
            overlay.style.display = 'none';
        }, 3000);
        obs.disconnect();
    }
});

// Start observing the document
observer.observe(document, {
    childList: true,
    subtree: true
});