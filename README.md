# Dockerised Botkit bootstrap
This repo houses a very basic bootstrap project to create a Slack bot/app using Botkit.

To get you started, this bot implements a couple of basic interactions with Slack, which you can use to get started writing your own functionality. If you message the bot directly (using a private message, or by mentioning the bot's name in a channel where it resides) with the word _ping_, it will respond with _pong_. Additionally, for any channel the bot is invited to, it will listen to all messages in that channel, logging them out to the console.

For more information on how to integrate your bot with Slack, see the [Botkit documentation](https://github.com/howdyai/botkit/blob/master/readme-slack.md).

## Creating a Slack Bot using Custom Integration
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
Now clone this repository, and edit the `env.list` file to add the token. You can edit the code later - let's just get the bot connected first to demonstrate it working. Assuming you're not running on a Linux machine, you will want to make sure docker-machine and docker are installed, and that you have a running virtual machine. If running on a Mac, you can install the necessary packages with homebrew, and setup a VM:

```bash
brew install docker-machine docker
docker-machine create --driver virtualbox bot
eval $(docker-machine env bot)
```

Next, we can build the Docker image and then run it!

```bash
docker build -t dockerbot .
docker run -it --rm --env-file env.list dockerbot
```

### Speak to your bot
If you now return to your Slack team and open a private message with your bot, you should see that it appears online and will respond if you send it a 'ping' message.

<p align="center"><img src="docs/4.png" width="527px"></p>

## Creating a deployable App to be used by multiple teams

Instructions coming...
