'use strict';

const MobileBuy = {

    render() {

        UI.render(`

<section class="container fade-in">

    <button
        class="btn btn-secondary"
        onclick="Router.go('mobile')"
    >
        ← Back
    </button>

    <div class="page-header">

        <h1>🛒 Buy Mobile</h1>

        <p>

            Choose the type of mobile you want to purchase

        </p>

    </div>

    <div class="card-grid">

        <button
            class="card"
            onclick="Router.go('mobileBuyNew')"
        >

            <div class="card-icon">

                🆕

            </div>

            <h3>

                New Mobile

            </h3>

            <p>

                Brand New Smartphones

            </p>

        </button>

        <button
            class="card"
            onclick="Router.go('mobileBuyPreowned')"
        >

            <div class="card-icon">

                ♻️

            </div>

            <h3>

                Pre-Owned Mobile

            </h3>

            <p>

                Certified Used Smartphones

            </p>

        </button>

    </div>

</section>

        `);

    }

};