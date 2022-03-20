import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home/Home';


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/detail/:id" component={Detail} />
            </Switch>
        </Router>
    )
}

export default AppRouter;