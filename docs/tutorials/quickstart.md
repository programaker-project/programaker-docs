# Quickstart

In this document we will explain what is **Plaza** and how can you use it to develop a basic Telegram bot.

# Plaza's main components

- **Backend**: The core of Plaza.
- **Frontend**: The web interface to interact with Plaza.
- **Bridges**: External adapters which can connect Plaza with internet resources.

In a simple diagram, they are connected like this:

👤 User ↔️ 💻 Frontend ↔️ ⚙️ Backend ↔️ 📡 Bridges ↔️ 📜 External services

### Frontend

The Frontend (you can see it at [ProjectPlaza.space](https://projectplaza.space)) is the web you can see through the browser.

The Frontend takes programs and other information from the Backend and shows it on a website. With this, the user can create, modify or delete these programs on the browser.


### Backend

The Backend is the component that makes everything work, the core ⚙️. It runs the programs you build, remembers the important stuff and interconnects the bridges.


### Bridges

Bridges are small programs that connect the Backend to any service. These can be built by anyone (like a plugin) and are run from outside the Plaza servers.

These programs are simple intermediaries between the external services APIs (like Telegram, your favorite forecast service...) and the Backend. Its principal function is to translate the external protocols to Plaza's one and report to the Backend.


# Develop your first Plaza program

## Access Plaza

First, you need to create a account or login in
[https://projectplaza.space](https://projectplaza.space). This is the [Frontend](#frontend).

<!-- TODO: Add how to register telegram -->

## Access to programs edition section

Now, in the **Programs** section, press the `Add one!` button. This will create a new program and take you to the program's web editor.


## Rename the program.

Click the `Rename` button, in the pop-up write the program name
(e.g., "The hello world program") and click `Submit`.

Now, let's build your program.


## Add the first code block.

The first thing your application will need is a *hat block* ([scratch terminology](https://en.scratch-wiki.info/wiki/Hat_Block)), this type of blocks start the scratch programs.

To add one press the `Show/Hide` button on the left side of the screen to see the block list.

Click and drag the *hat block* with the text `When received [/start]` to the blank zone, it will be your first code block.

*With this block the program is ready to respond to the telegram `/start` command.*


## Add the second and last code block.

Add a second block, `Respond [Hello]`, like the one before.

Click in the `Hello` text and write `Hello world!`.


## Run your new program.

Now press in the top menu the `Start` button. And that's all! your program is now active.


## Test the program.

In your Telegram client select the chat with [PlazaBot](https://t.me/PlazaProjectBot) and write `/start`. PlazaBot will answer you with a "Hello world!".


## Use the bot on groups

You can add the bot to another groups like you add another contact, the bot will answer all **your** `/start` messages in every group (as long as its present).

Now it's time for you to create your own Plaza program :)
