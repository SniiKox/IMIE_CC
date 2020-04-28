import React from 'react'
import Link from 'next/link'

export default class Layout extends React.Component {
	render() {
		return (
			<>
				<nav>
					<Link href="/" as="/">
						<a>
							<img src="/p2.svg" alt=""/>
						</a>
					</Link>
					<Link href="/" as="/">
						<a>
							<img src="/txt1.svg" alt=""/>
						</a>
					</Link>
					<ul>
						<li>L'application</li>
						<li>
							<Link href="/flux" as="/flux">
								<a>
									La randonnée
								</a>
							</Link>
						</li>
						<li>Contact</li>
						<li><button>Télécharger</button></li>
					</ul>
				</nav>
				{this.props.children}
				<footer>
					<div>
						Politique de confidencialité
					</div>
					<div>
						Conditions d'utilisations du service
					</div>
				</footer>
				<style jsx>{`
					nav {
						position: fixed;
						width: 100%;
						top: 0;
						background: white;
						display: flex;
						z-index: 1001;
						height: 50px;
					}
					a {
						display: inline;
					}
					img {
						display: inline;
						padding: 5px;
						height: 50px;
					}
					nav ul {
						margin: 0;
						padding: 0;
						width: 100%;
						display: inline-flex;
						justify-content: flex-end;
						list-style: none;
					}
					nav ul li {
						line-height: 2;
						padding-right: 15px;
						padding: 10px
					}
					nav ul li button {
						background: #3CB992;
						color: white;
						border-radius: 10px;
						padding: 5px 10px;
						border: none;
						margin: 0;
					}
					footer {
						background: #3CB992;
						padding: 20px;
						font-weight: 500;
						display: flex;
						justify-content: space-evenly;
						color: white;
						text-align: center;
					}
				`}</style>

			</>
		)
	}
}
