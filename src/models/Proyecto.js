import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
// import modelos
import { Tarea } from "./Tareas.js";

export const Proyecto = sequelize.define(
  "proyectos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prioridad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

// configuración de llaves foreaneas
Proyecto.hasMany(Tarea,{
    foreigKey: 'proyectoId',
    sourceKey:'id'
});

//se crean los campos que van hacer llaves foreanes
Tarea.belongsTo(Proyecto, {
  foreigKey: "proyectoId",
  targetId:'id'
});