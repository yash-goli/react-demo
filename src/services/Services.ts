import axios from "axios";
import { TodoItem } from "models/Interfaces";

async function getData(): Promise<TodoItem[]> {
    try {
        const response = await axios.get<TodoItem[]>(`https://jsonplaceholder.typicode.com/todos`);
        return response.data;
    } catch(e) {
        console.log(e);
        throw e;
    }
}

export default getData;