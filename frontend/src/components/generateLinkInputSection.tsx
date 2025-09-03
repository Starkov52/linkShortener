import React from "react";
import type { RootDispatch } from "../state/store";
type GenerateLinkInputType = {
     inputValue: string;
     setInputValue: React.Dispatch<React.SetStateAction<string>>;
     setShortUrl: React.Dispatch<React.SetStateAction<string>>;
};
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewShortedLink } from "../state/userSlice";

const GenerateLinkInput: React.FC<GenerateLinkInputType> = ({
     inputValue,
     setInputValue,
     setShortUrl
}) => {
     const [inputError, setInputError] = React.useState<boolean>(false);
     const dispatch: RootDispatch = useDispatch();
     const handleChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
          const value: string = event.target.value;

          setInputValue(value);
     };
     const handleGenerateLink = async () => {
          try {
               if (!inputValue.startsWith("http") || !inputValue.startsWith("https")) {
                    setInputError(true);
                    return;
               }
               const response: any = await fetch("http://localhost:3000/shortLink/send", {
                    headers: {
                         "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({ url: inputValue })
               });
               const data = await response.json();
               setShortUrl(data);
               setInputError(false);
               dispatch(addNewShortedLink({ link: { shortLink: data, originalUrl: inputValue } }));
          } catch (error: any) {
               console.error(error.message);
          }
     };
     return (
          <div className="generateLink__inputSection">
               <div className="generateLink__inputSectionInner">
                    <input
                         value={inputValue}
                         style={{
                              border: inputError ? "3px solid red" : "none"
                         }}
                         onChange={(event) => handleChangeLink(event)}
                         placeholder="Например: https://www.youtube.com/"
                         type="text"
                         className="generateLink__inputSectionInnerInput"
                    ></input>
                    <Button
                         sx={{
                              background:
                                   "linear-gradient(92.9deg, rgba(255, 192, 0, .2) .24%, rgba(240, 105, 102, .2)), #ffecb2",
                              borderBottomRightRadius: "7px",
                              borderTopRightRadius: "7px",
                              borderBottomLeftRadius: "0px",
                              borderTopLeftRadius: "0px",
                              color: "black",
                              fontWeight: 700,
                              fontSize: "15px"
                         }}
                         type="button"
                         className="generateLink__inputSectionInnerBtn"
                         onClick={() => handleGenerateLink()}
                    >
                         Создать
                    </Button>
               </div>
          </div>
     );
};
export default GenerateLinkInput;
