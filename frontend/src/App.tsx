import "./css/main.css";
import GenerateLink from "./components/generateLink";
import Aside from "./components/aside";
import UserLinks from "./components/userLinks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./state/store";
import { Provider } from "react-redux";
function App() {
     return (
          <div className="wrapper">
               <Provider store={store}>
                    <BrowserRouter>
                         <Aside></Aside>
                         <Routes>
                              <Route path="/" element={<GenerateLink></GenerateLink>}></Route>
                              <Route path="/userLinks" element={<UserLinks></UserLinks>}></Route>
                         </Routes>
                    </BrowserRouter>
               </Provider>
          </div>
     );
}

export default App;
