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

})},
${UI.card({

    title:'Customer Details',

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

        'Phone Call',

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

        this.toggleWhatsapp();

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
       WhatsApp Toggle
    ====================================================== */

    toggleWhatsapp() {

        const checkbox = document.getElementById('sameWhatsapp');

        if (!checkbox) return;

        if (checkbox.checked) {

            UI.hide('whatsappSection');

        } else {

            UI.show('whatsappSection');

        }

    },

    

    /* ======================================================
       Get WhatsApp Number
    ====================================================== */

    getWhatsappNumber() {

        const checkbox = document.getElementById('sameWhatsapp');

        if (checkbox && checkbox.checked) {

            return Validator.getValue('customerPhone');

        }

        return Validator.getValue('customerWhatsapp');

    },

    


        /* ======================================================
       Validate
    ====================================================== */

    validate() {

        // Clear previous validation

        [
            'brand',
            'otherBrand',
            'customerName',
            'customerPhone',
            'customerWhatsapp'
        ].forEach(id => Validator.clearInvalid(id));

        // Brand

        if (!Validator.getValue('brand')) {

            Validator.markInvalid('brand');

            Validator.focus('brand');

            UI.toast('Please select a Brand', 'warning');

            return false;

        }

        // Other Brand

        if (

            Validator.getValue('brand') === 'Other' &&

            !Validator.getValue('otherBrand')

        ) {

            Validator.markInvalid('otherBrand');

            Validator.focus('otherBrand');

            UI.toast('Please enter Brand Name', 'warning');

            return false;

        }

        // Customer Name

        if (!Validator.required(
    'customerName',
    'Please enter Full Name'
)) {

    return false;

}

        // Mobile Number

        const phone = Validator.getValue('customerPhone');

        if (!/^[0-9]{10}$/.test(phone)) {

            Validator.markInvalid('customerPhone');

            Validator.focus('customerPhone');

            UI.toast('Enter a valid 10 digit Mobile Number', 'warning');

            return false;

        }

        // WhatsApp Number (only when different)

        const sameWhatsapp = document.getElementById('sameWhatsapp');

        if (

            sameWhatsapp &&

            !sameWhatsapp.checked

        ) {

            const whatsapp = Validator.getValue('customerWhatsapp');

            if (!/^[0-9]{10}$/.test(whatsapp)) {

                Validator.markInvalid('customerWhatsapp');

                Validator.focus('customerWhatsapp');

                UI.toast('Enter a valid 10 digit WhatsApp Number', 'warning');

                return false;

            }

        }

        return true;

    },
        /* ======================================================
       Submit
    ====================================================== */

    async submit() {

        if (!this.validate()) {

            return;

        }

        const button = document.querySelector('.btn');

        if (button) {

            button.disabled = true;

            button.textContent = 'Submitting...';

        }

        const enquiry = {

            enquiryType: 'New Mobile',

            brand: Validator.getValue('brand'),

            otherBrand: Validator.getValue('otherBrand'),

            model: Validator.getValue('model'),

            ram: Validator.getValue('ram'),

            storage: Validator.getValue('storage'),

            colour: Validator.getValue('colour'),

            quantity: Validator.getValue('quantity'),

            requirements: Validator.getValue('requirements'),

            customerName: Validator.getValue('customerName'),

            customerPhone: Validator.getValue('customerPhone'),

            customerWhatsapp: this.getWhatsappNumber(),

            contactMethod: Validator.getValue('contactMethod')

        };

        const result = await API.post(enquiry);

if (result.success) {

    UI.toast('Enquiry Submitted Successfully');

} else {

    UI.toast(result.message || 'Submission Failed', 'warning');

}

        setTimeout(() => {

            if (button) {

                button.disabled = false;

                button.textContent = 'Submit Enquiry';

            }

        }, 1000);

    }
    };
    