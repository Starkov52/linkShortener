import type { GenerateLinkInputType, UserInfo } from "../type";
export const getStatistics = async (linkId: string): Promise<UserInfo[]> => {
     try {
          const response = await fetch(`http://localhost:3000/shortLink/statistics/${linkId}`, {
               headers: {
                    "Content-Type": "application/json"
               },
               method: "GET"
          });
          const data: GenerateLinkInputType = await response.json();
          return data.users || [];
     } catch (error) {
          console.error(error);
          return [];
     }
};
