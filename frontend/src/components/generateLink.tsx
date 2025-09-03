import React from "react";
import GenerateLinkInput from "./generateLinkInputSection";
import ResultLink from "./resultLink";
type GenerateLinkType = {};
const GenerateLink: React.FC<GenerateLinkType> = () => {
     const [inputValue, setInputValue] = React.useState<string>("");
     const [shortUrl, setShortUrl] = React.useState<string>("");
     React.useEffect(() => {
          inputValue.length === 0 ? setShortUrl("") : null;
     }, [inputValue]);
     return (
          <div className="generateLink">
               <h1 className="generateLink__title">Сократите свою ссылку в 1 клик</h1>
               <GenerateLinkInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setShortUrl={setShortUrl}
               ></GenerateLinkInput>
               {shortUrl &&
               shortUrl.startsWith("http") &&
               (inputValue.startsWith("http://") || inputValue.startsWith("https://")) ? (
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
