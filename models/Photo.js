import Sequelize from 'sequelize'
import { connexion } from '../libs/util'
import Coin from './Coin'

class Photo extends Sequelize.Model {}
Photo.init({
	pseudo: {
		type: Sequelize.STRING,
		allowNull: false
	},
	path :{
		type: Sequelize.STRING,
		allowNull: false
	},
	coinId: {
		type: Sequelize.BIGINT,
		allowNull: false
	}
}, {
	sequelize: connexion,
	modelName: 'photo'
})

export default Photo
