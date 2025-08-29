import router from "express";
const routerForCutLink = router();
routerForCutLink.get("/", cutLinkController);
export default routerForCutLink;
