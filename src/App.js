
import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Designcomponent from './design';
import {AboutUs}  from './design';
import { Admin } from './design';
import { Student } from './design';
import { Branches } from './design';
import {Contactus} from './design';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={(props) =>(<Designcomponent props={props}/>)}/>
          <Route exact path="/Admin" component={()=>(<Admin/>)}/>
          <Route exact path="/Student" component={()=>(<Student/>)}/>
          <Route exact path="/Aboutus" component={() => (<AboutUs/>)}/>
          <Route exact path="/Branches" component={() => (<Branches />)}/>
          <Route exact path="/Contactus" component={() => (<Contactus/>)}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}
