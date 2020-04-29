import { connexion } from '../../libs/util'
import Photo from '../../models/Photo'
import { promises } from 'fs'

export default async (req, res) => {
	await connexion.sync()
	res.setHeader('Content-Type', 'application/json')
	const pseudo = req.query.pseudo
	const picName = req.query.filename
	const location = req.query.location

	if (location && isNaN(parseInt(location))) {
		return res.status(400).end()
	}

	if (req.method === 'POST') {
		if (!pseudo || !picName || !location) {
			return res.status(400).end()
		}
		// post de la photo et upload du body
		const path = `/uploads/${pseudo}-${Math.random() * 100000000000000000}-${picName}`
		const backendPath = `./public/${path}`
		await promises.writeFile(backendPath, await streamToBuffer(req))
		try {
			const photo = await Photo.create({
				pseudo: pseudo,
				path,
				coinId: parseInt(location)
			})
			res.statusCode = 200
			return res.end(JSON.stringify(photo))
		} catch (e) {
			res.statusCode = 400
			await promises.unlink(backendPath)
			console.log(e)
			return res.end()
		}
	} else {
		res.statusCode = 200
		let builder = {}
		if (pseudo) {
			builder.pseudo = pseudo
		}
		if (location) {
			builder.location =  parseInt(location)

		}
		res.end(JSON.stringify(await Photo.findAll(Object.keys(builder).length > 0 ? {where: builder} : undefined)))
	}
}

// Stream.Readable
function streamToBuffer(str){
	return new Promise((resolve, reject) => {
		const chunks = []
		str.once('end', () => resolve(Buffer.concat(chunks)))
		str.once('error', err => reject(err))
		str.on('data', chunk => chunks.push(chunk))
	})
}

export const config = {
	api: {
		bodyParser: false
	}
}
