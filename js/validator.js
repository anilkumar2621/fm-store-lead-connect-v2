'use strict';

const Validator = {

    getValue(id) {

        const element = document.getElementById(id);

        if (!element) return '';

        if (element.classList.contains('fm-select')) {
            return element.dataset.value || '';
        }

        if (element.classList.contains('fm-stepper-value')) {
            return element.dataset.value || '1';
        }

        return (element.value || '').trim();

    },

    focus(id) {

        const element = document.getElementById(id);

        if (!element) return;

        element.scrollIntoView({

            behavior: 'smooth',

            block: 'center'

        });

        element.focus();

    },

    markInvalid(id) {

        const element = document.getElementById(id);

        if (!element) return;

        element.classList.add('fm-invalid');

    },

    clearInvalid(id) {

        const element = document.getElementById(id);

        if (!element) return;

        element.classList.remove('fm-invalid');

    },

    required(id, message) {

        if (this.getValue(id)) {

            return true;

        }

        this.markInvalid(id);

        this.focus(id);

        UI.toast(message, 'warning');

        return false;

    }

};