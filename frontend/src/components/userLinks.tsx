import React from "react";
import ResultLink from "./resultLink";
import { useSelector } from "react-redux";
import type { ShortedLink } from "../state/userSlice";

import type { RootState } from "../state/store";
type UserLinks = {};
const UserLinks: React.FC<UserLinks> = () => {
     const links: ShortedLink[] = useSelector((state: RootState) => state.userSlice.userLinks);
     return (
          <div className="userLinks">
               <ResultLink links={links} type={"USERLINKS"}></ResultLink>
          </div>
     );
};
export default UserLinks;
