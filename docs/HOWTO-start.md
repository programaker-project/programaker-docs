# How to start with Plaza development

In this document are explained what is **Plaza project** and how you can develop a basic application.

## Index

 - [Backend](#Backend)
 - [Bridges](#Bridges) 
 - [Frontend](#Frontend)
 - [Start to develop your first Plaza program](#Start to develop your first Plaza program)

# Plaza project have 3 principal components:

- **Backend** : The internal Plaza core.
- **Frontend** : The web user access to interact with Plaza core data.
- **Bridges** : Something similar to "widgets" who can connect Plaza core with external internet resources.

## The basic diagram is:
👤 User ↔️ 💻 **Frontend** ↔️ ⚙️ **Backend** ↔️ 📡 **Bridges** ↔️ 📜 External services
    
### Backend

It's the piece that makes everything work (the core ⚙️).

Runs the programs you build, remembers the important stuff and interconnects the bridges.

The backend consists in a something similar to a  virtual machine, runs "low level code" and relies on bridges to connect with external services,
like Telegram©.

### Bridges

**Bridges** are small programs that connect the Plaza backend to any service.

This small programs can be built by anyone ( like a Firefox© addons ), they are run from outside the Plaza platform.

This programs are basic and intermediaries between the external services API's ( Like Telegram©, your favorite forecast platform, another external product... ) and the **Backend** **Plaza core ⚙️**.

Its principal function is to *"translate"* that *"📡 protocols"* to the internal **Plaza core ⚙️**. 

### Frontend

The **frontend** ([https://projectplaza.space](https://projectplaza.space) ) is the project interface you can see through the browser, this makes Plaza cross-platform by default.

It takes information from the Plaza **Backend** and shows it visually.

Then the user can, through the **frontend**, send orders to the backend to modify this information.

It takes programs from the **Plaza Backend** and shows them visually.

Then the user through the **frontend**, can create, modify or delete these programs in the fronted editor.

This makes it possible for anyone to develop new applications.

# Start to develop your first Plaza program.

## Access to Plaza Frontend.
First you need to create a account or login in:
[https://projectplaza.space](https://projectplaza.space)

When you are logged, you will see the dashboard section in the **Plaza Frontend**

## Access to programs edition secction.
Now in the section **Programs** press the button *"add one!"*, you go to access to the program web editor.

## Rename the program.
Click in *"Rename"* button, in the pop-up write the program name.
E.g.: *"The hello world program"*

Now you can build your program.
## Add the first code block.

First you application goes to need a code block of type *"hat block"* (*scratch terminology*), this type of blocks are the beggining of the scratch programs.

Press in "Show/hide" section to see the blocks list.

Click and drag the *"hat block"* with the text "When received any message. Set [i]" to the blank zone, it goes to be like your first code line.

Click in the [i] > *Rename variable* > write "start".

**(With this block the program is ready to respond to the telegram "/start" command.)*

## Add the second and last code block.

Add the second block *"Respond [hello]"*.

Double click in the string [hello] > write "Hello world!"

## Run your new program.
Now, press in the top menu the " **start** " button.

And thats all, your program are now active.

# Show the program execution.

In your Telegram client aplication.

Select the chat with "PlazaBot" and write "/start".

The PlazaBot goes to respond you, with a "Hello world!".

# Use this bot outside of its chat

Add the bot to another gropus like you add another contact.

This bot goes to respond all "/start" messages in every group when you add the bot.

Now it's time to create you own Plaza program :) 

# For more information

**Plaza frontend** url: [https://projectplaza.space](https://projectplaza.space)

**Original Plaza project** web: https://gitlab.com/plaza-project

Project created by **[@kenkeiras](https://gitlab.com/kenkeiras)** and collaborators: **[Plaza project group members](https://gitlab.com/groups/plaza-project/-/group_members)**
