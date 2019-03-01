import React from 'react';

class FriendForm extends React.Component {
	handleChange = (event) => {
		this.props.setCurrentFriend(event.target.name, event.target.value);
	};

	addOrUpdateFriend = (event) => {
		event.preventDefault();
		if (this.props.friend.id) {
			this.props.updateFriend(this.props.friend.id, this.props.friend);
		} else {
			this.props.addNewFriend(this.props.friend);
		}
	};

	render() {
		return (
			<div className="form-container">
				<form onSubmit={this.addOrUpdateFriend}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						onChange={this.handleChange}
						value={this.props.friend.name}
					/>
					<input
						type="number"
						name="age"
						placeholder="Age"
						onChange={this.handleChange}
						value={this.props.friend.age}
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						onChange={this.handleChange}
						value={this.props.friend.email}
					/>
					<button type="submit">{this.props.friend.id ? 'Update' : 'Add'}</button>
				</form>
			</div>
		);
	}
}

export default FriendForm;
