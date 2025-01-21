import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from "./utils/store";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import './App.css';
import SearchVideoList from './components/SearchVideoList';

const appRouter = createBrowserRouter([{
  path: "/",
  element: (
    <>
      <Head />
      <Body />
    </>
  ),
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "search",
      element: <SearchVideoList />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="App overflow-x-hidden">
        <RouterProvider router={appRouter} />
      </div>
    </Provider >
  );
}

export default App;
