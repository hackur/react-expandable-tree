import Client from './client.jsx'
import Collapse from 'react-collapse'
import Icon from './icon.jsx'
import React from 'react'

export default class Group extends React.Component {
	render() {
		const path = this.props.path + '.' + this.props.group.id
		const treeLevel = this.props.path.split('.').length - 1
		const padding = treeLevel * 15 + 5
		const bgCol = treeLevel * 23
		const expanded = this.props.expandedPaths.includes(path)

		const onExpand = () => this.props.onExpand(this.props.path, 'group', this.props.group.id, false)

		return (
			<div className={'group ' + (expanded ? 'expanded' : '')}>
				<div className="group-panel" style={expanded ? {'backgroundColor': '#' + bgCol + bgCol + bgCol} : {}}>
					<div className="group-caret" onClick={onExpand} style={{'paddingLeft': padding + 'px'}}>
						<Icon style={expanded === true ? 'caret-down' : 'caret-right'} />
					</div>
					<div className="group-header" onClick={onExpand}>
						{this.props.group.name}
					</div>
				</div>
				<Collapse isOpened={expanded}>
					{this.props.group.clients &&
						<div className="client-container">
							{this.props.group.clients.map((client) => {
								return (
									<Client key={client.id} userData={this.props.userData} client={client} path={path} expandedPaths={this.props.expandedPaths} onExpand={this.props.onExpand} />
								)
							})}
						</div>
					}
					<div className="group-container">
						{this.props.group.groups && this.props.group.groups.map((group) => {
							return (
								<Group key={group.id} userData={this.props.userData} group={group} path={path} expandedPaths={this.props.expandedPaths} onExpand={this.props.onExpand} />
							)
						})}
					</div>
				</Collapse>
			</div>
		)
	}
}