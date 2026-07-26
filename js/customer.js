'use strict';

const Customer = {

    render() {

        UI.render(`
            <section class="container">
                <h1>Customer Module</h1>
                <p>Coming in Module 7...</p>
                <button class="btn btn-primary" onclick="Router.go('home')">
                    Back
                </button>
            </section>
        `);

    }

};