/* ==========================================================
   FM STORE-STYLES Lead Connect V3
   Production Configuration
========================================================== */

'use strict';

const CONFIG = Object.freeze({

    /* ======================================================
       Application
    ====================================================== */

    APP: {

        NAME: 'FM STORE-STYLES',

        VERSION: '3.0.0',

        ENVIRONMENT: 'production'

    },

    /* ======================================================
       Business
    ====================================================== */

    BUSINESS: {

        NAME: 'FM STORE-STYLES',

        TAGLINE: 'Premium Mobiles • Fashion • Repairs',

        PHONE: '+91 84639 49455',

        WHATSAPP: '918463949455',

        EMAIL: '',

        BUSINESS_HOURS: '10:00 AM - 10:00 PM',

        STORES: [

            {

                NAME: 'FM STORE-STYLES',

                LOCATION: 'Eturnagaram',

                MAPS: ''

            },

            {

                NAME: 'Fayaz Mobiles',

                LOCATION: 'Eturnagaram',

                MAPS: ''

            }

        ]

    },

    /* ======================================================
       Backend
    ====================================================== */

    API: {

        BASE_URL: 'https://script.google.com/macros/s/AKfycbyzHdJXUgyErk95x1gnUNuj0gcIKZ_xqswPwvkWxM95wxeGQ7KrAc3fQ4o3rCbjFFO_fg/exec',

        TIMEOUT: 30000

    },

    /* ======================================================
       Google Sheets
    ====================================================== */

    SHEETS: {

        SHEET_NAME: 'Leads'

    },

    /* ======================================================
       Categories
    ====================================================== */

    CATEGORIES: [

        'Mobile',

        'Mens Wear',

        'Repair'

    ],

    /* ======================================================
       Mobile Configuration
    ====================================================== */

    MOBILE: {

        BRANDS: [

            'Apple',

            'Samsung',

            'OnePlus',

            'Google',

            'Motorola',

            'Nothing',

            'Xiaomi',

            'Redmi',

            'POCO',

            'Realme',

            'Vivo',

            'Oppo',

            'IQOO',

            'Honor',

            'Nokia',

            'Other'

        ],

        BUY_TYPES: [

            'New',

            'Pre-Owned'

        ],

        GRADES: [

            'A+',

            'A',

            'B+',

            'B',

            'Any'

        ],

        CONDITIONS: [

            'Like New',

            'Excellent',

            'Good',

            'Average'

        ],

        BUDGETS: [

            'Under ₹10,000',

            '₹10,000 - ₹15,000',

            '₹15,000 - ₹20,000',

            '₹20,000 - ₹30,000',

            '₹30,000 - ₹50,000',

            'Above ₹50,000',

            'Custom Budget'

        ],

        RAM: [

            '2GB',

            '3GB',

            '4GB',

            '6GB',

            '8GB',

            '12GB',

            '16GB'

        ],

        STORAGE: [

            '32GB',

            '64GB',

            '128GB',

            '256GB',

            '512GB',

            '1TB'

        ]

    },
        /* ======================================================
       Clothing Sizes
    ====================================================== */

    SIZES: [

        'XS',

        'S',

        'M',

        'L',

        'XL',

        'XXL',

        '3XL'

    ],

    /* ======================================================
       Gender
    ====================================================== */

    GENDER: [

        'Men'

    ],

    /* ======================================================
       Validation
    ====================================================== */

    VALIDATION: {

        PHONE_LENGTH: 10,

        NAME_MIN: 2,

        MODEL_MIN: 2,

        MESSAGE_MAX: 500

    },

    /* ======================================================
       UI
    ====================================================== */

    UI: {

        LOADER_DELAY: 600,

        TOAST_DURATION: 3000,

        ANIMATION_DURATION: 300

    },

    /* ======================================================
       Local Storage Keys
    ====================================================== */

    STORAGE: {

        LAST_FORM: 'fm_last_form',

        CUSTOMER: 'fm_customer',

        DRAFT: 'fm_draft',

        MOBILE_DRAFT: 'fm_mobile_draft',

        LAST_ROUTE: 'fm_last_route'

    }

});