import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPhotos} from '../../store/actions/actions_index';
import PhotoResults from '../PhotoResults/PhotoResults';

class Search extends Component {
	state = {
		searchText: '',
	}

	onInputChange = (event) => {
		this.setState({
			searchText: event.target.value
		});
	}

	onInputSubmit = (event) => {
		event.preventDefault();
		this.props.fetchPhotos(this.state.searchText);
		this.setState({
			searchText: ''
		})
	}

	render() {
		return (
			<div>
				<div>
					<TextField name='searchText' value={this.state.searchText} onChange={this.onInputChange} floatingLabelText="Search photos"/>
					<FlatButton label='Submit' primary={true} onClick={this.onInputSubmit} />
				</div>
				<div>
					<PhotoResults />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({fetchPhotos}, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);