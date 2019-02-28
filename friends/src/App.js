import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/friends').then((res) => this.setState({ friends: res.data })).catch((err) => {
			console.log(err);
		});
	}

	handleChange = (event) => {
		this.setState((prevState) => {
			return {
				newFriend: {
					...prevState.newFriend,
					[event.target.name]: event.target.value
				}
			};
		});
	};

	addNewFriend = (friend) => {
		axios
			.post('http://localhost:5000/friends/', friend)
			.then((res) => {
				console.log(res);
				this.setState({
					friends: res.data
				});
			})
			.catch((err) => console.log(err));
	};

	deleteOldFriend = (id) => {
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then((res) => {
				this.setState({ friends: res.data });
			})
			.catch((err) => {
				console.log('Error', err);
			});
	};

	render() {
		return (
			<div className="App-container">
				<FriendForm {...this.props} addNewFriend={this.addNewFriend} handleChanges={this.handleChange} />
				<FriendsList friends={this.state.friends} deleteFriend={this.deleteOldFriend} />
			</div>
		);
	}
}

export default App;
