import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import PokeDetail from "../views/PokeDetail";
import FourOFour from "../views/404";
import ScrollToTop from "../components/ScrollToTop";

export default function Routes() {

    

    return (
        <Router>
            {/* para restrablecer el scroll creamos un componente */}
            <ScrollToTop />
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route path="/pokemon/:id">
                    <PokeDetail />
                </Route>
                <Route>
                    <FourOFour />
                </Route>
            </Switch>
        </Router>
    )
}
