'use strict';

const MobileBuyNew = {

    render() {

        UI.page({

            title: '🆕 New Mobile',

            subtitle: 'Tell us what new mobile you are looking for.',

            back: 'mobileBuy',

            content: `

<form class="form">

    <div class="form-group">

        <label>

            Brand *

        </label>

        <select>

            <option value="">

                Select Brand

            </option>

            ${CONFIG.MOBILE.BRANDS.map(brand => `
                <option value="${brand}">
                    ${brand}
                </option>
            `).join('')}

        </select>

    </div>

    <div class="form-group">

        <label>

            Model (Optional)

        </label>

        <input
            type="text"
            placeholder="Example: Galaxy S25"
        >

    </div>

    <div class="form-group">

        <label>

            Budget *

        </label>

        <select>

            <option value="">

                Select Budget

            </option>

            ${CONFIG.MOBILE.BUDGETS.map(budget => `
                <option value="${budget}">
                    ${budget}
                </option>
            `).join('')}

        </select>

    </div>

    <button
        type="button"
        class="btn btn-primary"
        onclick="alert('Customer Details - Next Module')"
    >

        Next →

    </button>

</form>

`

        });

    }

};