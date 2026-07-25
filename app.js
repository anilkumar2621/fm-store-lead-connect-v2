/*
==========================================================
FM STORE-STYLES Lead Connect V2
Application
==========================================================
*/

"use strict";

/* ======================================================
   APP STATE
====================================================== */

const STATE = {

    submitting: false,

    online: navigator.onLine

};

/* ======================================================
   DOM
====================================================== */

const DOM = {

    splash: document.getElementById("splashScreen"),

    app: document.getElementById("mainApp"),

    form: document.getElementById("leadForm"),

    category: document.getElementById("category"),

    mobileSection: document.getElementById("mobileSection"),

    clothingSection: document.getElementById("clothingSection"),

    repairSection: document.getElementById("repairSection"),

    brand: document.getElementById("brand"),

    otherBrandContainer:
        document.getElementById("otherBrandContainer"),

    otherBrand:
        document.getElementById("otherBrand"),

    submit:
        document.getElementById("submitBtn"),

    loading:
        document.getElementById("loadingScreen"),

    success:
        document.getElementById("successScreen"),

    leadNumber:
        document.getElementById("leadNumber"),

    newEnquiry:
        document.getElementById("newEnquiryBtn"),

    toast:
        document.getElementById("toast"),

    toastMessage:
        document.getElementById("toastMessage"),

    theme:
        document.getElementById("themeToggle"),

    offline:
        document.getElementById("offlineBanner"),

    year:
        document.getElementById("currentYear")

};

/* ======================================================
   INIT
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    init
);

function init(){

    DOM.year.textContent =
        new Date().getFullYear();

    restoreTheme();

    restoreCategory();

    updateNetwork();

    registerEvents();

    startSplash();

}

/* ======================================================
   SPLASH
====================================================== */

function startSplash(){

    setTimeout(()=>{

        DOM.splash.style.opacity="0";

        setTimeout(()=>{

            DOM.splash.remove();

            DOM.app.classList.remove("hidden");

        },600);

    },1400);

}

/* ======================================================
   EVENTS
====================================================== */

function registerEvents(){

    DOM.category.addEventListener(

        "change",

        updateCategory

    );

    DOM.brand.addEventListener(

        "change",

        updateBrand

    );

    DOM.form.addEventListener(

        "submit",

        submitLead

    );

    DOM.newEnquiry.addEventListener(

        "click",

        resetForm

    );

    DOM.theme.addEventListener(

        "click",

        toggleTheme

    );

    window.addEventListener(

        "online",

        updateNetwork

    );

    window.addEventListener(

        "offline",

        updateNetwork

    );

}
/* ======================================================
   THEME
====================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    DOM.theme.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem(
        CONFIG.STORAGE.THEME,
        isDark ? "dark" : "light"
    );

}

function restoreTheme() {

    const saved = localStorage.getItem(
        CONFIG.STORAGE.THEME
    );

    if (saved === "dark") {

        document.body.classList.add("dark");

        DOM.theme.textContent = "☀️";

    } else {

        DOM.theme.textContent = "🌙";

    }

}

/* ======================================================
   NETWORK
====================================================== */

function updateNetwork() {

    STATE.online = navigator.onLine;

    if (STATE.online) {

        DOM.offline.classList.add("hidden");

    } else {

        DOM.offline.classList.remove("hidden");

    }

}

/* ======================================================
   CATEGORY
====================================================== */

function updateCategory() {

    DOM.mobileSection.classList.add("hidden");
    DOM.clothingSection.classList.add("hidden");
    DOM.repairSection.classList.add("hidden");

    localStorage.setItem(
        CONFIG.STORAGE.LAST_CATEGORY,
        DOM.category.value
    );

    switch (DOM.category.value) {

        case "Mobiles":

            DOM.mobileSection.classList.remove("hidden");

            break;

        case "Clothing":

            DOM.clothingSection.classList.remove("hidden");

            break;

        case "Repair":

            DOM.repairSection.classList.remove("hidden");

            break;

    }

}

/* ======================================================
   RESTORE CATEGORY
====================================================== */

