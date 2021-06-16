import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/home" exact >
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
