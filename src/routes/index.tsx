import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home }/>
      <Route path="/cart" exact component={ Cart }/>
    </BrowserRouter>
  )
}
