export enum SelectOptionsEnum {
    NA = '',
    YES = 'Yes',
    NO = 'No'
}

export class ActionCreator {
    type!: string;
    payload: any;
}

export class TodoItem {
    id!: number;
    userId!: number;
    title!: string;
    completed!: boolean;
}

export class User {
    id!: number;
    name!: string;
    username!: string;
    email!: string;
}

export class TodoPayLoad {
    todoList!: TodoItem[];
    error!: string;
}

export class UsersPayLoad {
    usersList!: User[];
    error!: string;
}

export class SearchFormData {
    searchKeyword!: string;
    completed!: SelectOptionsEnum;
}