import { FaLink } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";
import { Button } from "@mui/material";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Aside = () => {
     return (
          <aside className="aside">
               <TbBrandLinkedinFilled size={50} color="orange"></TbBrandLinkedinFilled>
               <Link to="/">
                    <button className="aside__createBtn">Создать ссылку</button>
               </Link>
               <div className="aside__sections">
                    <Button
                         sx={{
                              justifyContent: "flex-start"
                         }}
                         className="aside__sectionsGenerateLink"
                    >
                         <RiAiGenerate
                              size={30}
                              color="black"
                              className="aside__sectionsGenerateLinkIcon"
                         ></RiAiGenerate>
                         <Link to="/" className="aside__sectionsGenerateLinkText">
                              Создать ссылку
                         </Link>
                    </Button>
                    <Button
                         sx={{
                              justifyContent: "flex-start"
                         }}
                         className="aside__sectionsAllLinks"
                    >
                         <FaLink
                              size={30}
                              color="black"
                              className="aside__sectionsAllLinksIcon"
                         ></FaLink>
                         <Link to="/userLinks" className="aside__sectionsAllLinksText">
                              Мои ссылки
                         </Link>
                    </Button>
               </div>
          </aside>
     );
};
export default Aside;
