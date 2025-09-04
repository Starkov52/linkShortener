import React from "react";
import { Button } from "@mui/material";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import LinkInfo from "./linkInfo";
import { useRef } from "react";
import { getStatistics } from "../utils/getStatistics";
import type { UserInfo } from "../type";
type resultLinkItemType = {
     originalUrl: string;
     shortUrl: string;
};
const ResultLinkItem: React.FC<resultLinkItemType> = ({ originalUrl, shortUrl }) => {
     const [isInfoOpen, setIsInfoOpen] = React.useState<boolean>(false);
     const linkRef = useRef<HTMLButtonElement | null>(null);
     const linkId: string = shortUrl.slice(shortUrl.length - 5, shortUrl.length);
     const handleCopyNewLink = (shortUrl: string) => {
          navigator.clipboard.writeText(shortUrl);
          if (!linkRef.current) {
               return;
          }

          linkRef.current.style.background = "gray";
          linkRef.current.style.fontSize = "13.2px";
          linkRef.current.textContent = "СКОПИРОВАНО";
          setTimeout(() => {
               if (!linkRef.current) {
                    return;
               }
               linkRef.current.style.background = "orange";
               linkRef.current.textContent = "КОПИРОВАТЬ";
               linkRef.current.style.fontSize = "15px";
          }, 5000);
     };
     const [linkData, setLinkData] = React.useState<
          {
               ip: string;
               region: string;
               browser: string;
               browserVersion: string;
               os: string;
          }[]
     >();
     const handleOpenLinkInfo = async () => {
          const data: UserInfo[] | [] = await getStatistics(linkId);
          if (!data) {
               return;
          }
          setLinkData([...data]);
          console.log(data);
          setIsInfoOpen((prev: boolean) => !prev);
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
                         ref={linkRef}
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
