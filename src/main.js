import {App} from "./App2";
import router from './routes/index'

const Root = document.querySelector('#root');
Root.append(new App().el)

router()
// createRouter() 가 반환한 함수 데이터

