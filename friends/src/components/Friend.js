import React from 'react';

const Friend = (props) => {
	const { id, name, age, email, deleteFriend, getCurrentFriend } = props;
	return (
		<div>
			<p>Name: {name}</p>
			<p>Age: {age}</p>
			<p>Email: {email}</p>
			<div>
				<button onClick={() => getCurrentFriend({ id, name, age, email })}>Update</button>
				<button onClick={() => deleteFriend(id)}>Delete</button>
			</div>
		</div>
	);
};

export default Friend;
