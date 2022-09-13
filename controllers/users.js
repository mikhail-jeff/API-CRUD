import { v4 as uuidv4 } from "uuid";

let users = [];

// GET ALL
export const getUsers = (req, res) => {
	res.send(users);
};
// CREATE
export const createUser = (req, res) => {
	const user = req.body;

	users.push({ ...user, id: uuidv4() });

	res.send(`User with the name ${user.firstName} has been added to the database!`);
};
// GET BY ID
export const getUser = (req, res) => {
	const { id } = req.params;

	const foundUser = users.find((user) => user.id === id);

	res.send(foundUser);
};
// DELETE
export const deleteUser = (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id !== id);

	res.send(`User with the ID: ${id} has been deleted from the database!`);
};
// UPDATE
export const updateUser = (req, res) => {
	const { id } = req.params;

	const { firstName, lastName, age } = req.body;

	const user = users.find((user) => user.id === id);

	if (firstName) user.firstName = firstName;
	if (lastName) user.lastName = lastName;
	if (age) user.age = age;

	res.send(`User with the ID: ${id} has been updated!`);
};
