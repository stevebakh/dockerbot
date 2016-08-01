# Dockerised Botkit bootstrap
This repo houses a very basic bootstrap project to create a Slack bot/app using Botkit.

To get you started, this bot implements a couple of basic interactions with Slack, which you can use to get started writing your own functionality. If you message the bot directly (using a private message, or by mentioning the bot's name in a channel where it resides) with the word _ping_, it will respond with _pong_. Additionally, for any channel the bot is invited to, it will listen to all messages in that channel, logging them out to the console.

For more information on how to integrate your bot with Slack, see the [Botkit documentation](https://github.com/howdyai/botkit/blob/master/readme-slack.md).

## Creating a Slack bot using a 'Custom Integration'
This is the simplest and quickest way of adding a Bot to your Slack team. The first thing you will need to do is create a custom integration bot configuration, which you will then use to allow your code to connect to the Slack RTM (Real Time Messaging) API. 

### Configure a bot
First, visit the [Slack apps index](https://innovation-dwp.slack.com/apps).

Search for bots and select 'Bots - connect a bot to the slack Real Time Messaging API'

<p align="center"><img src="docs/1.png" width="400px" align="center"></p>

Select 'Add configuration' and give your bot a name.

<p align="center"><img src="docs/2.png" width="800px"></p>

You should now see the configuration screen for the bot. Take note of the API token and save the configuration.

<p align="center"><img src="docs/3.png" width="800px"></p>

### Checkout the code
Now clone this repository, and edit the `.env` file to add the token. You can edit the code later - let's just get the bot connected first to demonstrate it working. Assuming you're not running on a Linux machine, you will want to make sure docker-machine and docker are installed, and that you have a running virtual machine. A Docker Compose configuration file has also been provided to make it easier to create the bot. If running on a Mac, you can install the necessary packages with homebrew, and setup a VM:

```bash
brew install docker-machine docker docker-compose
docker-machine create --driver virtualbox bot
eval $(docker-machine env bot)
```

Next, just run the bot using Docker Compose, which should build and run the images for you.

```bash
docker-compose up
```

### Speak to your bot
If you now return to your Slack team and open a private message with your bot, you should see that it appears online and will respond if you send it a 'ping' message.

<p align="center"><img src="docs/4.png" width="527px"></p>

## Creating a deployable app to be used by multiple teams
If you want to create a bot that can be used by multiple teams, it will need to be packaged up as a Slack app. The setup process is a little more involved, but the code will not need to be modified. 

### Create an app
The first thing you will need to do, is to create an app by visiting the ['Your Apps' page](https://api.slack.com/apps) on the Slack API site. Once there, click on the 'Create New App' button and complete all relevant details (name, team, etc). Note, do not set the Redirect URL yet; this template project uses the localtunnel service to create a temporary domain name pointing to the container running on your development machine, and you will obtain the domain when running the app.

<p align="center"><img src="docs/app_1.png" width="600px" align="center"></p>

Once saved, navigate to the 'App Credentials' page using the navigation menu on the left. Take note of the Client ID and Client Secret.

<p align="center"><img src="docs/app_2.png" width="600px" align="center"></p>

Next, navigate to the 'Bot Users' page using the same navigation menu, and add a bot user to your app.

<p align="center"><img src="docs/app_3.png" width="600px" align="center"></p>

### Checkout the code
Now you can clone this repository, editing the `.env` file to set the CLIENT_ID and CLIENT_SECRET environment variables. Assuming you're not running on a Linux machine, you will want to make sure docker-machine and docker are installed, and that you have a running virtual machine. A Docker Compose configuration file has also been provided to make it easier to create the bot. If running on a Mac, you can install the necessary packages with homebrew, and setup a VM:

```bash
brew install docker-machine docker docker-compose
docker-machine create --driver virtualbox bot
eval $(docker-machine env bot)
```

You should now be able to run the bot using Docker Compose, which will build and run the images for you.

```bash
docker-compose up
```

Note, the output from running `docker-compose up` will contain a URL that can be used to access your app. The use of the localtunnel service here should only be used in this demonstration app. In a production environment, you will want to configure your own domains!

<p align="center"><img src="docs/app_4.png" width="600px" align="center"></p>

Taking this URL, navigate back to the 'App Credentials' page and append `/oauth` to it, setting it as the Redirect URL.

<p align="center"><img src="docs/app_5.png" width="600px" align="center"></p>

Finally, in your browser, access the URL, with /login appended. This will load your app, which will then redirect you to Slack's auth screen. Select the relevant team to join and then authorise the app to connect.

### Speak to your app/bot
If you now return to your Slack team and open a private message with the bot you added to the app in the previous steps, you should see that it appears online and will respond if you send it a 'ping' message. You can also invite the bot into a channel and interact with it. 

<p align="center"><img src="docs/app_6.png" width="300px" align="center"></p>


