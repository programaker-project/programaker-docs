# How to start with Plaza development

In this document are explained what is **Plaza project** and how you can develop a basic aplication.



# Plaza project have 3 principal components:

- **Backend** : The internal Plaza core.
- **Frontend** : The web user access to interact with Plaza core data.
- **Bridges** : Something similar to "widgets" who can connect Plaza core with external internet resources.

## The basic diagram is:
👤 User ↔️ 💻 **Frontend** ↔️ ⚙️ **Backend** ↔️ 📡 **Bridges** ↔️ 📜 External services
    
## Backend

It's the piece that makes everything work (the core ⚙️).

Runs the programs you build, remembers the important stuff and interconnects the bridges.

The backend consists in a something similiar to a  virtual machine, runs "low level code" and relies on bridges to connect with external services,
like Telegram©️.

## Bridges

**Bridges** are small programs that connect the Plaza backend to any service.

This small programs can be built by anyone ( like a Firefox©️ addons ), they are run from outside the Plaza platform.

This programs are basic and intermediaries between the external services API's ( Like Telegram©️, your favorite forecast platform, another external product... ) and the **Backend** **Plaza core ⚙️**.

Its principal function is to *"translate"* that *"📡 protocols"* to the internal **Plaza core ⚙️**. 

## Frontend

The **frontend** (https://projectplaza.space/ ) is the project interface you can see through the browser, this makes Plaza cross-platform by default.

It takes information from the Plaza **Backend** and shows it visually.

Then the user can, through the **frontend**, send orders to the backend to modify this information.

It takes programs from the **Plaza Backend** and shows them visually.

Then the user through the **frontend**, can create, modify or delete these programs in the fronted editor.

This makes it possible for anyone to develop new applications.

# For more information

**Plaza frontend** url: https://projectplaza.space/

**Original Plaza project** web: https://gitlab.com/plaza-project

Project created by @kenkeiras and colaborators: https://gitlab.com/groups/plaza-project/-/group_members
