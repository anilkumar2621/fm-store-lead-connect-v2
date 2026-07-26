'use strict';

const Mobile = {

    render() {

        UI.render(`
            <section class="container">
                <h1>📱 Mobile Module</h1>
                <p>Coming in Module 3...</p>
                <button class="btn btn-primary" onclick="Router.go('home')">
                    Back
                </button>
            </section>
        `);

    }

};