import Sequelize from "sequelize";

export const sequelize = new Sequelize('curso_api_sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});