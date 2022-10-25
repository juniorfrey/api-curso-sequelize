import app from "./app.js";
import { sequelize } from "./database/database.js";
import './models/Proyecto.js';
import './models/Tareas.js';


const main = async() => {

    // validar conexion
    try {
        await sequelize.sync({ force: false });
        app.listen(5000);
        console.log('Servidor corriendo');
      } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
      }

    
}

main();