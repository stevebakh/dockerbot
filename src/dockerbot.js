
const SLACK_APP = 'slack_app';
const SLACK_CI = 'slack_ci';
const FACEBOOK_APP = 'facebook_app';
const platforms = [SLACK_APP, SLACK_CI, FACEBOOK_APP];

const config = { debug: true, json_file_store: 'json_db' };

const controller = (() => {
    switch (process.env.BOT_PLATFORM) {
        case SLACK_CI:
            return require('./slack_custom_int').init(config, initCallback);
        case SLACK_APP:
            // See a list of all scopes: https://api.slack.com/docs/oauth-scopes
            config.scopes = ['bot', 'identify', 'chat:write:bot', 'channels:read', 'users:read'];
            return require('./slack_app').init(config, initCallback);
        case FACEBOOK_APP:
            return require('./facebook_app').init(config, initCallback);
        default:
            console.error(`The BOT_PLATFORM environment variable must be set to one of: ${platforms.join(', ')}!`);
            process.exit(1);
    }
})();

/**
 * Perform some logic required upon initialising the bot, for
 * example, loading data from the database, or sending a message.
 *
 * This function receives the bot object as a parameter.
 */
function initCallback(bot) {
    // do stuff here
}


// ================= Bot logic goes below =================


// Respond to messages directed at the bot containing 'ping'
controller.hears(
    'ping', 
    ['direct_message', 'mention', 'direct_mention'], 
    (bot, message) => bot.reply(message, 'pong'));


// Facebook bots trigger on message_received
controller.hears('hello', ['message_received'], (bot, message) => {
  bot.reply(message, 'Aloha!');
});


// Listen to all messages received on a channel in which the bot resides
controller.on('ambient', (bot, message) => {
    // do stuff here
    console.log(message);
});

