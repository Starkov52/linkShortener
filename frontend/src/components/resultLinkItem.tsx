import React from "react";
import { Button } from "@mui/material";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import LinkInfo from "./linkInfo";
type resultLinkItemType = {
     originalUrl: string;
     shortUrl: string;
};
const ResultLinkItem: React.FC<resultLinkItemType> = ({ originalUrl, shortUrl }) => {
     const [isInfoOpen, setIsInfoOpen] = React.useState<boolean>(false);
     const linkId: string = shortUrl.slice(shortUrl.length - 5, shortUrl.length);
     const handleCopyNewLink = (shortUrl: string) => {
          navigator.clipboard.writeText(shortUrl);
     };
     const [linkData, setLinkData] = React.useState<
          {
               ip: string;
               region: string;
               browser: string;
               browserVersion: string;
               osName: string;
          }[]
     >();
     const handleOpenLinkInfo = () => {
          setIsInfoOpen((prev: boolean) => !prev);
          (async () => {
               if (isInfoOpen) {
                    try {
                         const response = await fetch(
                              `http://localhost:3000/shortLink/statistics/${linkId}`,
                              {
                                   headers: {
                                        "Content-Type": "application/json"
                                   },
                                   method: "GET"
                              }
                         );
                         const data = await response.json();
                         console.log();
                         setLinkData([...data.users]);
                    } catch (error) {
                         console.error(error);
                    }
               }
          })();
     };

     return (
          <>
               <div className="resultLinkItem">
                    {!isInfoOpen ? (
                         <MdOutlineArrowDropDownCircle
                              size={30}
                              color="black"
                              className="resultLinkItem__info"
                              onClick={() => handleOpenLinkInfo()}
                         ></MdOutlineArrowDropDownCircle>
                    ) : (
                         <IoMdArrowDropupCircle
                              size={30}
                              color="black"
                              className="resultLinkItem__info"
                              onClick={() => handleOpenLinkInfo()}
                         ></IoMdArrowDropupCircle>
                    )}
                    <Button
                         onClick={() => handleOpenLinkInfo()}
                         className="resultLinkItem__wrapper"
                    >
                         <FaCircleInfo size={33} color="orange"></FaCircleInfo>

                         <div className="resultLinkItem__links">
                              <span className="resultLinkItem__newLink">{shortUrl}</span>
                              <span className="resultLinkItem__originalLink">{originalUrl}</span>
                         </div>
                    </Button>
                    <Button
                         onClick={() => handleCopyNewLink(shortUrl)}
                         sx={{
                              background: "orange",
                              height: "5vh",
                              color: "white",
                              fontWeight: 750,
                              fontSize: "15px"
                         }}
                         className="resultLinkItem__button"
                    >
                         Копировать
                    </Button>
               </div>
               {isInfoOpen ? <LinkInfo users={linkData!}></LinkInfo> : null}
          </>
     );
};
export default ResultLinkItem;
