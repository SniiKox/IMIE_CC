import Sequelize from 'sequelize'
import { connexion } from '../libs/util'
import Coin from './Coin'
/*

    pseudo
    path
    location (one-to-many Coin)

*/

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
}, {
	sequelize: connexion,
	modelName: 'photo'
})
Photo.hasOne(Coin)

export default Photo
