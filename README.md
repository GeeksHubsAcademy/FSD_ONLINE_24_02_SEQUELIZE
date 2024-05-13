### Sequelize installation
```sh
$ npm install --save sequelize
```
```sh
$ npm install --save mysql2
```
```sh
$ npm install --save-dev sequelize-cli
```

```js
require('dotenv').config(); 
const path = require("path");

module.exports = {
   config: path.resolve("./src/config", "config.json"),
   "models-path": path.resolve("./src/models"),
   "seeders-path": path.resolve("./src/database/seeders"),
   "migrations-path": path.resolve("./src/database/migrations"),
};
```

```env
NODE_ENV=development
DATABASE_URL=mysql://root:1234@localhost:3307
```

```sh
$ npx sequelize-cli init
```

```sh
$ npx sequelize-cli model:generate --name Role --attributes name:string
```

```sh
$ npx sequelize-cli db:migrate
```

```sh
npx sequelize-cli db:migrate:undo
```