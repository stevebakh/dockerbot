# Dockerised Botkit bootstrap
This repo houses a very basic bootstrap project to create a Slack bot/app using Botkit.

## Creating a Slack Bot using Custom Integration
This is the simplest and quickest way of adding a Bot to your Slack team. The first thing you will need to do is create a custom integration bot configuration, which you will then use to allow your code to connect to the Slack RTM (Real Time Messaging) API. 

### Configure a bot
First, visit the [Slack apps index](https://innovation-dwp.slack.com/apps).

Search for bots and select 'Bots - connect a bot to the slack Real Time Messaging API'

![screenshot1](docs/1.png)

Select 'Add configuration' and give your bot a name.

![screenshot2](docs/2.png)

You should now see the configuration screen for the bot. Take note of the API token and save the configuration.

![screenshot3](docs/3.png)

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

If you now return to your Slack team and open a private message with your bot, you should see that it appears online and will respond if you send it a 'ping' message.

![screenshot4](docs/4.png)

### Creating a deployable App to be used by multiple teams

Instructions coming...
