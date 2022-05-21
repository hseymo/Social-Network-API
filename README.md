# **[Social Network API](URL)**

![Badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
---
* [License](#license)
* [Installation](#installation)
* [Packages](#packages)
* [Description](#description)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

<br>

## License 
---
[MIT License](./LICENSE) <br>

Copyright (c) 2022 Haley Seymour

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 <br>

<br>

## Installation
---
To install this project: 
1. Start by forking this repository on Github. 
2. Clone this project to your machine by using the "git clone + URL" command. 
3. Open the project with your favorite text editor, like VS Code (in your terminal, first type "cd foldername" then "code ."). 
4. Install Node.js from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).
5. Install MongoDB from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb).
6. Install [Nodemon](https://www.npmjs.com/package/nodemon).
7. Install [Insomnia](https://insomnia.rest/download). 
8. This project includes a package.json file that specifies dependencies for this project, so be sure to run "npm install". This will install the packages specified in the next section. 

<br>

## Packages
---
General Technologies: 
- Javascript
- Node.js
- Git 
- Insomnia
- MongoDB

NPM Packages
- nodemon 
- express
- dotenv
- mongoose 
- Javascript date library???

<br>

## Description
---
 <br><br>

 The goal of this project is to build an API for a social network that allows users to share their thoughts, react to a friends' thoughts, and create a friend list. This project utilizes Express.js for routing, MongoDB for a NoSQL database, and Mongoose Object Document Mapper for Node.js. By following the installation and usage instructions in this README, you can use this API too! Run the commands specified to develop the database and seed it with data (if desired). Start the server and perform Get/Post/Put/Delete routes to the API from Insomnia to see it in action. This program has full CRUD functionality (create, read, update and delete)! Through this project I learned how to create a NoSQL database and use CRUD operations with my database. 
 <br><br>
This project is not deployed. <br><br>

## Usage - NEED TO EDIT
---
After following the instructions in installation: 
1. Open the database file in your terminal. 
2. Run command "mysql -uroot -p" and enter your password (note: keystrokes will not show).
3. Run command "SOURCE schema.sql" to set up the database and tables.
4. Optionally, run command "npm run resetdb" to replace steps 2 and 3 (enter password when prompted).
5. OK to 'quit' MySql.
6. Create a file called ".env" in the root folder of the program. In this folder include the following information: <br>
DB_NAME='' <br>
DB_USER='' <br>
DB_PW='' <br>
7. Open the "server.js" file in your integrated terminal. 
8. Run command "npm run seed" (or "node seeds/index.js") to seed the database if desired.
9. Run command "npm run start" (or "node server.js"). Alternatively, if you have Nodemon installed, run "npm run watch" (or "nodemon server.js"). 
10. Open insomnia and type in "localhost:3001/api/_" in the address bar. Replace underscore with 'products', 'categories', or 'tags'.
11. Enter get, post, delete or put requests as you please. 
12. When finished, run CONTROL-C in terminal to end stop nodemon, and trash the session. 

<br>
Please check out this [video](URL) for a demonstration of how to use this program. 
<br>

### **Screenshots**
--- 
![screenshot](ADD URL HERE)
<br>

<br>

## Contributing 
---
This project was completed by myself, Haley Seymour, with starter code provied from the University of Washington Web Development Bootcamp. If you would like to contribute, please do and let me know if you have any questions.

<br>

## Questions?
---
Please contact me on Github at [hseymo](https://github.com/hseymo) or by [email](mailto:haleycseymour@comcast.net).