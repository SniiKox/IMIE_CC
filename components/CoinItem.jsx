import React from 'react'
import Link from 'next/link'

export default class CoinItem extends React.Component {


	render() {
		console.log(this.props.photos)
		return (
			<div>
				<p>Coin {this.props.item.name}</p>
				<ul>
					{this.props.photos.map((el, index) => (
						<>
							<li>
								<img src={el.path} alt={`photo by ${el.pseudo}`} key={index} />
							</li>
						</>
					))}
					<li>
							<Link href={`/flux?location=${this.props.item.id}`} as={`/flux?location=${this.props.item.id}`}>
								<a>
									Voir plus de photos
								</a>
							</Link>
						</li>
				</ul>
				<style jsx>{`
					div {
						width: 94%;
						display: flex;
						flex-direction: column;
						flex-wrap: nowrap;
						padding: 2%;
						margin: 2%;
						border: 1px solid black;
						border-radius: 8px;
					}
					ul {
						display flex;
						flex-direction: row;
						justify-content: space-between;
						list-style-type: none;
					}
					li {
						margin: 10px;
					}
					img {
						height: 175px
					}
					p {
						border-bottom: 1px dashed black;
						padding: 2%;
					}
				`}</style>
			</div>
		)
	}
}
