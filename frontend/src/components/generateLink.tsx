import React from "react";
import GenerateLinkInput from "./generateLinkInputSection";
import ResultLink from "./resultLink";
const GenerateLink = () => {
     const [inputValue, setInputValue] = React.useState<string>("");
     const [shortUrl, setShortUrl] = React.useState<string>("");
     React.useEffect(() => {
          inputValue.length === 0 ? setShortUrl("") : null;
     }, [inputValue]);
     const handleCheckValue = (shortUrl: string, inputValue: string): boolean => {
          return (
               !!shortUrl &&
               shortUrl.startsWith("http") &&
               (inputValue.startsWith("http://") || inputValue.startsWith("https://"))
          );
     };
     return (
          <div className="generateLink">
               <h1 className="generateLink__title">Сократите свою ссылку в 1 клик</h1>
               <GenerateLinkInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setShortUrl={setShortUrl}
               ></GenerateLinkInput>
               {handleCheckValue(shortUrl, inputValue) ? (
                    <ResultLink
                         links={[
                              {
                                   shortLink: shortUrl,
                                   originalUrl: inputValue
                              }
                         ]}
                         type="CREATE"
                    ></ResultLink>
               ) : null}
          </div>
     );
};
export default GenerateLink;
