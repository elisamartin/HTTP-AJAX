import React from 'react';

class FriendForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			email: ''
		};
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.props.addNewFriend(this.state);
	};

	render() {
		return (
			<div className="form-container">
				<form>
					<input type="text" name="name" placeholder="Name" onChange={this.changeHandler} />
					<input type="number" name="age" placeholder="Age" onChange={this.changeHandler} />
					<input type="text" name="email" placeholder="Email" onChange={this.changeHandler} />
					<button type="submit" onClick={this.submitHandler}>
						Add Friend
					</button>
				</form>
			</div>
		);
	}
}

export default FriendForm;
