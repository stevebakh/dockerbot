
const Botkit = require('botkit');

module.exports = {
    init: (token, config, callback) => {
        const controller = Botkit.slackbot(config);

        controller.spawn({ token: token }).startRTM((error, bot, response) => {
            if (error) {
                console.error(error);
                process.exit(1);
            }

            if (callback) callback(bot);
        });

        return controller;
    }
};
