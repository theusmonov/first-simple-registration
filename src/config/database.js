import { Sequelize } from "sequelize";
import "dotenv/config"


const sequelize = new Sequelize(process.env.DB_CONNECT, {
  logging: false
})

export default sequelize;

