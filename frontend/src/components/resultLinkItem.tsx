import React from "react";
import { ButtonGroup, Button } from "@mui/material";
type resultLinkItemType = {};
const ResultLinkItem: React.FC<resultLinkItemType> = () => {
     return (
          <div className="resultLinkItem">
               <span className="resultLinkItem__id"></span>
               <ButtonGroup>
                    <Button className="resultLinkItem__links">
                         <span className="resultLinkItem__newLink"></span>
                         <span className="resultLinkItem__originalLink"></span>
                    </Button>
                    <Button className="resultLinkItem__button"></Button>
               </ButtonGroup>
          </div>
     );
};
export default ResultLinkItem;
