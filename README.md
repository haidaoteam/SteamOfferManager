
# SteamOfferManager

The tool's functionality is primarily intended for users of the steam platform.  
Features： 
- The quote from the user automatically ignores the second confirmation.
- And if you can choose whether to automatically confirm the gift quotation (only the items in the quotation will be automatically accepted).

## installation
If you downloaded the installation package:
- Just unzip the installation package, select the application to double-click it to install and run directly.
Download project source code:
- Make sure the [node.js](https://nodejs.org/en/),[vue](https://github.com/vuejs/vue) development environment is installed.
- Execute the package file required by `npm install` npm.
- Run `npm run dev` to run the project when `install` succeeds.If the application home page pops up, it has started normally.If an error occurs or fails to start properly,You can check if the installation package is complete and the development environment is configured correctly.
- If you need to package it yourself into an application, run `npm run build`

## Instructions for use
- To use this tool, you need to prepare the account password for the Steam platform.And the corresponding maFiles file for the [SDA] (https://github.com/Jessecar96/SteamDesktopAuthenticator) software.
- If you need an agent to access [Steam Community] (https://steamcommunity.com/),Then you need to prepare an http proxy.
If you are using it in mainland China,Try the Steam Reverse Proxy Tool [steamcommunity_302] (https://www.dogfight360.com/blog/686/).
- After the normal startup process,You can choose whether to enable the automatic confirmation of the offer quotation functionThen enter the account password correctly,Select the maFiles file corresponding to the account (the file corresponding to the 64-bit ID of the account).If you need a proxy to access users in the community,
You need to make sure you enter the correct http proxy or have started the reverse proxy tool.
- When waiting for the loading effect to end,The steam ID prompt is displayed and the login is successful.If the login is not successful,You can follow the error prompts or exit and log back in.
- Automatically confirm the quote due to asynchronous loading,Wait patiently for a few seconds,You can see if the quote is automatically confirmed.If it is not automatically confirmed or an error occurs,Check the cause of the error according to the error message. Or quit re-login.

## download
How to use the tool:
- You can download the project source code to compile and package.
- It can be downloaded from the Github Release page.
- You can download the installation package from our [official website address] (https://www.haidaoteam.com/blog/haidaohaizidongqueren).


## Dependencies
- [electron-vue](https://github.com/SimulatedGREG/electron-vue)
- [node-steam-user](https://github.com/DoctorMcKay/node-steam-user)
- [node-steamcommunity](https://github.com/DoctorMcKay/node-steamcommunity)
- [node-steam-tradeoffer-manager](https://github.com/DoctorMcKay/node-steam-tradeoffer-manager)


## License
- SteamOfferManager  is released under the  [LGPL-2.1 license](https://tldrlegal.com/license/gnu-lesser-general-public-license-v2.1-%28lgpl-2.1%29)。
