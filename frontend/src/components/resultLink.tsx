import React from "react";
import ResultLinkItem from "./resultLinkItem";
type resultLinkType = {};
const ResultLink: React.FC<resultLinkType> = () => {
     return (
          <div className="resultLink">
               <h1 className="resultLink__title">Результат</h1>
               <ResultLinkItem></ResultLinkItem>
               <ResultLinkItem></ResultLinkItem>
               <ResultLinkItem></ResultLinkItem>
               <ResultLinkItem></ResultLinkItem>
          </div>
     );
};
export default ResultLink;
