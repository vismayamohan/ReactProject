## Class 1

#### What is emmet?
- Emment is designed to speedup the process of writing and editing code by providing a set of shortcuts that can be quickly expandable to full code blocks. It is a set of plug-ins for text editors that allow for high-speed coding and editing in structured code format via content assist.

#### What is cross-origin?
- CORS is a mechanism which uses additional HTTP headers to tell the browser wheather a specific web app can share resource with another webapp. So both the webapp should have different origin. So if they have the same origin then it is easy to share resourses, but if not then they need to follow the CORS mechanism.


## Class 2

#### What is NPM?
- NPM is a package manager for JS programming language and maintained by node. It is world's largest software registry. NPM is very easy to use we can install any software package for free. It is free to use and we can create private software package as well, many companies use them. NPM is dependend on node.js NPM helps in creating config file for our project which will help to run our project. NPM creates a package.json file which consists of all the configuration.

#### What is parcel/Webpack? Why do we need it?
- Parcel/Webpack are bundlers which helps in running the project on browser. Bundler is a devlopement tool that combine many javascript files into a single one that is production ready loadable in browser. There are many reasons why we need bundlers some of them are.
--> It is an optimizing technique we can use to reduce the number of server requests for javascript files.


#### What is .parcel-cache
- Parcel-cache folder stores information about our project when parcel builds it, so that when it rebuilds, it does not have to re-parse and re-analyze everything from scratch. This is one of the reason why parcel can be very fast in development mode. We should add this in git-ignore becasuse it is the space taken by parcel during production building its binary files. This can be made again after deleting cache with a command npm run build. This is where parcel helps our project and do all the extra work for our application.

#### What is npx?
- NPX is node package execute. NPX is used to execute JS packages. NPX means execute using NPM.

#### What is the differnece between dependencies and devDependencies?
- In every application there is a file called as package.json. This file containes all the relavent data regarding the project. 
--> Dependencies: It consists of all the packages that are used in the project with the version number. 
--> devDependencies: It consists of all the packages that are used in the project development phase and not in the production or testing environment.
--> Global Dependencies: In global dependencies it installs the current package context as global package. It allows us to use the code in the package as a set of tools on our local computer.
#### What is tree shaking?
- Tree shaking is when there are dead code present in our application it will help us removing the same. Parcel helps in automatically remove dead code when bundling multiple files into single file. This is important for preparing code that is production ready with clean structures and minimal file size.

#### What is hot module replacement.
- Hot module replacement exchanges, adds or removes modules while an application is running, without a full reload. This can significantly speed up development by retaining application state which is lost during full reload. Save development time by only updating what's changed. Instantly update the browser when modifications are made to CSS/JS and many more.


#### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- Minifying
- Bundling
- File watcher algorithm
- Port Number
- Zero Config

- Minifying - parcel minifies the file by reducing the file size of output bundles by removing whitespace, renaming variables or shorter names and many other optimizations.
- Port Number - Parcel handles port number. It gives us a port in which our project is being hoisted.
- Zero Config - Parcel is zero config meaning we do not have to config anything sepeartly. Parcel handles everything and no aditional config is needed. It will install all the necessary plugins and dependencies for the project.

#### What is .gitignore? What should we add and not add into it?
- In git-ignore we add files which need not be added to git. We add files which are auto generated or can be generated in server into git-ignore. Our main file should go inside git like main web pages and package.json, package-lock.json files and all others which are needed for a project to run.

#### What is the difference between package.json and package-lock.json
- package.json consists of all the config (metadata) details of the project which can be edited like the root and other like stylesheets.
- Package-lock.json this is the main config file where in all the modules are defined and are locked for the dependency version we should not edit anything in this file.
- package.json is a versioning file used to install multiple packages into your project. When we initialize node application we will see three files installed in our application those are package.json, package-lock.json and node_modules. package.json file contains metadata about the project and also the functional dependencies that is required for the application. It consists of the basic information about the project. It contains information such as name, description, author, script, and dependencies.	
- package-lock.json file is created to lock the dependency with the installed version. It will install the exact latest version of the package in our application and save the same in package.json. It describes the exact tree that was generated to allow subsequent installs to have the identical tree. It allows future devs to install the same dependencies in the project. It contains the name, dependencies, and locked version of the project. 

#### Why should I not modify package-lock.json?
- Package-lock.json file are generated file and is not generated to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and exact version of each dependencies.


#### What is node_modules? Is it a good idea to push that on git?
- Node module are some code which has already been written and we can use the same in our project. Node module provide a way to re-use code in our project. Yes node_modules should be in git ignore, as package.json has sufficient information to recreate node modules. As it keeps all the track of data information in package.lock and package.json files we can generate the same node modules in the server. And the same packega-lock file will help us generate node modules in our server.

#### What is dist folder?
- Dist folder basically keeps the file minified to us. Its keeps all the file minified and when we create a development build of our application parcel will buid all the production files into .dist folder.

#### What are browserlist?
- Browserlist is a thing which will make our code compatiable for a lot of browsers. We need to config browserlist inside package.json file. It will require to pass last versions that our application to support. So we will have to pass 'last two verions' and parcel will make sure that our application will work in all the browsers available for the last two versions.

#### What is ˆ - carat and ~ - tilda ?
- Using a caret (^) sign means that we can accept minor releases and patch releases, but not a major release when updating our package. Using a tilde sign before our version number means that we can accept only a patch release when updating our package. 


## Class 3

### What is JSX?
- JSX is nothing but javascript XML (extensible markup language). It is not HTML inside javascript, but it is HTML like syntax. JSX allows us to describe React's object tree using a syntax that resembles that of an HTML template. 

### Superpowers of JSX
- We can write javascript inside JSX, it is easy to maintain, we can debug easily. We can write logic and HTML in a single file.

### Role of type attribute in script tag? What options can I use there?
- Type attribute specifies the type of the script. The default value is text/javascript.

### {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX
- {TitleComponent}: TitleComponent is javascript variable or a JS expression. Curly braces is used to call a variable inside JSX.
- <TitleComponent />: This is a react component which is returning some JSX value inside another component or render this component. This is a function component that returns a JSX value. A value which is inside angular bracket with closing tag is component.
- <TitleComponent></TitleComponent>: This is equal to <TitleComponent />. We write in this way when there are no component composition. But when another component is called inside current component we write in this way.
