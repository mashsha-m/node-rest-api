# node-rest-api

## A small framework for working with rest requests for Bitrix24
### Creation date: 12/25/2023
___
**29.12.2023**
# A starter project has been created in accordance with the video tutorial (https://www.youtube.com/watch?v=9EtkpCzqZu0)
### Structure:
1. Root (connecting modules, registering pages, routing) - /index.js
2. Middlewares (performing initial functions) - /middlewares.js
3. Frontend:
  3.1. Main frontend - client/app.js
4. Controllers:
  4.1. Main controller - controllers/server.js
5. Template engine:
  5.1. Main page - ejs/index.ejs
  5.2. Form page - ejs/next.ejs
  5.3. Inner template engine:
    5.3.1. Footer - ejs/partials/footer.ejs
    5.3.2. Header - ejs/partials/header.ejs
    5.3.3. Navbar - ejs/partials/navbar.ejs
6. Routes:
  6.1. Main router - routes/server.ejs
7. Node modules
