export interface IPResponse {
    About_Us: string;
    ip: string;
    success: boolean;
    type: string;
    continent: string;
    continent_code: string;
    country: string;
    country_code: string;
    region: string;
    region_code: string;
    city: string;
    latitude: number;
    longitude: number;
    is_eu: boolean;
    postal: string;
    calling_code: string;
    capital: string;
    borders: string;
    flag: {
        img: string;
        emoji: string;
        emoji_unicode: string;
    };
    connection: {
        asn: number;
        org: string;
        isp: string;
        domain: string;
    };
    timezone: {
        id: string;
        abbr: string;
        is_dst: boolean;
        offset: number;
        utc: string;
        current_time: string;
    };
}
export interface LinkInfo {
    id: number;
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
