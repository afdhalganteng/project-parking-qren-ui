export interface Session {
    user?: User;
}

export interface User {
    merchantApiKey: string,
    email: string,
    nama: string;
    password: string;
    token: string;
}
