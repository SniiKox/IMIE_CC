import React from 'react'
import Link from 'next/link'

export default class FluxItem extends React.Component {


	render() {
		const location = this.props.locations.find((el) => el.id === this.props.item.coinId)
		return (
			<div>
				<img src={this.props.item.path} alt=""/>
				<p>
					<span>By <Link as={`/flux?pseudo=${this.props.item.pseudo}`} href={`/flux?pseudo=${this.props.item.pseudo}`}><a>{this.props.item.pseudo}</a></Link></span>
					<span>At <Link as={`/flux?location=${this.props.item.coinId}`} href={`/flux?location=${this.props.item.coinId}`}><a>{location.name}</a></Link></span>
				</p>
				<style jsx>{`
					div {
						width: 94%;
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						padding: 2%;
						margin: 2%;
						border: 1px solid black;
						border-radius: 8px;
					}
					img {
						max-height: 400px;
						object-fit: contain;
						flex-basis: 70%;
						margin-right: 2%;
					}
					img {
					}
					span {
						display: block
					}
					p {
						border-left: 1px dashed black;
						padding: 2%;
						width: 30%;
					}
				`}</style>
			</div>
		)
	}
}
