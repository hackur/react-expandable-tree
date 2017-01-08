import React from 'react'

class CaretRight extends React.Component {
	render() {
		return (
			<svg onClick={this.props.clickAction} viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg"><path d="M1280 1024q0 26-19 45l-448 448q-19 19-45 19t-45-19-19-45v-896q0-26 19-45t45-19 45 19l448 448q19 19 19 45z"/></svg>
		)
	}
}

export default CaretRight