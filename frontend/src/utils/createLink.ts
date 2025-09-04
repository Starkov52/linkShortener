export const createLink = async (inputValue: string): Promise<string> => {
     try {
          const response: any = await fetch("http://localhost:3000/shortLink/send", {
               headers: {
                    "Content-Type": "application/json"
               },
               method: "POST",
               body: JSON.stringify({ url: inputValue })
          });
          const data: string = await response.json();
          return data;
     } catch (error: any) {
          console.error(error.message);
          return "";
     }
};
