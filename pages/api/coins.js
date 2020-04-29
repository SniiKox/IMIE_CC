import { connexion } from '../../libs/util'
import Coin from '../../models/Coin'

export default async (req, res) => {
	await connexion.sync()
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(await Coin.findAll()))
}
