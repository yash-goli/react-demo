import axios from "axios";
import {TodoItem, User} from "models/interfaces";

export async function getData(userId: string): Promise<TodoItem[]> {
    try {
        const response = await axios.get<TodoItem[]>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        return response.data;
    } catch(e) {
        console.log(e);
        throw e;
    }
}

export async function getUsers(): Promise<User[]> {
    try {
        const response = await axios.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
        return response.data;
    } catch(e) {
        console.log(e);
        throw e;
    }
}