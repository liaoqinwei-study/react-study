【create-creat-app 的使用】
  >$ npm install create-react-app -g
  >npm root -g 查看全局安装状态
    
  >$ create-react-app [项目名称]
    基于脚手架命令，创建出一个基于React的自动化/工程化项目目录，和npm发包时候的命名规范一样。项目名称中不能出现：大写字母、中文汉字、特殊字符(-或者_都可以的)等

  【脚手架生成目录中的一些内容】
    node_modules 当前项目中依赖的包都放在这里
      .bin  本地项目中可执行命令，在package.json的scripts中配置对应的脚本即可(其中有一个就是: react-scripts命令)
      
     public 存放的是当前项目的HTML页面(单页面应用放一个index.html即可，多页面根据自己需求防止需要的页面)
      <!--
        index文件中注意事项
         在REACT框架中，所有的逻辑都是在JS中完成的（包括页面结构的创建），如果想给当前的页面导入一些CSS样式或者IMG图片等内容，我们有两种方式；
       1.在JS中基于ES6 Module模块规范，使用import导入，这样webpack在编译合并JS的时候，会把导入的资源文件等插入到页面的结果中(绝对不能在JS管控的结构中通过目录./或者../，导入资源，因为webpack编译的时候，地址就不在之前的相对地址了)
       2.如果不想再JS中导入(js导入的资源最后都会基于WEBPACK编译)，我们也可以把资源手动的在HTML中导入，但是HTML最后也要基于WEBPACK编译，导入的地址也不建议写相对地址，而是使用%PUBLIC_URL% 写出绝对地址
       <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>
       <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
       -->
       
       src 项目结构中最主要的目录，因为后期所有的JS、路由、组件等都是放到这样(包括需要编写的CSS或者图片等)
       
     .gitignore git提交时候忽略的目录
     
     package.json 当前项目的配置清单
      "dependencies": {
          "react": "^16.13.1",
          "react-dom": "^16.13.1",
          "react-scripts": "3.4.1"
        },
        基于脚手生成了工程目录，自动帮我们生成了三个模块：react/react-dom/react-scripts
          ->Babel 一套
          ->CSS处理的一套
          ->eslint一套
          ->webpack一套
          ->其他的
      没有less/sass的处理内容(项目中使用less，需要我们自己额外安装)
      "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
        },
        可执行脚本
           start：开发环境下，基于webpack编译处理，最后可以预览当前开发的项目成功(在webpack中安装了dev-server插件，基于这个插件会自动创建web服务[端口号默认是3000]，webpack会帮我们自动打开浏览器，并且站看我们的页面，并且能够监听我们代码的改变，如果代码改变了，webpack会自动重新编译，并且刷新浏览器来完成渲染)
        
        
        
2. React 脚手架升入解析
  create-react-app脚手架为了让结构目录清晰，把安装的 webpack及配置文件都继承在了react-scripts模块中，放到了node-modules中
  
  但是在真实项目中，我们需要在脚手架默认安装的基础上，额外安装一些我们需要的模块，例如：react-router-dom/axios... 再比如：less/less-loader...
  
  情况一：如果我们安装其他的组件，但是安装成功后不需要修改webpack的配置项，此时我们直接的安装，并且调取使用即可







