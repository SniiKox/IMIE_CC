import { Sequelize } from 'sequelize'

export const connexion = new Sequelize('imie', 'imie', 'imie', {
	host: 'db',
	dialect: 'mysql'
})
