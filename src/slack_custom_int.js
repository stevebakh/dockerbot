
const Botkit = require('botkit');

module.exports = {
    init: (config, callback) => {
        if (!process.env.TOKEN) {
            console.error('Missing required TOKEN environment variable!');
            process.exit(1);
        }

        const controller = Botkit.slackbot(config);

        controller.spawn({ token: process.env.TOKEN }).startRTM((error, bot, response) => {
            if (error) {
                console.error(error);
                process.exit(1);
            }

            if (callback) callback(bot);
        });

        return controller;
    }
};
