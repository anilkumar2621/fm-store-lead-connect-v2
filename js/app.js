/* ==========================================================
   FM STORE-STYLES
   Application Bootstrap
========================================================== */

'use strict';

const App = {

    init() {

        console.log(
            `${CONFIG.APP.NAME} v${CONFIG.APP.VERSION}`
        );

        UI.cache();

        UI.bindGlobalEvents();

        UI.showLoader();

        setTimeout(() => {

            UI.hideLoader();

            Router.go('home');

        }, CONFIG.UI.LOADER_DELAY);

    }

};

document.addEventListener('DOMContentLoaded', () => {

    App.init();

});