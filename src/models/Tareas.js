import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Tarea = sequelize.define(
  "tareas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { type: DataTypes.STRING, allowNull: false },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);