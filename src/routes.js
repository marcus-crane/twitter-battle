import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import GetUserContainer from './containers/GetUserContainer'
import BattleContainer from './containers/BattleContainer'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user1" render={() =>
          ( <GetUserContainer header="Player 1" /> )
        } />
        <Route path="/user2/:user1" render={() =>
          ( <GetUserContainer header="Player 2" /> )
        } />
        <Route path="/battle" component={BattleContainer} />
      </Switch>
    </Router>
  )
}

export default Routes