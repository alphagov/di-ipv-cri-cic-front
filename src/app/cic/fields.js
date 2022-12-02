const {APP} = require("../../lib/config");

module.exports = {
    photoIdChoice: {
        type: "radios",
        legend: "",
        label: "",
        hint: "",
        items: [{value:APP.PHOTO_ID_OPTIONS.UK_PASSPORT, hint:{text: APP.UK_PASSPORT_HINT}}, APP.PHOTO_ID_OPTIONS.BRP, APP.PHOTO_ID_OPTIONS.UK_PHOTOCARD_DL, APP.PHOTO_ID_OPTIONS.OTHER_PASSPORT],
        validate: ["required"]
    },
  passportExpiryDate: {
        type: "date",
        journeyKey: "passportExpiryDate",
        validate: [
            "required", "date"],
    },
  brpExpiryDate: {
    type: "date",
    journeyKey: "brpExpiryDate",
    validate: [
      "required",
      "date",
      { type: "after", arguments: [new Date().toISOString().split("T")[0]] }
    ]
  },
  surname: {
    type: "text",
    validate: [
      "required"
    ]
  },
  firstName: {
    type: "text",
    validate: [
      "required"
    ]
  }
};
