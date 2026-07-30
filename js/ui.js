/* ==========================================================
   FM STORE-STYLES
   UI Manager
========================================================== */

'use strict';

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

    showLoader() {

        if (!this.loader || !this.appContainer) return;

        this.loader.classList.remove('hidden');
        this.appContainer.classList.add('hidden');

    },

    hideLoader() {

        if (!this.loader || !this.appContainer) return;

        this.loader.classList.add('hidden');
        this.appContainer.classList.remove('hidden');

    },

    toast(message, type = 'success') {

        if (!this.toastContainer) return;

        const toast = document.createElement('div');

        toast.className = `toast ${type}`;

        toast.textContent = message;

        this.toastContainer.appendChild(toast);

        setTimeout(() => {

            toast.remove();

        }, CONFIG.UI.TOAST_DURATION);

    },

    clearApp() {

        if (this.appContainer) {

            this.appContainer.innerHTML = '';

        }

    },

    render(html) {

        if (!this.appContainer) return;

        this.appContainer.innerHTML = html;

    },

    page({

        title,

        subtitle,

        back,

        content

    }) {

        this.render(`

<section class="container fade-in">

    <button
        class="btn btn-secondary"
        onclick="Router.go('${back}')"
    >
        ← Back
    </button>

    <div class="fm-page-header">

        <h1 class="fm-page-title">
            ${title}
        </h1>

        <p class="fm-page-subtitle">
            ${subtitle}
        </p>

    </div>

    ${content}

</section>

        `);

    },

    bindGlobalEvents() {

        window.addEventListener('online', () => {

            this.toast('Back online');

        });

        window.addEventListener('offline', () => {

            this.toast('No internet connection', 'warning');

        });

    }

};