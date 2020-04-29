import React from 'react'
import FluxItem from '../components/FluxItem'
import fetch from 'isomorphic-unfetch'

export default class Flux extends React.Component {

	static async getInitialProps(ctx) {
		const coindId = ctx.query.location
		const pseudo = ctx.query.pseudo
		let hostname = ''
		if (ctx.req) {
			hostname = `http://${ctx.req.headers.host}`

		}
		const data = await (await fetch(`${hostname}/api/photos${pseudo ? `?pseudo=${pseudo}${coindId && `&location=${coindId}` || ''}` : `${coindId && `?location=${coindId}` || ''}`}`)).json()
		const locations = await (await fetch(`${hostname}/api/coins`)).json()
		return {data, locations}
	}

	render() {
		return (
			<div>
				{this.props.data.map((el, index) => (
					<FluxItem key={index} item={el} locations={this.props.locations} />
				))}
			</div>
		)
	}
}
