import { Provider } from 'react-redux';
import store from './store/store';

import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import './App.css';

function App()
{
  return (
    <Provider store={ store }>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
