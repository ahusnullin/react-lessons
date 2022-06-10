export interface UserInterface {
    name: string;
    avatar: string;
}

export interface MessageInterface {
    author: UserInterface;
    text: string;
}