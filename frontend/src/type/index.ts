export interface LinkInfo {
     originalUrl: string;
     shortUrl: string;
}
export interface UserDataType {
     date: string;
     ip: string | null;
     region: string | null;
     browser: string | null;
     os: string;
}
export interface ShortLinkType {
     id: number;
     originalUrl: string;
     shortUrl: string;
     users: UsersDataType[];
}
export interface UsersDataType {
     id: number;
     date: string;
     ip: string | null;
     region: string | null;
     browser: string | null;
     os: string | null;
     shortLinkId: number;
}
