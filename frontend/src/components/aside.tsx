import React from "react";
import { FaLink } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";
import { Button } from "@mui/material";
import { TbBrandLinkedinFilled } from "react-icons/tb";
type AsideType = {};
const Aside: React.FC<AsideType> = () => {
     return (
          <aside className="aside">
               <TbBrandLinkedinFilled size={50} color="orange"></TbBrandLinkedinFilled>
               <button className="aside__createBtn"></button>
               <div className="aside__sections">
                    <Button className="aside__sectionsGenerateLink">
                         <RiAiGenerate
                              size={30}
                              color="black"
                              className="aside__sectionsGenerateLinkIcon"
                         ></RiAiGenerate>
                         <p className="aside__sectionsGenerateLinkText">Создать ссылку</p>
                    </Button>
                    <Button className="aside__sectionsAllLinks">
                         <FaLink
                              size={30}
                              color="black"
                              className="aside__sectionsAllLinksIcon"
                         ></FaLink>
                         <p className="aside__sectionsAllLinksText">Мои ссылки</p>
                    </Button>
               </div>
          </aside>
     );
};
export default Aside;
