# 添加app的方式

> ## 我将所有的配置放到了base文件中的Router文件中
>
> 文件的路径 base/src/router/index.ts
>
> 目前架子纯净的不能在纯净了，只是简单的配置了一下乾坤需要的配置，如果有想法可以自己构建工程添加项目

## 讲一下怎么把自己的项目配近基座中：

> 这边先简单的介绍一下，base就是我们应用的基座，如果你需要添加微应用接入base的话按照一下的方式去配置即可

进入基座 base 这个应用  按照这个路径寻找文件base/src/router/index.ts，我将配置结合在这个文件下了

### 微应用的配置：

1. 在你项目中安装乾坤 （yarn add qiankun   | |   npm i qiankun）和  react-app-rewired  rpm i react-app-rewired | | yarn add react-app-rewired （这个插件可以简单的对webpack进行相应地方的重写）
2. 在应用入口文件中添加乾坤的生命周期，如果不明白怎么写可以参照，项目原有的两个微应用去写
3. 解决跨域问题
   - 添加public-path.js文件
   - 在入口文件第一行！！！引入public-path.js文件
   - 重写webpack配置 在项目根目录下创建config-overrides.js文件，可以参考已有的子应用中寻找代码，cv一下皆可
   - 在package.json中修改start的脚本，改为react-app-rewired启动 ‘react-app-rewired start’

### 基座配置：

文章开头注释已经说了，配置放到了什么地方

1. 微应用的注册，写在qiankunMenu中
2. 应用目录配置，写在appMenu中
3. 路由配置，写在router中