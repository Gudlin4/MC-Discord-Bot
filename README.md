# MC-Discord-Bot

Jumpstart your Minecraft server community with this easy-to-use Discord.js bot template.
Display your server's IP and offer easy access to staff and media applications.

Do you like my project? Click on the star button (⭐️) right above your screen, thank you!

## Features
- IP Command
- Apply Command
- Next feature at **2** stars

## Requirements
### Packages:
- **discord.js** ^14.13.0
- **fs** ^0.0.1-security
### Platforms:
- **Node.js** v18.17.0 or newer

## Setup
1. Install Visual Studio Code.
2. Download this project as a **.zip** file: [Click here](https://github.com/Gudlin4/MC-Discord-Bot/archive/refs/heads/main.zip)
3. Extract the .zip file into a normal folder.
4. Open VSCode, click on **Open Folder**, and select the new created folder.
5. Fill all the required values in `config.json`.

```apache
{
    "token": "your_bot_token_here",
    "ipCommandMessage": "Join today on: `yourip.com`\nPort: `yourport`",
    "applyCommandMessage": "**Staff Application:** yourstaffapplicationlink.com\n**Media Application:** yourmediaapplicationlink.com",
    "activity": [ "Status of the bot 1", "Status of the bot 2" ],
    "prefix": "!"
}
```

6. Initialize a new package and install all [required packages](#packages):

```
npm init -y
npm install discord.js fs
```

7. To start your bot, run `node .`
8. Enjoy. ;)

## License
[**GNU-3.0**](./LICENSE), General Public License v3
