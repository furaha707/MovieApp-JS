import {createRouter} from '../core/root'
import Home from "./Home";
import About from "./About";

// createRouter 함수에 데이터를 초기화하는곳!!!!!

export default createRouter([
  {path: '#/', component: Home},
  {path: '#/about', component: About}
])