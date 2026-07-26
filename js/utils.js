/* ==========================================================
   FM STORE-STYLES
   Utility Functions
========================================================== */

'use strict';

const Utils = {

    generateLeadId() {

        return `FM-${Date.now()}`;

    },

    now() {

        return new Date();

    },

    timestamp() {

        return new Date().toISOString();

    },

    formatDate(date = new Date()) {

        return date.toLocaleDateString('en-IN');

    },

    formatTime(date = new Date()) {

        return date.toLocaleTimeString('en-IN', {

            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'

        });

    },

    trim(value) {

        if (value === null || value === undefined) {

            return '';

        }

        return String(value).trim();

    },

    isEmpty(value) {

        return this.trim(value) === '';

    },

    phone(value) {

        return String(value)
            .replace(/\D/g, '')
            .slice(0, 10);

    },

    email(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(

            this.trim(value)

        );

    },

    capitalize(text) {

        return this.trim(text)
            .replace(/\b\w/g, c => c.toUpperCase());

    },

    uuid() {

        return crypto.randomUUID
            ? crypto.randomUUID()
            : `fm-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;

    },

    delay(ms) {

        return new Promise(resolve => {

            setTimeout(resolve, ms);

        });

    }

};