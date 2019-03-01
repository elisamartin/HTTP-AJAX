import React from 'react';

const FriendsList = (props) => {
	return (
		<div className="list-container">
			{props.friends.map((friend) => (
				<div className="friend-container" key={friend.id}>
					<p>Name: {friend.name}</p>
					<p>Age: {friend.age}</p>
					<p>Email: {friend.email}</p>
					<div>
						<button onClick={() => this.getCurrentFriend(props)}>Update</button>
						<button onClick={() => this.deleteFriend(props.id)}>Delete</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default FriendsList;
