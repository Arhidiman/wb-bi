import {Route, Routes} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import { Dashboard } from "../../pages/dashboard";
import { routes } from "../constants";

export const AppRouter = () => {


    return (
        <Router>
      
            <Routes>
                {/* <Route path={routes.start} element={<Main/>}/>
                <Route path={routes.main} element={<AuthPage/>}/>
                <Route path={routes.auth} element={<FiltersPage/>}/> */}
                <Route path={routes.dashboard} element={<Dashboard/>}/>
                {/* <Route path={routes.buyings} element={<BuyingsPage/>}/> */}
            </Routes>
        </Router>
    )
}