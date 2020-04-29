import React from 'react'

export default class FluxItem extends React.Component {


	render() {
		return (
			<div>
				<img src={this.props.item.path} alt=""/>
				<p>
					<span>By <a href="#!">{this.props.item.pseudo}</a></span>
					<span>At <a href="#!">{this.props.item.location}</a></span>
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
