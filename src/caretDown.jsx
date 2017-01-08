import React from 'react'

class CaretDown extends React.Component {
	render() {
		return (
			<svg onClick={this.props.clickAction} viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg"><path className="arrow" d="M1536 832q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg>
		)
	}
}

export default CaretDown