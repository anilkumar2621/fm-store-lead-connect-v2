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

            console.log('Sending to API:', data);

            const response = await fetch(CONFIG.API.BASE_URL, {

                method: 'POST',

                body: JSON.stringify(data)

            });

            const result = await response.json();

            console.log('API Response:', result);

            return result;

        }

        catch (error) {

            console.error('API Error:', error);

            return {

                success: false,

                message: 'Network Error'

            };

        }

    }

};