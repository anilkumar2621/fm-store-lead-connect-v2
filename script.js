/*
==========================================================
FM STORE-STYLES Lead Connect V2
Shared JavaScript
Version : 2.0
Author  : FM STORE-STYLES
==========================================================
*/

"use strict";

/* ==========================================================
   CONFIGURATION
========================================================== */

// Paste your deployed Google Apps Script Web App URL here
const API_URL = "";

// Prevent duplicate submissions
let isSubmitting = false;

/* ==========================================================
   PAGE LOAD
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializePage();

});

/* ==========================================================
   INITIALIZATION
========================================================== */

function initializePage() {

    updateCopyright();

    attachLeadForm();

}

/* ==========================================================
   FOOTER
========================================================== */

function updateCopyright() {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

}

/* ==========================================================
   FORM INITIALIZATION
========================================================== */

function attachLeadForm() {

    const form = document.querySelector("[data-lead-form]");

    if (!form) return;

    form.addEventListener("submit", submitLead);

}

/* ==========================================================
   SUBMIT
========================================================== */

async function submitLead(event) {

    event.preventDefault();

    if (isSubmitting) return;

    const form = event.target;

    const data = collectFormData(form);

    if (!validateForm(data)) {
        return;
    }

    isSubmitting = true;

    showLoading();

    try {

        await sendLead(data);

        window.location.href = "thankyou.html";

    } catch (error) {

        console.error(error);

        alert("Unable to submit your enquiry. Please try again.");

    } finally {

        hideLoading();

        isSubmitting = false;

    }

}

/* ==========================================================
   COLLECT FORM DATA
========================================================== */

function collectFormData(form) {

    return {

        formType:
            form.dataset.formType || "",

        name:
            value(form.name),

        phone:
            value(form.phone),

        city:
            value(form.city),

        interest:
            value(form.interest),

        budget:
            value(form.budget),

        message:
            value(form.message),

        source:
            query("utm_source"),

        medium:
            query("utm_medium"),

        campaign:
            query("utm_campaign"),

        content:
            query("utm_content"),

        term:
            query("utm_term"),

        browser:
            browser(),

        device:
            device()

    };

}
/* ==========================================================
   VALIDATION
========================================================== */

function validateForm(data) {

    if (data.name === "") {

        alert("Please enter your full name.");
        return false;

    }

    if (!validPhone(data.phone)) {

        alert("Please enter a valid 10-digit mobile number.");
        return false;

    }

    return true;

}

/* ==========================================================
   API
========================================================== */

async function sendLead(data) {

    if (!API_URL) {

        throw new Error(
            "Google Apps Script URL is not configured."
        );

    }

    const response = await fetch(API_URL, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(data)

    });

    if (!response.ok) {

        throw new Error("Network request failed.");

    }

    const result = await response.json();

    if (!result.success) {

        throw new Error(result.message || "Submission failed.");

    }

    return result;

}

/* ==========================================================
   LOADING
========================================================== */

function showLoading() {

    const overlay = document.querySelector(".loading-overlay");

    if (!overlay) return;

    overlay.classList.add("active");

}

function hideLoading() {

    const overlay = document.querySelector(".loading-overlay");

    if (!overlay) return;

    overlay.classList.remove("active");

}

/* ==========================================================
   PHONE VALIDATION
========================================================== */

function validPhone(phone) {

    return /^[6-9]\d{9}$/.test(phone);

}

/* ==========================================================
   URL PARAMETERS
========================================================== */

function query(key) {

    const params = new URLSearchParams(window.location.search);

    return params.get(key) || "";

}

/* ==========================================================
   SAFE VALUE
========================================================== */

function value(field) {

    if (!field) {

        return "";

    }

    return field.value.trim();

}
/* ==========================================================
   DEVICE DETECTION
========================================================== */

function device() {

    const ua = navigator.userAgent;

    if (/Android/i.test(ua)) {
        return "Android";
    }

    if (/iPhone|iPad|iPod/i.test(ua)) {
        return "iOS";
    }

    if (/Windows/i.test(ua)) {
        return "Windows";
    }

    if (/Macintosh|Mac OS/i.test(ua)) {
        return "macOS";
    }

    if (/Linux/i.test(ua)) {
        return "Linux";
    }

    return "Unknown";

}

/* ==========================================================
   BROWSER DETECTION
========================================================== */

function browser() {

    const ua = navigator.userAgent;

    if (ua.includes("Edg")) {
        return "Microsoft Edge";
    }

    if (ua.includes("Chrome") && !ua.includes("Edg")) {
        return "Google Chrome";
    }

    if (ua.includes("Firefox")) {
        return "Mozilla Firefox";
    }

    if (ua.includes("Safari") && !ua.includes("Chrome")) {
        return "Safari";
    }

    if (ua.includes("Opera") || ua.includes("OPR")) {
        return "Opera";
    }

    return "Unknown";

}

/* ==========================================================
   DATE & TIME
========================================================== */

function currentDateTime() {

    return new Date().toISOString();

}

/* ==========================================================
   DEBUG LOGGER
========================================================== */

function log(message, data = null) {

    console.log("[FM Lead Connect]", message);

    if (data !== null) {
        console.log(data);
    }

}

/* ==========================================================
   ERROR LOGGER
========================================================== */

function logError(error) {

    console.error("[FM Lead Connect]", error);

}

/* ==========================================================
   RESET FORM
========================================================== */

function resetLeadForm() {

    const form = document.querySelector("[data-lead-form]");

    if (!form) return;

    form.reset();

}

/* ==========================================================
   END OF UTILITIES
========================================================== */
/* ==========================================================
   APPLICATION STARTUP CHECKS
========================================================== */

window.addEventListener("load", () => {

    log("FM STORE-STYLES Lead Connect V2 Loaded");

    if (API_URL === "") {

        console.warn(
            "Google Apps Script API URL has not been configured."
        );

    }

});

/* ==========================================================
   GLOBAL ERROR HANDLER
========================================================== */

window.addEventListener("error", (event) => {

    logError(event.error || event.message);

});

/* ==========================================================
   UNHANDLED PROMISES
========================================================== */

window.addEventListener("unhandledrejection", (event) => {

    logError(event.reason);

});

/* ==========================================================
   FUTURE PLACEHOLDERS
========================================================== */

/*
Future Features

✓ WhatsApp Notification
✓ Lead Duplicate Detection
✓ Auto Location
✓ Meta Pixel
✓ Google Analytics
✓ Facebook Conversion API
✓ Branch Assignment
✓ CRM Integration
✓ SMS Notification
✓ Email Notification
*/

/* ==========================================================
   END OF FILE
========================================================== */