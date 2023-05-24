import List from "./components/list/List";
import Details from "./components/details/Details";
import './App.css';
import './components/list/List.css';
import './components/details/Details.css';
import { Context }  from "./context";
import { useState } from "react";
import { useEffect } from "react";



function App() {

  const listItemHandler = (id) => {
    const findUser = appState.users.find((item) => item.id === id);

    setDetailsState(prevState => ({
      ...prevState,
      show: detailsState.show = true,
      showId: detailsState.id = findUser.id,
      showName: detailsState.showName = findUser.name,
    }));
  };

  const initialAppState = {
    users: [],
    itemHandler: listItemHandler
  };

  const [detailsState, setDetailsState] = useState({
    show: false,
    showId: null,
    showName: null
  });
  const [appState, setAppState] = useState(initialAppState);

  

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then((responce) => responce.json())
        .then((data) => {
          setAppState(prevState => ({
                ...prevState,
                users: prevState.users = data,
            }));
        });
  }, []);

  return (
    <Context.Provider value={appState}>
      <div className="App">
        <div className="app-row-wrap">
          <div className="app-list-wrap">
            <List></List>
          </div>
        <div className="app-details-wrap">
          {detailsState.show && detailsState.showId ?  <Details info={{ id: detailsState.showId, name: detailsState.showName }}></Details> : null}
        </div>
        </div>
      
      </div>
    </Context.Provider>
    
  );
}


export default App;

