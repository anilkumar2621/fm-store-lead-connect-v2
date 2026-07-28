/* ==========================================================
   FM STORE-STYLES
   UI Components
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
       Open Bottom Sheet
    ====================================================== */

    openBottomSheet(id, title) {

        const options = window.FM_SELECTS[id] || [];

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

        if (!this.bottomSheetRoot) return;

        this.bottomSheetRoot.innerHTML = '';

    }

});