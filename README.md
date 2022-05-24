# **[Social Network API](https://drive.google.com/file/d/1-wgn8Qr2lwEK5SyDUetRBnqtjACxTj0W/view)**

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
- moment

<br>

## Description
---
 The goal of this project is to build an API for a social network that allows users to share their thoughts, react to a friends' thoughts, and create a friend list. This project utilizes Express.js for routing, MongoDB for a NoSQL database, and Mongoose Object Document Mapper for Node.js. By following the installation and usage instructions in this README, you can use this API too! Run the commands specified to develop the database and seed it with data (if desired). Start the server and perform Get/Post/Put/Delete routes to the API from Insomnia to see it in action. This program has full CRUD functionality (create, read, update and delete)! Through this project I learned how to create a NoSQL database and use CRUD operations with my database. 
 <br><br>
This project is not deployed. <br><br>

## Usage
---
After following the instructions in installation: 
1. Open the "index.js" file in your integrated terminal.
2. Run command "npm run seed" to seed users into your database.
3. Run command "npm run start" (or "node server.js"). Alternatively, if you have Nodemon installed, run "npm run watch" (or "nodemon server.js"). 
4. Open insomnia and type in "localhost:3001/api/_" in the address bar. Check out the following routes: <br><br>
User + Friends <br>
- `/api/users` to get all users or create user
- `/api/users/:userId` to get one user, update and delete user
- `/api/users/:userId/friends/:friendId` to add or delete a friend <br><br>
Thought + Reactions <br>
- `/api/thoughts` to get all thoughts or create thought
- `/api/thoughts/:thoughtId` to get one thought, update or delete. 
- `/api/thoughts/:thoughtId/reactions` to create reaction 
- `/api/thoughts/:thoughtId/reactions/:reactionId` to delete reaction 
5. When finished, run CONTROL-C in terminal to end stop nodemon, and trash the session. 

<br>
Please check out this [video](https://drive.google.com/file/d/1-wgn8Qr2lwEK5SyDUetRBnqtjACxTj0W/view) to view a demonstration of how to use this program. 
<br>

### **Screenshots**
--- 
Get all, get one, create, update and delete users. <br> Note the friendCount virtual on each user as well as the populated friends and thoughts arrays in the 'get one' user. <br>
![screenshot](./assets/userRoutes.gif)
<br>
Add or remove friends <br>
![screenshot](./assets/friendRoutes.gif) 
<br>
Get all, get one, create, update and delete thoughts. <br> Note the reactionCount virtual for each thought as well as the popuated reaction. <br>
![screenshot](./assets/thoughtRoutes.gif)
<br>
Add or remove reactions <br>
![screenshot](./assets/reactionRoutes.gif) 

## Contributing 
---
This project was completed by myself, Haley Seymour, as part of the University of Washington Web Development Bootcamp. If you would like to contribute, please do and let me know if you have any questions.

<br>

## Questions?
---
Please contact me on Github at [hseymo](https://github.com/hseymo) or by [email](mailto:haleycseymour@comcast.net).
