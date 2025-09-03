import React from "react";
import { GrNavigate } from "react-icons/gr";
import { BsBrowserChrome } from "react-icons/bs";
import { FaClipboardUser } from "react-icons/fa6";
import { FaWindows } from "react-icons/fa";

type LinkInfoProps = {
     users: {
          ip: string;
          region: string;
          browser: string;
          browserVersion: string;
          osName: string;
     }[];
};

const LinkInfo: React.FC<LinkInfoProps> = ({ users }) => {
     return (
          <div className="linkInfo">
               {users ? (
                    users.map((item, index) => (
                         <div className="linkInfo__user" key={index}>
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
                                   <span className="linkInfo__value">{item.osName}</span>
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
