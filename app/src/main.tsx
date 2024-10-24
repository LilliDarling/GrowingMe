import { AppRegistry } from 'react-native'
import './index.css'
import App from './App.tsx'


AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
});