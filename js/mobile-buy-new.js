/* ==========================================================
   FM STORE-STYLES
   New Mobile Enquiry
========================================================== */

'use strict';

const MobileBuyNew = {

    render() {

        UI.page({

            title: '🆕 New Mobile',

            subtitle: 'Tell us what mobile you are looking for.',

            back: 'mobileBuy',

            content: `

<div class="fm-card">

    <h3 class="fm-card-title">

        📱 Mobile Details

    </h3>

    ${UI.select({

        id: 'brand',

        label: 'Brand',

        placeholder: 'Select Brand',

        options: CONFIG.MOBILE.BRANDS,

        required: true

    })}

    <div
        id="otherBrandContainer"
        style="display:none;"
    >

        <div class="fm-field">

            <label class="fm-label">

                Other Brand

            </label>

            <input

                id="otherBrand"

                class="fm-input"

                type="text"

                placeholder="Enter Brand Name"

            >

        </div>

    </div>

    <div class="fm-field">

        <label class="fm-label">

            Model

        </label>

        <input

            id="model"

            class="fm-input"

            type="text"

            placeholder="Example : iPhone 16"

        >

    </div>

    ${UI.select({

        id: 'ram',

        label: 'RAM',

        placeholder: 'Select RAM',

        options: CONFIG.MOBILE.RAM

    })}

    ${UI.select({

        id: 'storage',

        label: 'Storage / ROM',

        placeholder: 'Select Storage',

        options: CONFIG.MOBILE.STORAGE

    })}

    ${UI.select({

        id: 'budget',

        label: 'Budget',

        placeholder: 'Select Budget',

        options: CONFIG.MOBILE.BUDGETS,

        required: true

    })}

    <div class="fm-field">

        <label class="fm-label">

            Preferred Colour

        </label>

        <input

            id="colour"

            class="fm-input"

            type="text"

            placeholder="Example : Black"

        >

    </div>

    <div class="fm-field">

        <label class="fm-label">

            Quantity

        </label>

        <input

            id="quantity"

            class="fm-input"

            type="number"

            min="1"

            max="10"

            value="1"

        >

    </div>

    <div class="fm-field">

        <label class="fm-label">

            Additional Requirements

        </label>

        <textarea

            id="requirements"

            class="fm-textarea"

            rows="4"

            placeholder="Any specific requirement..."

        ></textarea>

    </div>

</div>

<div class="fm-card">

    <h3 class="fm-card-title">

        👤 Customer Details

    </h3>

    <div class="fm-field">

        <label class="fm-label">

            Full Name *

        </label>

        <input

            id="customerName"

            class="fm-input"

            type="text"

            placeholder="Enter Full Name"

        >

    </div>

    <div class="fm-field">

        <label class="fm-label">

            Mobile Number *

        </label>

        <input

            id="customerPhone"

            class="fm-input"

            type="tel"

            placeholder="10 Digit Mobile Number"

        >

    </div>

    <div class="fm-field">

        <label class="fm-label">

            WhatsApp Number

        </label>

        <input

            id="customerWhatsapp"

            class="fm-input"

            type="tel"

            placeholder="WhatsApp Number"

        >

    </div>

    ${UI.select({

        id:'store',

        label:'Preferred Store',

        placeholder:'Choose Store',

        options: CONFIG.BUSINESS.STORES.map(store => store.NAME)

    })}

    ${UI.select({

        id:'contact',

        label:'Preferred Contact',

        placeholder:'Choose Contact Method',

        options:[

            'WhatsApp',

            'Call',

            'Either'

        ]

    })}

</div>

<button

    class="btn btn-primary"

    onclick="alert('Next Step : Google Sheets Submission')"

>

    Submit Enquiry

</button>

`

        });

    }

};