import React from "react";
import { GrNavigate } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";
import { FaClipboardUser } from "react-icons/fa6";
import { FaWindows } from "react-icons/fa";
import type { UserInfo } from "../type";
type LinkInfoProps = {
     users: UserInfo[];
};

const LinkInfo: React.FC<LinkInfoProps> = ({ users }) => {
     return (
          <div className="linkInfo">
               {users.length >= 1 ? (
                    users.map((item: UserInfo, index: number) => (
                         <div className="linkInfo__user" key={index}>
                              <span>ID: {index}</span>
                              <div className="linkInfo__row">
                                   <FaClipboardUser className="linkInfo__icon" />
                                   <span className="linkInfo__label">IP:</span>
                                   <span className="linkInfo__value">{item.ip}</span>
                              </div>
                              <div className="linkInfo__row">
                                   <GrNavigate className="linkInfo__icon" />
                                   <span className="linkInfo__label">Region:</span>
                                   <span className="linkInfo__value">{item.region}</span>
                              </div>
                              <div className="linkInfo__row">
                                   <BsBrowserChrome className="linkInfo__icon" />
                                   <span className="linkInfo__label">Browser:</span>
                                   <span className="linkInfo__value">
                                        {item.browser} {item.browserVersion}
                                   </span>
                              </div>
                              <div className="linkInfo__row">
                                   <FaWindows className="linkInfo__icon" />
                                   <span className="linkInfo__label">OS:</span>
                                   <span className="linkInfo__value">{item?.os!}</span>
                              </div>
                         </div>
                    ))
               ) : (
                    <p>Данных нету</p>
               )}
          </div>
     );
};

export default LinkInfo;
