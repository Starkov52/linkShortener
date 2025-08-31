import router from "express";
import { transitionLink } from "../controllers/linkTransition";
const routerForTransition = router();
routerForTransition.get("/:linkId", transitionLink);
export default routerForTransition;
