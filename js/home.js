/* ==========================================================
   FM STORE-STYLES
   Home Screen
========================================================== */

'use strict';

const Home = {

    render() {

        UI.render(`

<section class="home-screen fade-in">

    <div class="hero">

        <img
            class="hero-logo"
            src="assets/icons/icon-512.png"
            alt="FM STORE-STYLES"
        >

        <h1 class="hero-title">

            FM STORE-STYLES

        </h1>

        <p class="hero-subtitle">

            Premium Mobiles • Fashion • Repairs

        </p>

    </div>

    <div class="card-grid">

        <button
            class="card"
            onclick="Router.go('mobile')"
        >

            <h2>📱 Mobile Enquiry</h2>

            <p>
                Buy & Sell Smartphones
            </p>

        </button>

        <button
            class="card"
            onclick="Router.go('menswear')"
        >

            <h2>👕 Men's Wear</h2>

            <p>
                Fashion Collection
            </p>

        </button>

        <button
            class="card"
            onclick="Router.go('repair')"
        >

            <h2>🔧 Mobile Repair</h2>

            <p>
                Repair & Service
            </p>

        </button>

    </div>

</section>

        `);

    }

};