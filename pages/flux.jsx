import React from 'react'
import FluxItem from '../components/FluxItem'

const fakeData = [{
	pseudo: 'Avior',
	path: '/baniere@2x.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/photo-filtre.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/Rectangle 6.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},{
	pseudo: 'Avior',
	path: '/phone.png',
	location: 'Chateau de la madame'
},]

export default class Flux extends React.Component {

	static getInitialProps(ctx) {
		return {data: fakeData}
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
