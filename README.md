# <h1 align="center" style="color:yellow"> 🌍 Aus-InSCI Project 🌍</h1>
<h3 align="center"><i>Australian Arm of the International Spinal Cord Injury (Aus-InSCI) Community Survey Project</i></h3>
<br>

<p align="center">
    <img src="https://img.shields.io/github/repo-size/marora7926/aus_insci_project" />
    <img src="https://img.shields.io/github/languages/count/marora7926/aus_insci_project" />
    <img src="https://img.shields.io/github/issues/marora7926/aus_insci_project" />
    <img src="https://img.shields.io/github/last-commit/marora7926/aus_insci_project" />
</p>

<p align="center">
    <img alt="GitHub followers" src="https://img.shields.io/github/followers/marora7926?style=social">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fmarora_ind">
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/html-blueviolet" />
    <img src="https://img.shields.io/badge/css-blue" />
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/Sequelize-9cf"  />
    <img src="https://img.shields.io/badge/mySQL-yellowgreen"  />
    <img src="https://img.shields.io/badge/dotenv-green" />
    <img src="https://img.shields.io/badge/bcrypt-critical" />
    <img src="https://img.shields.io/badge/cryptr-ff69b4" />
    <img src="https://img.shields.io/badge/handlerbars-orange" />
    <img src="https://img.shields.io/badge/shield.io-brightgreen" />   
</p>

## <span style="color:lightgreen">Access deployed and repo link</span>

