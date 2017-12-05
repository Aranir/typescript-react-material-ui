import * as React from "react";
import {Route, Switch, withRouter} from "react-router";
import {Hello} from "./Hello";
import {History} from 'history'
import {Location} from "history"
import TestComponent from "./components/TestComponent";





interface AppProps {
  location: Location
  history: History;

}



class App extends React.Component<AppProps, {}> {


  render() {
    return (<div>
      <Switch>
        <Route path="/" exact={true} component={Hello}/>
        <Route path="/test" exact={true} component={TestComponent}/>
        <Route/>
      </Switch>
    </div>
    )
  }

}

export default withRouter(props => <App {...props} />);
