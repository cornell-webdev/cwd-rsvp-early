import { GlueProvider } from 'cornell-glue-ui'
import React, { Suspense } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import history from './util/history'

function App() {
  return (
    <Router history={history}>
      <GlueProvider>
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Suspense>
      </GlueProvider>
    </Router>
  )
}

export default App
