import { User } from "../models/user_model";

const getUsers = async (): Promise<User[]> => {

    const url = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(url);

    if (res.ok) {
        const userData: User[] = await res.json();
        return userData;
    } else {
        throw new Error('Something went wrong')
    }
};
const getUserById = async (id: string): Promise<User> => {

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await fetch(url);

    if (res.ok) {
        const userData: User = await res.json();
        return userData;
    } else {
        throw new Error('Something went wrong')
    }
};

export { getUsers, getUserById };