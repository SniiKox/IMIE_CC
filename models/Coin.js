import Sequelize from 'sequelize'
import { connexion } from '../libs/util'
/*
    name
    coordx
    coordy
*/

class Coin extends Sequelize.Model {}
Coin.init({
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	coordx :{
		type: Sequelize.DOUBLE,
		allowNull: false
	},
	coordy :{
		type: Sequelize.DOUBLE,
		allowNull: false
	},
}, {
	sequelize: connexion,
	modelName: 'coin'
})
export default Coin
