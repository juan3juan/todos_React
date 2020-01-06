
This is the todo example to learn React FullStack Apps:
React 3000
Mango 3010

reference:
https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
https://www.twilio.com/blog/react-app-with-node-js-server-proxy


The basic steps to build the App:

1) build react front end
npx create-react-app todo
$ npm start
$ npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";  //in App.js
$ npm install react-router-dom
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
2)add server to react
npm install express body-parser --save-dev //--save-dev(required in develop) vs --save(required dev&production)
npm install node-env-run nodemon npm-run-all express-pino-logger pino-colada --save-dev
"proxy": "http://localhost:3010"  //in package.json
"dev": "run-p server start",
"server": "nodemon server/server.js",


3) mongodb
mongod:  host process for mongodb
mongo: connect to db
use todos : create db name is todos
show dbs: show all dbs
db: show current db
db.dropDatabase()
https://www.tutorialspoint.com/mongodb/mongodb_quick_guide.htm
create mongoose schema  //todo.model.js
setup the endpoints:
const todoRoutes = express.Router();
app.use('/todos', todoRoutes);