/* ==========================================================
   FM STORE-STYLES
   Pre-Owned Mobile
========================================================== */

'use strict';

const MobileBuyPreOwned = {

    render() {

        UI.page({

            title: 'Pre-Owned Mobile',

            subtitle: 'Tell us what pre-owned mobile you are looking for.',

            back: 'mobileBuy',

            content: `

${UI.card({

    title: 'Mobile Requirements',

    body: `

${UI.select({

    id: 'brand',

    label: 'Brand',

    placeholder: 'Select Brand',

    options: CONFIG.MOBILE.BRANDS,

    required: true

})}

${UI.section({

    id: 'otherBrandSection',

    hidden: true,

    body: `

${UI.input({

    id: 'otherBrand',

    label: 'Other Brand',

    placeholder: 'Enter Brand Name',

    required: true

})}

`

})}

${UI.input({

    id: 'model',

    label: 'Model',

    placeholder: 'Example: iPhone 15 Pro'

})}

${UI.select({

    id: 'ram',

    label: 'RAM',

    placeholder: 'Select RAM',

    options: [

        'Not Sure',

        ...CONFIG.MOBILE.RAM

    ]

})}

${UI.select({

    id: 'storage',

    label: 'Storage',

    placeholder: 'Select Storage',

    options: [

        'Not Sure',

        ...CONFIG.MOBILE.STORAGE

    ]

})}

${UI.select({

    id: 'grade',

    label: 'Preferred Grade',

    placeholder: 'Select Grade',

    options: [

        'A+',

        'A',

        'B+',

        'B',

        'C',

        'Not Sure'

    ]

})}

${UI.select({

    id: 'budget',

    label: 'Budget',

    placeholder: 'Select Budget',

    options: [

        'Under ₹5,000',

        '₹5,000 – ₹10,000',

        '₹10,000 – ₹15,000',

        '₹15,000 – ₹20,000',

        '₹20,000 – ₹25,000',

        '₹25,000 – ₹30,000',

        '₹30,000 – ₹40,000',

        '₹40,000 – ₹50,000',

        '₹50,000 – ₹75,000',

        '₹75,000 – ₹1,00,000',

        'Above ₹1,00,000',

        'Other Budget',

        'Not Sure'

    ]

})}

${UI.section({

    id: 'otherBudgetSection',

    hidden: true,

    body: `

${UI.input({

    id: 'otherBudget',

    label: 'Enter Your Budget',

    placeholder: 'Example: ₹18,500'

})}

`

})}

${UI.input({

    id: 'colour',

    label: 'Preferred Colour',

    placeholder: 'Example: Black'

})}

${UI.stepper({

    id: 'quantity',

    label: 'Quantity',

    value: 1,

    min: 1,

    max: 10

})}

${UI.textarea({

    id: 'requirements',

    label: 'Additional Requirements',

    placeholder: 'Mention any specific requirement...'

})}

`

})},
${UI.card({

    title: 'Customer Details',

    body: `

${UI.input({

    id: 'customerName',

    label: 'Full Name',

    placeholder: 'Enter Full Name',

    required: true

})}

${UI.input({

    id: 'customerPhone',

    label: 'Mobile Number',

    placeholder: '10 Digit Mobile Number',

    type: 'tel',

    maxlength: 10,

    required: true

})}

<div class="fm-field">

    <label class="fm-checkbox">

        <input
            type="checkbox"
            id="sameWhatsapp"
            checked
            onchange="MobileBuyPreOwned.toggleWhatsapp()"
        >

        <span>WhatsApp number is same as Mobile</span>

    </label>

</div>

${UI.section({

    id: 'whatsappSection',

    hidden: true,

    body: `

${UI.input({

    id: 'customerWhatsapp',

    label: 'WhatsApp Number',

    placeholder: 'WhatsApp Number',

    type: 'tel',

    maxlength: 10

})}

`

})}

${UI.select({

    id: 'contactMethod',

    label: 'Preferred Contact',

    placeholder: 'Select Contact Method',

    options: [

        'WhatsApp',

        'Phone Call',

        'Either'

    ]

})}

`

})}

${UI.button({

    text: 'Submit Enquiry',

    onclick: 'MobileBuyPreOwned.submit()'

})}

`

        });

        MobileBuyPreOwned.init();

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

        const budget = document.getElementById('budget');

        if (budget) {

            budget.addEventListener('change', (e) => {

                this.handleBudgetChange(e.detail);

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
       Budget Change
    ====================================================== */

    handleBudgetChange(value) {

        if (value === 'Other Budget') {

            UI.show('otherBudgetSection');

        } else {

            UI.hide('otherBudgetSection');

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

        [
            'brand',
            'otherBrand',
            'budget',
            'otherBudget',
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

        // Other Budget

        if (

            Validator.getValue('budget') === 'Other Budget' &&

            !Validator.getValue('otherBudget')

        ) {

            Validator.markInvalid('otherBudget');

            Validator.focus('otherBudget');

            UI.toast('Please enter your Budget', 'warning');

            return false;

        }

        // Customer Name

        if (!Validator.getValue('customerName')) {

            Validator.markInvalid('customerName');

            Validator.focus('customerName');

            UI.toast('Please enter Full Name', 'warning');

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

        // WhatsApp Number

        const sameWhatsapp = document.getElementById('sameWhatsapp');

        if (sameWhatsapp && !sameWhatsapp.checked) {

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

    submit() {

        if (!this.validate()) {

            return;

        }

        const button = document.querySelector('.btn');

        if (button) {

            button.disabled = true;

            button.textContent = 'Submitting...';

        }

        const enquiry = {

            enquiryType: 'Pre-Owned Mobile',

            brand: Validator.getValue('brand'),

            otherBrand: Validator.getValue('otherBrand'),

            model: Validator.getValue('model'),

            ram: Validator.getValue('ram'),

            storage: Validator.getValue('storage'),

            grade: Validator.getValue('grade'),

            budget: Validator.getValue('budget'),

            otherBudget: Validator.getValue('otherBudget'),

            colour: Validator.getValue('colour'),

            quantity: Validator.getValue('quantity'),

            requirements: Validator.getValue('requirements'),

            customerName: Validator.getValue('customerName'),

            customerPhone: Validator.getValue('customerPhone'),

            customerWhatsapp: this.getWhatsappNumber(),

            contactMethod: Validator.getValue('contactMethod')

        };

        console.log(enquiry);

        UI.toast('Ready for Google Sheets Integration');

        setTimeout(() => {

            if (button) {

                button.disabled = false;

                button.textContent = 'Submit Enquiry';

            }

        }, 1000);

    }

};