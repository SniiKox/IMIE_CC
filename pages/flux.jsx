import React from 'react'
import FluxItem from '../components/FluxItem'
import fetch from 'isomorphic-unfetch'

export default class Flux extends React.Component {

	static async getInitialProps(ctx) {
		let hostname = ''
		if (ctx.req) {
			hostname = `http://${ctx.req.headers.host}`

		}
		const data = await (await fetch(`${hostname}/api/photos`)).json()
		return {data}
	}

	render() {
		return (
			<div>
				{this.props.data.map((el, index) => (
					<FluxItem key={index} item={el} />
				))}
			</div>
		)
	}
}
