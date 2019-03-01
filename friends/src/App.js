import React, { Component } from 'react';
import axios from 'axios';

import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [],
			currentFriend: {
				name: '',
				age: '',
				email: ''
			}
		};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/friends').then((res) => this.setState({ friends: res.data })).catch((err) => {
			console.log(err);
		});
	}

	addNewFriend = (friend) => {
		axios
			.post('http://localhost:5000/friends/', friend)
			.then((res) => {
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

	updateFriend = (id, friend) => {
		axios
			.put(`http://localhost:5000/friends/${id}`, friend)
			.then(() => {
				this.setState({
					currentFriend: { name: '', age: '', email: '', id: null }
				});
			})
			.catch((err) => console.log(err));
	};

	setCurrentFriend = (name, value) => {
		this.setState({
			currentFriend: {
				...this.state.currentFriend,
				[name]: value
			}
		});
	};

	getCurrentFriend = (friend) => {
		this.setState({ currentFriend: friend });
	};

	render() {
		const { friends } = this.state;
		return (
			<div className="App-container">
				<FriendForm
					{...this.props}
					addNewFriend={this.addNewFriend}
					updateFriend={this.updateFriend}
					setCurrentFriend={this.setCurrentFriend}
					friend={this.state.currentFriend}
				/>
				<div className="FriendsList">
					{friends.map((friend) => (
						<Friend
							key={friend.id}
							name={friend.name}
							age={friend.age}
							email={friend.email}
							id={friend.id}
							getCurrentFriend={this.getCurrentFriend}
							deleteFriend={this.deleteOldFriend}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
