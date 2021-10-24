import { Route, Switch } from "react-router-dom"
import { Logbook } from "../logbook"

export const Content = () => {
  return (
    <Switch>
      <Route path={"/account"}>account</Route>
      <Route path={"/vps"}>vps</Route>
      <Route path={"/domains"}>domains</Route>
      <Route path={"/logbook"}>
        <Logbook />
      </Route>
    </Switch>
  )
}
