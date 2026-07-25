/*
==========================================================
FM STORE-STYLES Lead Connect V2
Configuration
==========================================================
*/

const CONFIG = {

    API_URL: "https://script.google.com/macros/s/AKfycbyjBFpqSc_OMxhquvBPOObtnQnDt22aFIGIbkCZZubC48jlz6e_BayTAV3NPrGDtXVQbA/exec",

    APP_NAME: "FM STORE-STYLES Lead Connect",

    APP_VERSION: "2.1.0",

    COMPANY: "FM STORE-STYLES",

    REQUEST_TIMEOUT: 20000,

    RETRY_COUNT: 2,

    RETRY_DELAY: 1500,

    STORAGE: {

        THEME: "fm_theme",

        LAST_CATEGORY: "fm_last_category"

    },

    SOURCE: {

        NAME: "GitHub Pages",

        MEDIUM: "Website",

        CAMPAIGN: "Lead Connect V2"

    }

};

Object.freeze(CONFIG);
Object.freeze(CONFIG.STORAGE);
Object.freeze(CONFIG.SOURCE);