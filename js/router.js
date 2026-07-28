/* ==========================================================
   FM STORE-STYLES
   Router
========================================================== */

'use strict';

const Router = {

    current: 'home',

    routes: {

        home() {

            Home.render();

        },

        mobile() {

            Mobile.render();

        },

        mobileBuy() {

            MobileBuy.render();

        },

        mobileBuyNew() {

            MobileBuyNew.render();

        },

        mobileBuyPreowned() {

            MobileBuyPreowned.render();

        },

        mobileSell() {

            MobileSell.render();

        },

        mobileExchange() {

            MobileExchange.render();

        },

        mobileReview() {

            MobileReview.render();

        },

        mobileSubmit() {

            MobileSubmit.render();

        },

        mobileSuccess() {

            MobileSuccess.render();

        },

        menswear() {

            MensWear.render();

        },

        repair() {

            Repair.render();

        },

        customer() {

            Customer.render();

        }

    },

    go(route) {

        if (!this.routes[route]) {

            console.error(`Unknown route: ${route}`);

            return;

        }

        this.current = route;

        UI.clearApp();

        this.routes[route]();

    }

};