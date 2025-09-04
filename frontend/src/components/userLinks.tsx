import ResultLink from "./resultLink";
import { useSelector } from "react-redux";
import type { ShortedLink } from "../type/index";
import type { RootState } from "../state/store";
const UserLinks = () => {
     const links: ShortedLink[] = useSelector((state: RootState) => state.userSlice.userLinks);
     return (
          <div className="userLinks">
               <ResultLink links={links} type={"USERLINKS"}></ResultLink>
          </div>
     );
};
export default UserLinks;
