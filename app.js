/* ==========================================================
   FM STORE-STYLES Lead Connect V3
   app.js
   Part 1 — Core Application
========================================================== */

'use strict';

/* ==========================================================
   Application
========================================================== */

const App = {

    init() {

        console.log(
            `${CONFIG.APP.NAME} v${CONFIG.APP.VERSION}`
        );

        UI.cache();

        UI.bind();

        App.showLoader();

        setTimeout(() => {

            App.hideLoader();

        }, CONFIG.UI.LOADER_DELAY);

    },

    showLoader() {

        if (!UI.loader || !UI.appContainer) return;

        UI.loader.classList.remove('hidden');

        UI.appContainer.classList.add('hidden');

    },

    hideLoader() {

        if (!UI.loader || !UI.appContainer) return;

        UI.loader.classList.add('hidden');

        UI.appContainer.classList.remove('hidden');

    }

};

/* ==========================================================
   UI
========================================================== */

const UI = {

    app: null,

    loader: null,

    appContainer: null,

    toastContainer: null,

    modalRoot: null,

    bottomSheetRoot: null,

    cache() {

        this.app = document.getElementById('app');

        this.loader = document.getElementById('loader');

        this.appContainer = document.getElementById('appContainer');

        this.toastContainer = document.getElementById('toastContainer');

        this.modalRoot = document.getElementById('modalRoot');

        this.bottomSheetRoot = document.getElementById('bottomSheetRoot');

    },

    bind() {

        window.addEventListener('online', () => {

            if (typeof Toast !== 'undefined') {

                Toast.show('Back online', 'success');

            }

        });

        window.addEventListener('offline', () => {

            if (typeof Toast !== 'undefined') {

                Toast.show('No internet connection', 'warning');

            }

        });

    }

};

/* ==========================================================
   Start Application
========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    App.init();

});
/* ==========================================================
   Storage
========================================================== */

const Storage = {

    get(key, fallback = null) {

        try {

            const value = localStorage.getItem(key);

            return value ? JSON.parse(value) : fallback;

        } catch (error) {

            console.error(error);

            return fallback;

        }

    },

    set(key, value) {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

        } catch (error) {

            console.error(error);

        }

    },

    remove(key) {

        localStorage.removeItem(key);

    },

    clear() {

        localStorage.clear();

    }

};

/* ==========================================================
   Toast
========================================================== */

const Toast = {

    show(message, type = 'success') {

        if (!UI.toastContainer) return;

        const toast = document.createElement('div');

        toast.className = `toast ${type}`;

        toast.textContent = message;

        UI.toastContainer.appendChild(toast);

        setTimeout(() => {

            toast.remove();

        }, CONFIG.UI.TOAST_DURATION);

    }

};

/* ==========================================================
   Utilities
========================================================== */

const Utils = {

    generateLeadId() {

        return 'FM-' + Date.now();

    },

    formatDate(date = new Date()) {

        return date.toLocaleDateString('en-IN');

    },

    formatTime(date = new Date()) {

        return date.toLocaleTimeString('en-IN', {

            hour: '2-digit',

            minute: '2-digit'

        });

    },

    getTimestamp() {

        return new Date().toISOString();

    },

    isEmpty(value) {

        return value === null ||

               value === undefined ||

               value === '';

    },

    trim(value) {

        return String(value).trim();

    }

};