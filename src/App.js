import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layouts/Layout';

/*Route is also a component.*/
function App() {
    /*path is the url after the domain i.e. after localhost:3000 f.ex
  path='/' is just the home path i.e no path*/
  
  // With routing te rendering of the page. i.e. how it looks depends on the path 
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;