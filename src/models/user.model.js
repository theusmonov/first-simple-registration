import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

 
export class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique : true
    }, 
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type:  DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {
       sequelize,
       tableName: "users",
       timestamps: true
})
await sequelize.sync({alter: true})