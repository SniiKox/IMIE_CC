import { connexion } from '../../libs/util'
import Coin from '../../models/Coin'

export default async (req, res) => {
	await connexion.sync()
	res.setHeader('Content-Type', 'application/json')
	const distanceVal = toInt(req.query.distance)
	const coordx = toFloat(req.query.coordx)
	const coordy = toFloat(req.query.coordy)
	const coins = await Coin.findAll()
	if (distanceVal && coordx && coordy) {
		const result = []
		for (const coin of coins) {
			const tmp = coin.toJSON()
			console.log(tmp)
			console.log(distance(tmp.coordx, tmp.coordy, coordx, coordy))
			if ((distance(tmp.coordx, tmp.coordy, coordx, coordy) * 1000) <= distanceVal) {
				result.push(tmp)
			}
		}
		return res.status(200).end(JSON.stringify(result))
	}

	res.status(200).end(JSON.stringify(coins))
}

function toFloat(number) {
	const res = parseFloat(number)
	return !isNaN(res) ? res : undefined
}

function toInt(number) {
	const res = parseInt(number)
	return !isNaN(res) ? res : undefined
}

// return distance in km
function distance(lat1, lon1, lat2, lon2) {
	var p = 0.017453292519943295;
	var c = Math.cos;
	var a = 0.5 - c((lat2 - lat1) * p)/2 +
			c(lat1 * p) * c(lat2 * p) *
			(1 - c((lon2 - lon1) * p))/2;

	return 12742 * Math.asin(Math.sqrt(a))
}
