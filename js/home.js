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

                Premium Pre-Owned Mobiles,
                Men's Fashion &
                Professional Mobile Repairs

            </p>

        </div>

    </header>

    <!-- ==========================================
         Store Locations
    =========================================== -->

    <section class="home-section">

        <h2 class="section-title">

            📍 Our Stores

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
                    onclick="window.open('https://maps.google.com','_blank')"
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
                    onclick="window.open('https://maps.google.com','_blank')"
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

                📞

                <span>

                    Call Now

                </span>

            </button>

            <button
                class="action-btn whatsapp"
                onclick="window.open('https://wa.me/918463949455','_blank')"
            >

                💬

                <span>

                    WhatsApp

                </span>

            </button>

        </div>

    </section>
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

                    📱

                </div>

                <h3>

                    Mobile Enquiry

                </h3>

                <p>

                    Buy & Sell Smartphones

                </p>

            </button>

            <button
                class="card"
                onclick="Router.go('menswear')"
            >

                <div class="card-icon">

                    👕

                </div>

                <h3>

                    Men's Wear

                </h3>

                <p>

                    Premium Fashion Collection

                </p>

            </button>

            <button
                class="card"
                onclick="Router.go('repair')"
            >

                <div class="card-icon">

                    🔧

                </div>

                <h3>

                    Mobile Repair

                </h3>

                <p>

                    Professional Repair Services

                </p>

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

            Every Day • 9:00 AM – 9:00 PM

        </strong>

        <p class="version">

            FM STORE-STYLES Lead Connect V3

        </p>

    </footer>

</section>

        `);

    }

};