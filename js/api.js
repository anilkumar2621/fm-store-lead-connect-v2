/* ==========================================================
   FM STORE-STYLES
   API Service
========================================================== */

'use strict';

const API = {

    async post(data) {

        if (!CONFIG.API.BASE_URL) {

            console.warn('Google Apps Script URL not configured.');

            return {

                success: false,

                message: 'API URL not configured.'

            };

        }

        try {

            const response = await fetch(CONFIG.API.BASE_URL, {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json'

                },

                body: JSON.stringify(data)

            });

            return await response.json();

        }

        catch (error) {

            console.error(error);

            return {

                success: false,

                message: 'Network Error'

            };

        }

    }

};