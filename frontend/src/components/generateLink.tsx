import React from "react";
import GenerateLinkInput from "./generateLinkInputSection";
import ResultLink from "./resultLink";
type GenerateLinkType = {};
const GenerateLink: React.FC<GenerateLinkType> = () => {
     return (
          <div className="generateLink">
               <h1 className="generateLink__title">Сократите свою в 1 клик!</h1>
               <GenerateLinkInput></GenerateLinkInput>
               <ResultLink></ResultLink>
          </div>
     );
};
export default GenerateLink;
