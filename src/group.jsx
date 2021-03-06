import './style.scss'
import React, {PropTypes} from 'react'
import Client from './client.jsx'
import Collapse from 'react-collapse'
import Icon from './icon.jsx'
import cn from 'classnames'

export default class Group extends React.Component {

	render() {
		const path = this.props.path + '.' + this.props.group.id
		const treeLevel = this.props.path.split('.').length - 1
		const indent = (treeLevel * 15) + 5
		const expanded = this.props.expandedPaths.includes(path)
		const selected = this.props.selectedPath === path

		let headerCssClass = ''
		if (selected) {
			headerCssClass = 'expandable-tree__group-panel--selected'
		} else if (expanded) {
			headerCssClass = 'expandable-tree__group-panel--expanded-level' + treeLevel
		}

		return (
			<div className="expandable-tree__group" data-expanded={expanded}>
				<div
					className={cn('expandable-tree__group-panel', headerCssClass)}
					onClick={() => this.props.onExpand(this.props.path, 'group', this.props.group.id)}
				>
					<div className="expandable-tree__group-caret" style={{'paddingLeft': indent + 'px'}}>
						<Icon style={expanded ? 'caret-down' : 'caret-right'}/>
					</div>
					<div className="expandable-tree__group-header">{this.props.group.name}</div>
				</div>
				<Collapse isOpened={expanded} hasNestedCollapse={true}>
					{this.props.group.clients &&
						<div className="expandable-tree__client-container">
							{this.props.group.clients.map((client) =>
								<Client
									key={client.id}
									userData={this.props.userData}
									client={client}
									path={path}
									selectedPath={this.props.selectedPath}
									expandedPaths={this.props.expandedPaths}
									onExpand={this.props.onExpand}
								/>
							)}
						</div>
					}
					{this.props.group.groups &&
					<div className="expandable-tree__group-container">
						{this.props.group.groups.map((group) =>
							<Group
								key={group.id}
								userData={this.props.userData}
								group={group}
								path={path}
								selectedPath={this.props.selectedPath}
								expandedPaths={this.props.expandedPaths}
								onExpand={this.props.onExpand}
							/>
						)}
					</div>
					}
				</Collapse>
			</div>
		)
	}
}

Group.propTypes = {
	expandedPaths: PropTypes.array,
	group: PropTypes.object,
	onExpand: PropTypes.func,
	path: PropTypes.string,
	selectedPath: PropTypes.string,
	userData: PropTypes.array,
}