- [🎥 Aus-InSCI Project Website  🎥](XXX)
- [👋 Aus-InSCI Project Repo 👋](https://github.com/marora7926/aus_insci_project)

Developed by [Mohit Arora](https://github.com/marora7926)

## <span style="color:lightgreen">Table of contents</span>

  - [<span style="color:lightgreen">Access deployed and repo link</span>](#access-deployed-and-repo-link)
  - [<span style="color:lightgreen">Table of contents</span>](#table-of-contents)
  - [<span style="color:lightgreen">Description of the application</span>](#description-of-the-application)
  - [<span style="color:lightgreen">User story</span>](#user-story)
  - [<span style="color:lightgreen">Acceptance criteria</span>](#acceptance-criteria)
  - [<span style="color:lightgreen">Packages</span>](#packages)
  - [<span style="color:lightgreen">Future developments</span>](#future-developments)
  - [<span style="color:lightgreen">Presentation link</span>](#presentation-link)
  - [<span style="color:lightgreen">Wireframe</span>](#wireframe)
  - [<span style="color:lightgreen">Screenshot - Landing page</span>](#screenshot---landing-page)
  - [<span style="color:lightgreen">App functionality GIF</span>](#app-functionality-gif)
  - [<span style="color:lightgreen">App Developer</span>](#app-developer)

## <span style="color:lightgreen">Description of the application</span>
```
Creating a simple, secure and responsive application that allows a users to generate an store passwords for their every registered account.
```
## <span style="color:lightgreen">User story</span>
``` 
AS A busy professional who manages many systems with different password requirements
I want a simple and secure Password Management System that ALLOWS me to generate and store different passwords,
SO THAT I can access them when required for every registered account.
``` 

## <span style="color:lightgreen">Acceptance criteria</span>
``` 
GIVEN I do not have an account in the password genie app
WHEN I click register THEN I am presented with a form AND I need to enter a username, email and password
WHEN I enter an exisitng user email to register THEN I am presented with an error message to notify me that the username has been taken
WHEN I submit the form with a unique email THEN I am taken to the user dashboard
 
GIVEN I have an account in the password genie app 
WHEN I enter registered username and password THEN I am taken to the user dashboard

GIVEN I have an account in the password genie app
WHEN log in THEN I am presented with a dashboard
AND I have the option to create a new item, view an exisitng item, edit an existing item and delete an existing item.

GIVEN I have logged in to the password genie app,
WHEN I choose to create a new item THEN I am presented with a form.
AND I need to enter a website name, url of website, username and type a password or generate a password using a modal with different user requirement.
WHEN I submit the form THEN I am taken back to the dashboard and I can see my newly created item.
WHEN I choose to edit an existing item THEN I am presented with a pre-filled form with existing data
AND I can edit the website name, url of website, username and type or generate a new password using a modal with different user requirement
WHEN I submit the form THEN I am taken back to the dashboard and I can see my updated password item.
WHEN I choose to delete an existing item THEN the password item is removed from the dashboard.
```
## <span style="color:lightgreen">Packages</span>
  * [apollo/client](xx)
  * [apollo-server-express](xx)
  * [bcrypt](https://www.npmjs.com/package/bcrypt)
  * [bootstrap](xx)
  * [compression](https://www.npmjs.com/package/compression) *- Compression in `Node.js` and `Express` decreases the downloadable amount of data that's served to users.*
  * [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
  * [cryptr](https://github.com/MauriceButler/cryptr)
  * [dotenv](https://www.npmjs.com/package/dotenv)
  * [express](https://www.npmjs.com/package/express) *- Fast, unopinionated, minimalist web framework for `node`.*
  * [express](xx)
  * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  * [express-session](https://www.npmjs.com/package/express-session)
  * [generate-password](https://github.com/brendanashworth/generate-password)
  * [graphql](xx)
  * [handlebars](https://www.npmjs.com/package/handlebars)
  * [jsonwebtoken](xx)
  * [lite-server](https://www.npmjs.com/package/lite-server) *- Lite-server is a lightweight development `server` that serves a web application, opens it in the browser, and refreshes the page when `HTML or JavaScript` changes are made to the source code.*
  * [mongoose](https://www.npmjs.com/package/mongoose) *- Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. *
  * [mongoose](xx)
  * [morgan](https://www.npmjs.com/package/morgan) *- HTTP request logger middleware for node.js*
  * [mysql2](https://www.npmjs.com/package/mysql2)
  * [react](xx)
  * [react-bootstrap](xx)
  * [react-dom](xx)
  * [react-router-dom](xx)
  * [react-scripts](xx)
  * [sequelize](https://www.npmjs.com/package/sequelize)
  * [shield-io](https://shields.io/) *- for readme file*


## <span style="color:lightgreen">Future developments</span>
  1. Add a button on the landing page "forgot my password" which will send a temporary password recovery link to user's email.
  2. App will notify the user that password has not been changed for more than 6 months. 
  3. Automatic notification will be sent to users registered email.
  4. Users inputs will be validated.
  5. Allow user to search a password on the dashboard.
  6. Finding a more secure way to encrypting the database.
  7. Add a reveal icon to display the password.
  8. URL click will direct to the website and auto-fill username and password.

## <span style="color:lightgreen">Presentation link</span>
[👋 Aus-InSCI Project Presentation 👋](https://cloudstor.aarnet.edu.au/plus/s/kbKe2OGZ0js3jDp)

## <span style="color:lightgreen">Wireframe</span>
![Screenshot-wireframe](./public/images/wireframe.png)

## <span style="color:lightgreen">Screenshot - Landing page</span>
![Screenshot-landing-page](./public/images/landing-page.png)

## <span style="color:lightgreen">App functionality GIF</span>
![Screenshot-app-gif](./public/images/app-gif.xxx)

## <span style="color:lightgreen">App Developer</span>
```
Mohit ARORA
Email: mohitcoder2021@gmail.com
GitHub: https://github.com/marora7926
LinkedIn: 
```
- - -
© 2021 Bootcamp students. Confidential and Proprietary. All Rights Reserved


23 Final Project: MERN Stack Single-Page Application

Projects have played a key role in your journey to becoming a full-stack web developer. As you apply for development jobs, your portfolio is absolutely vital to opening doors to opportunities. Your portfolio showcases high-quality deployed examples of your work, and you can use your finished projects for that very purpose.

This project is a fantastic opportunity to show employers your skills and coding abilities, especially in the context of a scalable, user-focused MERN app. Remember that employers want to see what you can do, but they also want to see how you work with other developers. The more examples of deployed work you have in your portfolio, the more likely you are to get an interview and a job.


Project Requirements

You will use everything you have learned throughout this course to create a MERN stack single-page application that works with real-world data to solve a real-world challenge, with a focus on data and user demand. This project will provide you with the best opportunity to demonstrate your problem-solving skills, which employers will want to see during interviews. Once again, the user story and acceptance criteria will depend on the project that you create, but your project must fulfill the following requirements:

* Use React for the front end.
* Use Node.js and Express.js server.
* Use MongoDB and the Mongoose ODM for the database.
* Be deployed using Heroku (with data).
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Include authentication.
* Protect sensitive API key information on the server.
* Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).
* Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).


CSS Styling

Instead of using a CSS library like Bootstrap, consider one of the following suggestions:

* Look into the concept of CSS-in-JS, which abstracts CSS to the component level, using JavaScript to describe styles in a declarative and maintainable way. Some popular libraries include [styled-components](https://styled-components.com/) and [Emotion](https://emotion.sh/docs/introduction).
* Try using a component library, such as [Semantic UI](https://semantic-ui.com/), [Chakra UI](https://chakra-ui.com/), or [Ant Design](https://ant.design/).
* Create all the CSS for your application just using CSS.

Ultimately, it doesn't matter which of these options you choose&mdash;it just needs to look professional and be mobile-friendly.


Bonus

* Uses GraphQL queries and mutations for retrieving, adding, updating, and deleting data.
* Uses JWT for authentication

Although this is not a requirement for your project, see if you can also implement functionality to meet the minimum requirements of a PWA:

* Uses a web manifest
* Uses a service worker for offline functionality
* Is installable


Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following:

* Elevator pitch: a one minute description of your application
* Concept: What is your user story? What was your motivation for development?
* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
* Demo: Show your stuff!
* Directions for Future Development
* Links to the deployed application and the GitHub repository. Use the [Guide to Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) on The Full-Stack Blog if you need a reminder on how to deploy to Heroku.


Grading Requirements
This project is graded based on the following criteria:

Technical Acceptance Criteria: 25%
* Satisfies the following code requirements:
  * Application uses React for the front end.
  * Application has a GraphQL API with a Node.js and Express.js server, and uses queries and mutations for retrieving, adding, updating, and deleting data.
  * Application uses MongoDB and the Mongoose ODM for the database and protects sensitive API key information on the server.
  * Application includes user authentication using JWT.

Concept 10%
* Application should be a unique and novel idea.
* You should clearly and concisely articulate your project idea.

Deployment: 20%
* Application deployed at live URL on Heroku and loads with no errors.
* Application GitHub URL submitted.

Repository Quality: 10%
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class and id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README file with description, screenshot, and link to deployed application.


Application Quality: 15%
* Application user experience is intuitive and easy to navigate.
* Application user interface style is clean and polished.
* Application is responsive.


Presentation 20%
* You should present using Google Slides, Powerpoint, or a similar presentation software.
* Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing).



Bonus
Fulfilling all three of the following requirements to turn your app into a PWA will add 10 points to your grade. Note that the highest grade you can achieve is still a 100:
* Uses a web manifest
* Uses a service worker for offline functionality
* Is installable


How to Submit Your MERN Stack Single-Page Application
You are required to submit the following for review:
* The URL of the deployed application.
* The URL of the GitHub repository, with a unique name and a README describing the project.