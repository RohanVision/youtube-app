import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from "./utils/store";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import './App.css';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider >
  );
}

export default App;
