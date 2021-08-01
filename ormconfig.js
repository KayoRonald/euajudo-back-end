require("dotenv/config");

const devConfig = [
  {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
      "./src/modules/*/typeorm/models/*.ts",
    ],
    "migrations": [
      "./src/shared/typeorm/migrations/*.ts"
    ],
    "cli": {
      "migrationsDir": "./src/shared/typeorm/migrations"
    }
  }
]

const prodConfig = [
  {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
      "./dist/modules/*/typeorm/models/*.js",
    ],
    "migrations": [
      "./dist/shared/typeorm/migrations/*.js"
    ],
    "cli": {
      "migrationsDir": "./dist/shared/typeorm/migrations"
    },
  }
]

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
