'use strict';

const MobileBuy = {

    render() {

        UI.page({

            title: 'Buy Mobile',

            subtitle: 'Choose the type of mobile you want to purchase.',

            back: 'mobile',

            content: UI.actionList([

                {
                    title: 'New Mobile',
                    description: 'Browse our latest brand new smartphones.',
                    route: 'mobileBuyNew'
                },

                {
                    title: 'Pre-Owned Mobile',
                    description: 'Explore certified pre-owned smartphones.',
                    route: 'mobileBuyPreowned'
                }

            ])

        });

    }

};