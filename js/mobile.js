'use strict';

const Mobile = {

    render() {

        UI.page({

            title: 'Mobile Enquiry',

            subtitle: 'Choose what you would like to do.',

            back: 'home',

            content: `

<div class="fm-action-list">

    <button
        class="fm-action-card"
        onclick="Router.go('mobileBuy')"
    >

        <div class="fm-action-left">

            <h3 class="fm-action-title">

                Buy Mobile

            </h3>

            <p class="fm-action-description">

                Purchase new or pre-owned smartphones.

            </p>

        </div>

        <div class="fm-action-arrow">

            →

        </div>

    </button>

    <button
        class="fm-action-card"
        onclick="alert('Sell Mobile - Coming Soon')"
    >

        <div class="fm-action-left">

            <h3 class="fm-action-title">

                Sell Mobile

            </h3>

            <p class="fm-action-description">

                Sell your existing smartphone.

            </p>

        </div>

        <div class="fm-action-arrow">

            →

        </div>

    </button>

    <button
        class="fm-action-card"
        onclick="alert('Exchange Mobile - Coming Soon')"
    >

        <div class="fm-action-left">

            <h3 class="fm-action-title">

                Exchange Mobile

            </h3>

            <p class="fm-action-description">

                Exchange your current phone for another.

            </p>

        </div>

        <div class="fm-action-arrow">

            →

        </div>

    </button>

</div>

            `

        });

    }

};