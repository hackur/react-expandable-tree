import React from 'react'

class User extends React.Component {
	render() {
		const indent = (this.props.path.split('.').length * 20) + 'px'

		return (
			<div className="user">
				<div className="user-panel" style={{paddingLeft: indent}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048"><path d="M1728 1533q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q9 0 42 21.5t74.5 48 108 48 133.5 21.5 133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"/></svg>
					<div className="fullname">
						<span className="last-name">{this.props.data.firstName}</span>
						<span className="first-name">{this.props.data.lastName}</span>
					</div>
					<div className="user-name">
						{this.props.data.userName}
					</div>
				</div>
			</div>
		)
	}
}

export default User