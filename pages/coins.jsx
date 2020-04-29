import React from 'react'
import CoinItem from '../components/CoinItem'
import fetch from 'isomorphic-unfetch'

export default class Flux extends React.Component {

	static async getInitialProps(ctx) {
		const coindId = ctx.query.location
		const pseudo = ctx.query.pseudo
		let hostname = ''
		if (ctx.req) {
			hostname = `http://${ctx.req.headers.host}`

		}
		const data = await (await fetch(`${hostname}/api/photos`)).json()
		const locations = await (await fetch(`${hostname}/api/coins`)).json()
		return {data, locations}
	}

	render() {
		return (
			<div>
				{this.props.locations.map((el, index) => {
					// console.log(el, this.props.data.filter((item) => item.coinId == el.id))
					return (
						<CoinItem key={index} item={el} photos={this.props.data.filter((item) => item.coinId == el.id)} />
					)
				})}
			</div>
		)
	}
}
