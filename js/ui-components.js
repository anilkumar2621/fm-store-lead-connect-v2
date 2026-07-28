/* ==========================================================
   FM STORE-STYLES
   UI Components V1
========================================================== */

'use strict';

window.FM_SELECTS = {};

Object.assign(UI, {

    /* ======================================================
       Apple Style Select
    ====================================================== */

    select({

        id,

        label,

        placeholder = 'Select',

        value = '',

        options = [],

        required = false,

        searchable = false

    }) {

        window.FM_SELECTS[id] = options;

        return `

<div class="fm-field">

    <label class="fm-label">

        ${label}

        ${required ? '<span class="required">*</span>' : ''}

    </label>

    <button

        type="button"

        id="${id}"

        class="fm-select"

        data-value="${value}"

        data-searchable="${searchable}"

        onclick="UI.openBottomSheet('${id}','Choose ${label}')"

    >

        <span class="fm-select-text">

            ${value || placeholder}

        </span>

        <span class="fm-select-arrow">

            ⌄

        </span>

    </button>

</div>

`;

    },

    /* ======================================================
       Card
    ====================================================== */

    card({

        title = '',

        body = ''

    }) {

        return `

<div class="fm-card">

    ${title ? `

    <div class="fm-card-header">

        <h2 class="fm-card-title">

            ${title}

        </h2>

    </div>

    ` : ''}

    <div class="fm-card-body">

        ${body}

    </div>

</div>

`;

    },

        /* ======================================================
       Input
    ====================================================== */

    input({

        id,

        label,

        placeholder = '',

        type = 'text',

        value = '',

        required = false,

        maxlength = ''

    }) {

        return `

<div class="fm-field">

    <label class="fm-label">

        ${label}

        ${required ? '<span class="required">*</span>' : ''}

    </label>

    <input

        id="${id}"

        class="fm-input"

        type="${type}"

        value="${value}"

        placeholder="${placeholder}"

        autocomplete="off"

        ${maxlength ? `maxlength="${maxlength}"` : ''}

    >

</div>

`;

    },

    /* ======================================================
       Textarea
    ====================================================== */

    textarea({

        id,

        label,

        placeholder = '',

        rows = 4

    }) {

        return `

<div class="fm-field">

    <label class="fm-label">

        ${label}

    </label>

    <textarea

        id="${id}"

        class="fm-textarea"

        rows="${rows}"

        placeholder="${placeholder}"

    ></textarea>

</div>

`;

    },

        /* ======================================================
       Button
    ====================================================== */

    button({

        text,

        onclick = '',

        type = 'primary',

        disabled = false

    }) {

        return `

<button

    type="button"

    class="btn btn-${type}"

    ${disabled ? 'disabled' : ''}

    onclick="${onclick}"

>

    ${text}

</button>

`;

    },

    /* ======================================================
       Apple Stepper
    ====================================================== */

    stepper({

        id,

        label,

        value = 1,

        min = 1,

        max = 10

    }) {

        return `

<div class="fm-field">

    <label class="fm-label">

        ${label}

    </label>

    <div class="fm-stepper">

        <button

            type="button"

            id="${id}-minus"

            class="fm-stepper-btn"

            onclick="UI.stepperChange('${id}',-1,${min},${max})"

        >

            −

        </button>

        <span

            id="${id}"

            class="fm-stepper-value"

            data-value="${value}"

            data-min="${min}"

            data-max="${max}"

        >

            ${value}

        </span>

        <button

            type="button"

            id="${id}-plus"

            class="fm-stepper-btn"

            onclick="UI.stepperChange('${id}',1,${min},${max})"

        >

            +

        </button>

    </div>

</div>

`;

    },
        /* ======================================================
       Stepper Change
    ====================================================== */

    stepperChange(id, change, min, max) {

        const valueElement = document.getElementById(id);

        if (!valueElement) return;

        let value = Number(valueElement.dataset.value);

        value += change;

        if (value < min) value = min;

        if (value > max) value = max;

        valueElement.dataset.value = value;

        valueElement.textContent = value;

        const minus = document.getElementById(`${id}-minus`);

        const plus = document.getElementById(`${id}-plus`);

        if (minus) {

            minus.disabled = value <= min;

        }

        if (plus) {

            plus.disabled = value >= max;

        }

        valueElement.classList.remove('fm-stepper-pop');

        void valueElement.offsetWidth;

        valueElement.classList.add('fm-stepper-pop');

    },

    /* ======================================================
       Initialize Steppers
    ====================================================== */

    initSteppers() {

        document.querySelectorAll('.fm-stepper-value').forEach(element => {

            const id = element.id;

            const value = Number(element.dataset.value);

            const min = Number(element.dataset.min);

            const max = Number(element.dataset.max);

            const minus = document.getElementById(`${id}-minus`);

            const plus = document.getElementById(`${id}-plus`);

            if (minus) {

                minus.disabled = value <= min;

            }

            if (plus) {

                plus.disabled = value >= max;

            }

        });

    },
        /* ======================================================
       Open Bottom Sheet
    ====================================================== */

    openBottomSheet(id, title) {

        const options = window.FM_SELECTS[id] || [];

        document.body.style.overflow = 'hidden';

        this.bottomSheetRoot.innerHTML = `

<div

    class="fm-sheet-overlay"

    onclick="UI.closeBottomSheet()"

></div>

<div class="fm-bottom-sheet">

    <div class="fm-sheet-header">

        ${title}

    </div>

    <div class="fm-sheet-options">

        ${options.map(option => `

<button

    type="button"

    class="fm-sheet-option"

    onclick="event.stopPropagation();UI.selectValue('${id}','${option}')"

>

    ${option}

</button>

        `).join('')}

    </div>

    <button

        type="button"

        class="fm-sheet-cancel"

        onclick="UI.closeBottomSheet()"

    >

        Cancel

    </button>

</div>

`;

    },

    /* ======================================================
       Select Value
    ====================================================== */

    selectValue(id, value) {

        const field = document.getElementById(id);

        if (!field) return;

        field.dataset.value = value;

        const text = field.querySelector('.fm-select-text');

        if (text) {

            text.textContent = value;

        }

        field.dispatchEvent(new CustomEvent('change', {

            detail: value

        }));

        this.closeBottomSheet();

    },
        /* ======================================================
       Close Bottom Sheet
    ====================================================== */

    closeBottomSheet() {

        document.body.style.overflow = '';

        if (!this.bottomSheetRoot) return;

        this.bottomSheetRoot.innerHTML = '';

    },

    /* ======================================================
       Section
    ====================================================== */

    section({

        id,

        hidden = false,

        body = ''

    }) {

        return `

<div

    id="${id}"

    class="fm-section"

    ${hidden ? 'style="display:none;"' : ''}

>

    ${body}

</div>

`;

    },

    /* ======================================================
       Show Section
    ====================================================== */

    show(id) {

        const element = document.getElementById(id);

        if (!element) return;

        element.style.display = '';

    },

    /* ======================================================
       Hide Section
    ====================================================== */

    hide(id) {

        const element = document.getElementById(id);

        if (!element) return;

        element.style.display = 'none';

    },

    /* ======================================================
       Toggle Section
    ====================================================== */

    toggle(id, show) {

        if (show) {

            this.show(id);

        } else {

            this.hide(id);

        }

    }

});