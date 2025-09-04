export type GenerateLinkInputType = {
     inputValue: string;
     setInputValue: React.Dispatch<React.SetStateAction<string>>;
     setShortUrl: React.Dispatch<React.SetStateAction<string>>;
     users?: UserInfo[];
};
export type UserInfo = {
     ip: string;
     region: string;
     browser: string;
     browserVersion: string;
     os: string;
};
export type ShortedLink = {
     shortLink: string;
     originalUrl: string;
};
export type User = {
     userLinks: ShortedLink[];
};
