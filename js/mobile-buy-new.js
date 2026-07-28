/* ==========================================================
   FM STORE-STYLES
   New Mobile
========================================================== */

'use strict';

const MobileBuyNew = {

    render() {

        UI.page({

            title: 'New Mobile',

            subtitle: 'Tell us what mobile you are looking for.',

            back: 'mobileBuy',

            content: `

${UI.card({

    title:'Mobile Requirements',

    body:`

${UI.select({

    id:'brand',

    label:'Brand',

    placeholder:'Select Brand',

    options:CONFIG.MOBILE.BRANDS,

    required:true

})}

${UI.section({

    id:'otherBrandSection',

    hidden:true,

    body:`

${UI.input({

    id:'otherBrand',

    label:'Other Brand',

    placeholder:'Enter Brand Name',

    required:true

})}

`

})}

${UI.input({

    id:'model',

    label:'Model',

    placeholder:'Example: iPhone 17 Pro Max'

})}

${UI.select({

    id:'ram',

    label:'RAM',

    placeholder:'Select RAM',

    options:[

        'Not Sure',

        ...CONFIG.MOBILE.RAM

    ]

})}

${UI.select({

    id:'storage',

    label:'Storage / ROM',

    placeholder:'Select Storage',

    options:[

        'Not Sure',

        ...CONFIG.MOBILE.STORAGE

    ]

})}

${UI.input({

    id:'colour',

    label:'Preferred Colour',

    placeholder:'Example: Black'

})}

${UI.stepper({

    id:'quantity',

    label:'Quantity',

    value:1,

    min:1,

    max:10

})}

${UI.textarea({

    id:'requirements',

    label:'Additional Requirements',

    placeholder:'Mention any specific requirement...'

})}

`

})}

${UI.card({

    title:'Your Details',

    body:`

${UI.input({

    id:'customerName',

    label:'Full Name',

    placeholder:'Enter Full Name',

    required:true

})}

${UI.input({

    id:'customerPhone',

    label:'Mobile Number',

    placeholder:'10 Digit Mobile Number',

    type:'tel',

    maxlength:10,

    required:true

})}
<div class="fm-field">

    <label class="fm-checkbox">

        <input

            type="checkbox"

            id="sameWhatsapp"

            checked

            onchange="MobileBuyNew.toggleWhatsapp()"

        >

        <span>

            WhatsApp number is same as Mobile

        </span>

    </label>

</div>

${UI.section({

    id:'whatsappSection',

    hidden:true,

    body:`

${UI.input({

    id:'customerWhatsapp',

    label:'WhatsApp Number',

    placeholder:'WhatsApp Number',

    type:'tel',

    maxlength:10

})}

`

})}

${UI.select({

    id:'contactMethod',

    label:'Preferred Contact',

    placeholder:'Select Contact Method',

    options:[

        'WhatsApp',

        'Call',

        'Either'

    ]

})}

`

})}

${UI.button({

    text:'Submit Enquiry',

    onclick:'MobileBuyNew.submit()'

})}

`

        });

        MobileBuyNew.init();

    },

    /* ======================================================
       Initialize
    ====================================================== */

    init() {

        const brand = document.getElementById('brand');

        if (brand) {

            brand.addEventListener('change', (e) => {

                this.handleBrandChange(e.detail);

            });

        }

    },

    /* ======================================================
       Brand Change
    ====================================================== */

    handleBrandChange(value) {

        if (value === 'Other') {

            UI.show('otherBrandSection');

        } else {

            UI.hide('otherBrandSection');

        }

    },

    /* ======================================================
       Get Field Value
    ====================================================== */

    getValue(id) {

        const element = document.getElementById(id);

        if (!element) return '';

        if (element.classList.contains('fm-select')) {

            return element.dataset.value || '';

        }

        if (element.classList.contains('fm-stepper-value')) {

            return element.dataset.value || '1';

        }

        return element.value.trim();

    },

    /* ======================================================
       Validate
    ====================================================== */

    validate() {

        if (!this.getValue('brand')) {

            UI.toast('Please select a Brand', 'warning');

            return false;

        }

        if (

            this.getValue('brand') === 'Other' &&

            !this.getValue('otherBrand')

        ) {

            UI.toast('Please enter Brand Name', 'warning');

            return false;

        }

        if (!this.getValue('customerName')) {

            UI.toast('Please enter Full Name', 'warning');

            return false;

        }

        const phone = this.getValue('customerPhone');

        if (!/^[0-9]{10}$/.test(phone)) {

            UI.toast('Enter a valid 10 digit Mobile Number', 'warning');

            return false;

        }

        return true;

    },

    /* ======================================================
       Submit
    ====================================================== */

    submit() {

        if (!this.validate()) {

            return;

        }

        const enquiry = {

            enquiryType: 'New Mobile',

            brand: this.getValue('brand'),

            otherBrand: this.getValue('otherBrand'),

            model: this.getValue('model'),

            ram: this.getValue('ram'),

            storage: this.getValue('storage'),

            colour: this.getValue('colour'),

            quantity: this.getValue('quantity'),

            requirements: this.getValue('requirements'),

            customerName: this.getValue('customerName'),

            customerPhone: this.getValue('customerPhone'),

            customerWhatsapp: this.getValue('customerWhatsapp'),

            contactMethod: this.getValue('contactMethod')

        };

        console.log(enquiry);

        UI.toast('Ready for Google Sheets Integration');

    }

};