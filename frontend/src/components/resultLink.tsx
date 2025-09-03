import React from "react";
import ResultLinkItem from "./resultLinkItem";
import type { ShortedLink } from "../state/userSlice";
type resultLinkType = {
     type: "CREATE" | "USERLINKS";
     links: ShortedLink[];
};
const ResultLink: React.FC<resultLinkType> = ({ type, links }) => {
     return (
          <div className="resultLink">
               <h1 className="resultLink__title">
                    {type === "CREATE" ? "Результат" : "Мои ссылки"}
               </h1>
               <h3 style={{ fontSize: "20px" }}>
                    {type === "USERLINKS" && links.length === 0 ? "Ссылок нет." : ""}
               </h3>
               {links.map((item: ShortedLink, index) => {
                    return (
                         <ResultLinkItem
                              key={index}
                              originalUrl={item.originalUrl}
                              shortUrl={item.shortLink}
                         ></ResultLinkItem>
                    );
               })}
          </div>
     );
};
export default ResultLink;
