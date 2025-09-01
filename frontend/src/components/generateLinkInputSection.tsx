import React from "react";
type GenerateLinkInputType = {};
const GenerateLinkInput: React.FC<GenerateLinkInputType> = () => {
     return (
          <div className="generateLink__inputSection">
               <div className="generateLink__inputSectionInner">
                    <input type="text" className="generateLink__inputSectionInnerInput"></input>
                    <input type="button" className="generateLink__inputSectionInnerBtn"></input>
               </div>
          </div>
     );
};
export default GenerateLinkInput;
