export interface gameInterface {
    id: number;
    name: string;
    description: string;
    cover: string;
    votes: number;
}

export interface bodyRequest {
    method: string;
    redirect: string;
}