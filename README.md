# node-rest-api

## A small framework for working with rest requests for Bitrix24
### Creation date: 12/25/2023

**29.12.2023**
A starter project has been created in accordance with the video [tutorial](https://www.youtube.com/watch?v=9EtkpCzqZu0)
<br>
**Structure:**
<ul>
  <li>Root (connecting modules, registering pages, routing) - /index.js</li>
  <li>Middlewares (performing initial functions) - /middlewares.js</li>
  <li>Frontend:
  <ul>
    <li>Main frontend - client/app.js</li>
  </ul>
  </li>
  <li>Controllers:
  <ul>
    <li>Main controller - controllers/server.js</li>
  </ul>
  </li>
  <li>Template engine:
  <ul>
    <li>Main page - ejs/index.ejs</li>
    <li>Form page - ejs/next.ejs</li>
    <li>Inner template engine:
    <ul>
      <li>Footer - ejs/partials/footer.ejs</li>
      <li>Header - ejs/partials/header.ejs</li>
      <li>Navbar - ejs/partials/navbar.ejs</li>
    </ul>
    </li>
  </ul>
  </li>
  <li>
      Routes:
      <ul>
        <li>Main router - routes/server.ejs</li>
      </ul>
  </li>
  <li>Node modules</li>
  <li>Package.json</li>
  <li>Package-lock.json</li>
</ul>

**Libraries used:**
- express
- ejs
- nodemon
