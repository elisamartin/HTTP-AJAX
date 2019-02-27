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
		this.setState({ newFriend: { ...this.state.newFriend, [event.target.name]: event.target.value } });
	};

	addNewFriend = () => {
		const newFriend = this.state.newFriend;
		console.log(newFriend);
		axios
			.post('http://localhost:5000/friends', newFriend)
			.then((response) => {
				this.setState({ friends: response.data, newFriend: '' });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className="App-container">
				<FriendForm
					newFriend={this.state.newFriend}
					addNewFriend={this.addNewFriend}
					handleChanges={this.handleChange}
				/>
				<FriendsList
					friends={this.state.friends}
					newFriend={this.state.newFriend}
					addNewFriend={this.addNewFriend}
					handleChanges={this.handleChange}
				/>
			</div>
		);
	}
}

export default App;
