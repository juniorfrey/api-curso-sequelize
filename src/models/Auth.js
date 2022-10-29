import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";

export const Auth = sequelize.define("usuarios",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING(64),
        /* validate: {
          is: /^[0-9a-f]{64}$/i
        } */
    }
 }
);