function restoreCategory() {

    const saved = localStorage.getItem(
        CONFIG.STORAGE.LAST_CATEGORY
    );

    if (!saved) return;

    DOM.category.value = saved;

    updateCategory();

}

/* ======================================================
   BRAND
====================================================== */

function updateBrand() {

    if (DOM.brand.value === "Other") {

        DOM.otherBrandContainer.classList.remove(
            "hidden"
        );

        DOM.otherBrand.required = true;

        DOM.otherBrand.focus();

    } else {

        DOM.otherBrandContainer.classList.add(
            "hidden"
        );

        DOM.otherBrand.required = false;

        DOM.otherBrand.value = "";

    }

}

/* ======================================================
   TOAST
====================================================== */

function showToast(message) {

    DOM.toastMessage.textContent = message;

    DOM.toast.classList.remove("hidden");

    setTimeout(() => {

        DOM.toast.classList.add("hidden");

    }, 2500);

}
/* ======================================================
   VALIDATION
====================================================== */

function validateForm() {

    const customerName = document
        .getElementById("customerName")
        .value
        .trim();

    if (!customerName) {

        showToast("Please enter Customer Name.");

        return false;

    }

    const phone = document
        .getElementById("phone")
        .value
        .trim();

    if (!/^[0-9]{10}$/.test(phone)) {

        showToast("Enter a valid 10 digit phone number.");

        return false;

    }

    const whatsapp = document
        .getElementById("whatsapp")
        .value
        .trim();

    if (
        whatsapp &&
        !/^[0-9]{10}$/.test(whatsapp)
    ) {

        showToast(
            "Enter a valid WhatsApp Number."
        );

        return false;

    }

    const email = document
        .getElementById("email")
        .value
        .trim();

    if (email) {

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

            showToast("Invalid Email Address.");

            return false;

        }

    }

    switch (DOM.category.value) {

        case "Mobiles":

            if (!DOM.brand.value) {

                showToast("Please select Brand.");

                return false;

            }

            if (
                DOM.brand.value === "Other" &&
                !DOM.otherBrand.value.trim()
            ) {

                showToast("Enter Brand Name.");

                return false;

            }

            if (
                !document
                    .getElementById("model")
                    .value
                    .trim()
            ) {

                showToast("Enter Model.");

                return false;

            }

            break;

        case "Repair":

            if (
                !document
                    .getElementById("repairBrand")
                    .value
                    .trim()
            ) {

                showToast("Enter Device Brand.");

                return false;

            }

            if (
                !document
                    .getElementById("repairIssue")
                    .value
                    .trim()
            ) {

                showToast("Describe the issue.");

                return false;

            }

            break;

    }

    return true;

}

/* ======================================================
   DEVICE
====================================================== */

function getDevice() {

    const ua = navigator.userAgent;

    if (/Android/i.test(ua)) return "Android";

    if (/iPhone|iPad|iPod/i.test(ua)) return "iPhone";

    if (/Windows/i.test(ua)) return "Windows";

    if (/Mac/i.test(ua)) return "Mac";

    return "Unknown";

}

/* ======================================================
   BROWSER
====================================================== */

function getBrowser() {

    const ua = navigator.userAgent;

    if (ua.includes("Edg"))
        return "Edge";

    if (ua.includes("Chrome"))
        return "Chrome";

    if (ua.includes("Firefox"))
        return "Firefox";

    if (
        ua.includes("Safari") &&
        !ua.includes("Chrome")
    )
        return "Safari";

    return "Unknown";

}

/* ======================================================
   COLLECT DATA
====================================================== */

