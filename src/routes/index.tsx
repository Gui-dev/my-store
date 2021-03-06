import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ Home }/>
      <Route path="/cart" exact component={ Cart }/>
    </Switch>
  )
}
