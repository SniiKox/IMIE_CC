import React from 'react'

const Home = () => (
	<>
		<header>
			<div className="headline">
				<img src="/phone.png" alt=""/>
				<div className="pub">
					<h1>Blablabla</h1>
					<p>Loerm bitsum Loerm bitsum <br/>Loerm bitsumLoerm bitsum <br/>Loerm bitsumLoerm bitsum</p>
					<div className="buttons">
						<button className="shite" >Télécharger</button>
						<button className="outline">En savoir plus</button>
					</div>
				</div>
			</div>
		</header>
		<div className="pouet">
			<h2>Lorem Ipsum</h2>
			<div className="els">
			<div className="el">
				<img src="/icon-montagne.svg" alt=""/>
				<h3>Lorem Ipsum</h3>
				<div>Loerm bitsum Loerm bitsum <br/>Loerm bitsumLoerm bitsum <br/>Loerm bitsumLoerm bitsum</div>
			</div>
			<div className="el">
				<img src="/icon-mobile.svg" alt=""/>
				<h3>Lorem Ipsum</h3>
				<div>Loerm bitsum Loerm bitsum <br/>Loerm bitsumLoerm bitsum <br/>Loerm bitsumLoerm bitsum</div>
			</div>
			<div className="el">
				<img src="/icon-repaires.svg" alt=""/>
				<h3>Lorem Ipsum</h3>
				<div>Loerm bitsum Loerm bitsum <br/>Loerm bitsumLoerm bitsum <br/>Loerm bitsumLoerm bitsum</div>
			</div>
		</div>
	</div>
	<div className="pokemon">
		<div className="pk1">
			<h2>N'attendez pas !</h2>
			<p>Télécharger l'application</p>
		</div>
		<div>
			<img src="/app-store.svg" alt=""/>
			<img src="/google-play.svg" alt=""/>
		</div>
	</div>
			<style jsx>{`
				.black {
					background: #3CB992;
					padding: 20px;
					font-weight: 500;
				}
				img {
					display: inline-block;
				}
				.green {
					display: inline-block;
				}
				button {
					border-radius: 10px;
					padding: 7px 10px;
					margin: 10px;
					border: none;
					color: white;
				}

				button.shite {
					background: white;
					color: black;
				}

				button.outline {
					box-shadow: inset 0 0 0 3px white;
					background: none;
				}


				// Header
				header {
					height: 700px;
					width: 100%;
					position: relative;
					background-image: url('/baniere@2x.png');
					background-size: cover;
					color: white;
				}
				header > img {
					max-width: 100%;
					max-height: 100%;
				}

				header .headline {
					position: absolute;
					top: 20%;
					left: 0%;
					display: flex;
					flex-direction: row;
					margin-left: 20%;
					align-items: center;
				}

				.headline .pub {
					flex-grow: 1;
				}

				.headline .pub h1 {
					font-size: 50px;
				}

				.headline .headline img {
					margin-right: 20px;
					width: 50px;
				}


				// Content

				.pouet h2 {
					width: 100%;
					text-align: center;
					font-size: 40px;
					color: white;
				}

				.els {
					display: flex;
					justify-content: space-evenly;
					color: white;
					text-align: center;
				}

				.el h3 {
					font-size: 20px;
				}

				.pouet {
					padding: 50px 20px;
					background: url('/photo-filtre.png');
					background-position: center center;
					background-size: cover;
				}

				.pokemon {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: 50px;
					background: #333;
				}

				.pk1 * {
					font-size: 25px;
					text-align: initial;
					color: white;
					margin: 0;
					padding: 0;
				}
				.pk1 p {
					font-weight: 700;
					font-size: 30px;
				}

			`}</style>
	</>
)

export default Home
