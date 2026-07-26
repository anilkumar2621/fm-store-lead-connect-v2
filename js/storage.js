/* ==========================================================
   FM STORE-STYLES
   Storage Manager
========================================================== */

'use strict';

const Storage = {

    get(key, fallback = null) {

        try {

            const value = localStorage.getItem(key);

            if (value === null) {

                return fallback;

            }

            return JSON.parse(value);

        } catch (error) {

            console.error('Storage.get()', error);

            return fallback;

        }

    },

    set(key, value) {

        try {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

            return true;

        } catch (error) {

            console.error('Storage.set()', error);

            return false;

        }

    },

    remove(key) {

        try {

            localStorage.removeItem(key);

            return true;

        } catch (error) {

            console.error('Storage.remove()', error);

            return false;

        }

    },

    has(key) {

        return localStorage.getItem(key) !== null;

    },

    clear() {

        try {

            localStorage.clear();

            return true;

        } catch (error) {

            console.error('Storage.clear()', error);

            return false;

        }

    }

};