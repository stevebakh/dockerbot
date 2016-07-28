
const config = { json_file_store: 'json_db' };

const controller = (() => {
    if (process.env.TOKEN) {
        // run the bot as a Slack custom integration
        return require('./custom_integration').init(
            process.env.TOKEN, 
            config, 
            initCallback);
    } else if (process.env.PORT && process.env.CLIENT_ID && process.env.CLIENT_SECRET) {
        // run the bot as a Slack application
        return require('./app').init(
            process.env.PORT, 
            process.env.CLIENT_ID, 
            process.env.CLIENT_SECRET, 
            config, 
            initCallback);
    } else {
        console.error('Missing environment variables - see documentation!');
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


// Listen to all messages received on a channel in which the bot resides
controller.on('ambient', (bot, message) => {
    // do stuff here
    console.log(message);
});
