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
        allowNull: false
    }, 
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
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