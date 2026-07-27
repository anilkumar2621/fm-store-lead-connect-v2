'use strict';

const Mobile = {

    render() {

        UI.render(`

<section class="container fade-in">

    <button
        class="btn btn-secondary"
        onclick="Router.go('home')"
    >
        ← Back
    </button>

    <div class="page-header">

        <h1>📱 Mobile Enquiry</h1>

        <p>

            What would you like to do?

        </p>

    </div>

    <div class="card-grid">

        <button
            class="card"
            onclick="alert('Buy Mobile - Coming Next')"
        >

            <div class="card-icon">

                🛒

            </div>

            <h3>

                Buy Mobile

            </h3>

            <p>

                Purchase New or Pre-Owned Mobiles

            </p>

        </button>

        <button
            class="card"
            onclick="alert('Sell Mobile - Coming Next')"
        >

            <div class="card-icon">

                💰

            </div>

            <h3>

                Sell Mobile

            </h3>

            <p>

                Sell Your Existing Mobile

            </p>

        </button>

        <button
            class="card"
            onclick="alert('Exchange Mobile - Coming Next')"
        >

            <div class="card-icon">

                🔄

            </div>

            <h3>

                Exchange Mobile

            </h3>

            <p>

                Trade Your Mobile

            </p>

        </button>

    </div>

</section>

        `);

    }

};