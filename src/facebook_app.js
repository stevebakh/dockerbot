
const Botkit = require('botkit');

function handleError(error) {
    if (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = {
    init: (config, callback) => {
        const port = process.env.PORT || 8080;
        const pageToken = process.env.PAGE_TOKEN;
        const verifyToken = process.env.VERIFY_TOKEN;

        if (!pageToken || !verifyToken) {
            handleError('Both the PAGE_TOKEN and VERIFY_TOKEN environment variables must be set!');
        }

        config.access_token = pageToken;
        config.verify_token = verifyToken;

        const controller = Botkit.facebookbot(config);
        const bot = controller.spawn({});

        controller.setupWebserver(port, (error, webserver) => {
            handleError(error);
            controller.createWebhookEndpoints(webserver, bot, () => console.log('connected!'));
        });

        return controller;
    }
};
