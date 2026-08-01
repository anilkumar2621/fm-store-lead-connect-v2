/* ==========================================================
   FM STORE-STYLES
   Home Screen
========================================================== */

'use strict';

const Home = {

    render() {

        UI.render(`

<section class="home-screen fade-in">

    <!-- ==========================================
         Hero
    =========================================== -->

    <header class="hero">

        <div class="hero-logo-wrapper">

            <img
                class="hero-logo"
                src="assets/icons/icon-512.png"
                alt="FM STORE-STYLES"
            >

        </div>

        <div class="hero-content">

            <span class="hero-badge">

                Welcome

            </span>

            <h1>

                FM STORE-STYLES

            </h1>

            <p>

                Premium Pre-Owned Mobiles • Men's Fashion • Mobile Repairs

            </p>

        </div>

    </header>

    <!-- ==========================================
         Services
    =========================================== -->

    <section class="home-section">

        <h2 class="section-title">

            Our Services

        </h2>

        <div class="card-grid">

            <button
                class="card"
                onclick="Router.go('mobile')"
            >

                <div class="card-icon">

                    <img
                        src="assets/icons/mobile.png"
                        alt="Mobile Enquiry"
                    >

                </div>

                <div class="card-content">

                    <h3>

                        Mobile Enquiry

                    </h3>

                    <p>

                        Buy & Sell Smartphones

                    </p>

                </div>

            </button>

            <button
                class="card"
                onclick="Router.go('menswear')"
            >

                <div class="card-icon">

                    <img
                        src="assets/icons/menswear.png"
                        alt="Men's Wear"
                    >

                </div>

                <div class="card-content">

                    <h3>

                        Men's Wear

                    </h3>

                    <p>

                        Premium Fashion Collection

                    </p>

                </div>

            </button>

            <button
                class="card"
                onclick="Router.go('repair')"
            >

                <div class="card-icon">

                    <img
                        src="assets/icons/repair.png"
                        alt="Mobile Repair"
                    >

                </div>

                <div class="card-content">

                    <h3>

                        Mobile Repair

                    </h3>

                    <p>

                        Professional Repair & Service

                    </p>

                </div>

            </button>

        </div>

    </section>

    <!-- ==========================================
         Store Locations
    =========================================== -->

    <section class="home-section">

        <h2 class="section-title">

            <img
                src="assets/icons/location.png"
                width="22"
                alt="Location"
            >

            Our Stores

        </h2>

        <div class="location-grid">

            <article class="location-card">

                <h3>

                    FM STORE-STYLES

                </h3>

                <p>

                    Eturnagaram

                </p>

                <button
                    class="btn btn-secondary"
                    onclick="window.open('https://maps.app.goo.gl/G6LuMMycrevppmt76','_blank')"
                >

                    Open in Maps

                </button>

            </article>

            <article class="location-card">

                <h3>

                    Fayaz Mobiles

                </h3>

                <p>

                    Eturnagaram

                </p>

                <button
                    class="btn btn-secondary"
                    onclick="window.open('https://maps.app.goo.gl/Z4W6Qjin9FoJA6jNA','_blank')"
                >

                    Open in Maps

                </button>

            </article>

        </div>

    </section>

    <!-- ==========================================
         Quick Actions
    =========================================== -->

    <section class="home-section">

        <h2 class="section-title">

            Quick Actions

        </h2>

        <div class="action-grid">

            <button
                class="action-btn call"
                onclick="window.location.href='tel:+918463949455'"
            >

                <img
                    src="assets/icons/call.png"
                    width="28"
                    alt="Call"
                >

                <span>

                    Call Now

                </span>

            </button>

            <button
                class="action-btn whatsapp"
                onclick="window.open('https://wa.me/918463949455','_blank')"
            >

                <img
                    src="assets/icons/whatsapp.png"
                    width="28"
                    alt="WhatsApp"
                >

                <span>

                    WhatsApp

                </span>

            </button>

        </div>

    </section>

    <!-- ==========================================
         Footer
    =========================================== -->

    <footer class="home-footer">

        <p>

            Business Hours

        </p>

        <strong>

            Every Day • 10:00 AM – 10:00 PM

        </strong>

        <p class="version">

            FM STORE-STYLES Lead Connect V3

        </p>

    </footer>

</section>

        `);

    }

};