function collectData() {

    const selectedBrand =
        DOM.brand.value === "Other"
            ? DOM.otherBrand.value.trim()
            : DOM.brand.value;

    return {

        category:
            DOM.category.value,

        customerName:
            document
                .getElementById("customerName")
                .value
                .trim(),

        phone:
            document
                .getElementById("phone")
                .value
                .trim(),

        whatsapp:
            document
                .getElementById("whatsapp")
                .value
                .trim(),

        email:
            document
                .getElementById("email")
                .value
                .trim(),

        brand:
            selectedBrand,

        model:
            document
                .getElementById("model")
                ?.value
                .trim() || "",

        ram:
            document
                .getElementById("ram")
                ?.value || "",

        storage:
            document
                .getElementById("storage")
                ?.value || "",

        color:

            document
                .getElementById("mobileColor")
                ?.value ||

            document
                .getElementById("clothColor")
                ?.value ||

            "",

        size:
            document
                .getElementById("size")
                ?.value || "",

        gender:
            document
                .getElementById("gender")
                ?.value || "",

        repairBrand:
            document
                .getElementById("repairBrand")
                ?.value || "",

        repairModel:
            document
                .getElementById("repairModel")
                ?.value || "",

        issue:
            document
                .getElementById("repairIssue")
                ?.value || "",

        notes:
            document
                .getElementById("notes")
                .value
                .trim(),

        device:
            getDevice(),

        browser:
            getBrowser(),

        source:
            CONFIG.SOURCE.NAME

    };

}
/* ======================================================
   LOADING
====================================================== */

function showLoading() {

    DOM.loading.classList.remove("hidden");

    DOM.submit.disabled = true;

}

function hideLoading() {

    DOM.loading.classList.add("hidden");

    DOM.submit.disabled = false;

}

/* ======================================================
   API REQUEST
====================================================== */

async function postLead(payload) {

    let lastError = null;

    for (let attempt = 0; attempt <= CONFIG.RETRY_COUNT; attempt++) {

        try {

            const controller = new AbortController();

            const timeout = setTimeout(() => {

                controller.abort();

            }, CONFIG.REQUEST_TIMEOUT);

            const response = await fetch(

                CONFIG.API_URL,

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(payload),

                    signal: controller.signal

                }

            );

            clearTimeout(timeout);

            const result = await response.json();

            if (!result.success) {

                throw new Error(

                    result.message ||

                    "Unknown Server Error."

                );

            }

            return result;

        } catch (error) {

            lastError = error;

            if (attempt < CONFIG.RETRY_COUNT) {

                await new Promise(resolve =>

                    setTimeout(

                        resolve,

                        CONFIG.RETRY_DELAY

                    )

                );

            }

        }

    }

    throw lastError;

}

/* ======================================================
   SUBMIT
====================================================== */

async function submitLead(event) {

    event.preventDefault();

    if (STATE.submitting)

        return;

    if (!STATE.online) {

        showToast(

            "No Internet Connection."

        );

        return;

    }

    if (!validateForm())

        return;

    STATE.submitting = true;

    showLoading();

    try {

        const payload = collectData();

        const response =

            await postLead(payload);

        hideLoading();

        DOM.leadNumber.textContent =

            response.leadId;

        DOM.success.classList.remove(

            "hidden"

        );

    }

    catch (error) {

        console.error(error);

        hideLoading();

        showToast(

            error.message ||

            "Unable to submit."

        );

    }

    finally {

        STATE.submitting = false;

    }

}
/* ======================================================
   SUCCESS
====================================================== */

function showSuccess(leadId) {

    DOM.leadNumber.textContent = leadId;

    DOM.success.classList.remove("hidden");

}

function hideSuccess() {

    DOM.success.classList.add("hidden");

}

/* ======================================================
   RESET
====================================================== */

function resetForm() {

    hideSuccess();

    DOM.form.reset();

    DOM.mobileSection.classList.add("hidden");

    DOM.clothingSection.classList.add("hidden");

    DOM.repairSection.classList.add("hidden");

    DOM.otherBrandContainer.classList.add("hidden");

    DOM.otherBrand.required = false;

    DOM.category.focus();

}

/* ======================================================
   WINDOW EVENTS
====================================================== */

window.addEventListener(

    "beforeunload",

    function(){

        if(STATE.submitting){

            return "Lead submission is in progress.";

        }

    }

);

/* ======================================================
   APP VERSION
====================================================== */

console.log(

    CONFIG.APP_NAME,

    CONFIG.APP_VERSION,

    "Loaded Successfully"

);