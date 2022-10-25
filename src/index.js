import app from "./app.js";
import { sequelize } from "./database/database.js";
import './models/Proyecto.js';
import './models/Tareas.js';
import { config } from "dotenv";
config({ path: process.ENV });

const main = async() => {

    // validar conexion
    try {
        await sequelize.sync({ force: false });
        app.listen(process.env.PORT || 3000);
        console.log("SERVIDOR CORRIENDO EN PUERTO " + process.env.PORT);
      } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
      }
}

main();