'use strict';

const Buy = {

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
            onclick="alert('New Mobile Form - Coming Next')"
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
            onclick="alert('Pre-Owned Mobile Form - Coming Next')"
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