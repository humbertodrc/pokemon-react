import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import FourOFour from "../views/404";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route>
                    <FourOFour />
                </Route>
            </Switch>
        </Router>
    )
}
