require("dotenv").config();

module.exports = {
  API: {
    BASE_URL: process.env.API_BASE_URL || "http://localhost:8090",
    PATHS: {
      SESSION: "/session",
      QUESTION: "/question",
      ANSWER: "/answer",
      AUTHORIZATION: "/authorization",
      ABANDON: "/abandon",
    },
  },
  APP: {
    BASE_URL: process.env.EXTERNAL_WEBSITE_HOST || "http://localhost:8000",
    PATHS: {
      CIC: "/",
      PASSPORT_DETAILS: "/passportDetails",
      BRP_DETAILS: "/brpDetails",
      PHOTOCARD_DL_DETAILS: "/photocardDlDetails",
      NON_UK_PASSPORT_DETAILS: "/nonUKPassportDetails",
      EU_IDENTITY_CARD_DETAILS: "/euIdentityCardDetails",
      NAME_ENTRY: "/nameEntry",
      DATE_OF_BIRTH: "/dateOfBirth",
      CHECK_DETAILS: "/checkDetails",
    },
    PHOTO_ID_OPTIONS:{
      UK_PASSPORT:"ukPassport",
      OTHER_PASSPORT: "otherPassport",
      UK_PHOTOCARD_DL: "ukPhotocardDL",
      BRP: "brp",
      EU_IDENTITY_CARD: "euIdentityCard",
    },
    UK_PASSPORT_HINT: "If your UK passport has expired, you can still use it to prove your identity up until 18 months after the expiry date",
    NON_UK_PASSPORT_HINT: "Biometric passports or e-Passports have a small rectangular camera icon on the front cover",
    ANALYTICS: {
      ID: process.env.GTM_ID,
      DOMAIN: process.env.ANALYTICS_DOMAIN || "localhost",
    },
  },
  PORT: process.env.PORT || 5020,
  SESSION_SECRET: process.env.SESSION_SECRET,
  SESSION_TABLE_NAME: process.env.SESSION_TABLE_NAME,
  SESSION_TTL: process.env.SESSION_TTL || 7200000, // two hours in ms
  REDIS: {
    SESSION_URL: process.env.REDIS_SESSION_URL,
    PORT: process.env.REDIS_PORT || 6379,
  },
};
