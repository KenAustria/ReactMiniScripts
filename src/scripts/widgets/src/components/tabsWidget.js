import React, {Component} from 'react';

class Headers extends Component {
	render() {
		const selected = this.props.selectedPane;
		const headers = this.props.panes.map((pane, index) => {
			const title = pane.title;
			const activePane = index === selected ? 'active' : '';

			return (
				<li key={index} className={activePane} onClick={() => this.props.onTabChosen(index)}>
					{title}{' '}
				</li>
			);
		});
		return(
			<ul className="tab-header">
				{headers}
			</ul>
		);
	}
}

class TabsWidget extends Component {
	state = {
		selectedPane: 0
	}

	selectTabHandler = (num) => {
		this.setState({selectedPane: num})
	}

	render(){
		const pane = this.props.panes[this.state.selectedPane]
		return(
			<div>
				<h1>Tabs</h1>
				<div className="tabs">
					<Headers selectedPane={this.state.selectedPane} onTabChosen={this.selectTabHandler} panes={this.props.panes} />
					<div className="tab-content">
						<article>
							{pane.content}
						</article>
					</div>
				</div>
			</div>
		);
	}
}

export default TabsWidget;