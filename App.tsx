import {FC} from 'react'
import AppNavigator from './src/config/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';


const App:FC = () => {
  return (
    <Provider store={store}>
    <AppNavigator/>
    </Provider>
  )
}

export default App

