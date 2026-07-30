'use strict';

const Mobile = {

    render() {

        UI.page({

            title: 'Mobile Enquiry',

            subtitle: 'Choose what you would like to do.',

            back: 'home',

            content: `

<div class="fm-action-list">

    ${UI.actionCard({

        title: 'Buy Mobile',

        description: 'Purchase new or pre-owned smartphones.',

        route: 'mobileBuy'

    })}

    ${UI.actionCard({

        title: 'Sell Mobile',

        description: 'Sell your smartphone for the best value.',

        route: 'mobileSell'

    })}

    ${UI.actionCard({

        title: 'Exchange Mobile',

        description: 'Upgrade by exchanging your current phone.',

        route: 'mobileExchange'

    })}

</div>

            `

        });

    }

};