import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { fullLayout } from "./container";

export const routes = (
    <Switch>
        <Route path= '/' component= {fullLayout}></Route>
    </Switch>
);
