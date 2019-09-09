
# SteamOfferManager
该工具的功能主要作用于steam平台的用户。  
功能： 
- 用户发出的报价自动忽略二次确认。
- 以及可选是否自动确认赠送的报价（报价中只含有对方赠送的物品才会自动接受）。

## 安装
如果下载的安装包：
- 只需要解压安装包，选中应用程序双击就可直接安装运行。
下载的项目源码：
- 确保已经安装了[node.js](https://nodejs.org/en/)，[vue](https://github.com/vuejs/vue)开发环境。
- 可执行 `npm install` npm所需要的包文件。
- 当`install` 成功后执行 `npm run dev` 运行项目。若弹出应用程序首页，则已正常启动。如果出现报错或未能正常启动，可查看安装包是否下载完整以及开发环境是否正确配置。
- 如果需要打包成应用程序可执行  `npm run build`

## 使用说明
- 使用该工具需要准备Steam平台的账号密码，以及[SDA](https://github.com/Jessecar96/SteamDesktopAuthenticator)软件的对应的maFiles文件。
- 如果你需要代理才能访问[Steam社区](https://steamcommunity.com/)，那你还需准备一个http代理。如果你是在中国大陆地区使用，可以尝试使用Steam反向代理工具[steamcommunity_302](https://www.dogfight360.com/blog/686/)。
- 正常启动程序后，可以选择是否开启自动确认赠送的报价功能，然后正确的输入账号密码，选择账号对应的maFiles文件（账号64位id对应的文件），如果是需要代理才能访问社区的用户，需要确保输入正确的http代理或者已启动反向代理工具。
- 当等待加载效果结束，显示出steam ID提示在线则已成功登录。如果登录未成功，可根据错误提示进行处理，或者退出重新登录。
- 自动确认报价因异步加载，需耐心等待几秒，则可查看是否自动确认报价成功。如果未自动确认或者出现报错，根据错误提示查看错误原因。或者退出重新登录。

## 下载
该工具的使用来源方式：
- 可以下载该项目源码自行编译打包。
- 可以从Github Release页面下载。
- 可以从我们[官网地址](https://www.haidaoteam.com/blog/haidaohaizidongqueren)下载安装包。


## 依赖
- [electron-vue](https://github.com/SimulatedGREG/electron-vue)
- [node-steam-user](https://github.com/DoctorMcKay/node-steam-user)
- [node-steamcommunity](https://github.com/DoctorMcKay/node-steamcommunity)
- [node-steam-tradeoffer-manager](https://github.com/DoctorMcKay/node-steam-tradeoffer-manager)


## 证书
- SteamOfferManager  是根据  [LGPL-2.1 license](https://tldrlegal.com/license/gnu-lesser-general-public-license-v2.1-%28lgpl-2.1%29) 发布。