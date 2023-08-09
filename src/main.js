import {App} from "./App2";
import router from './routes/index'

const Root = document.querySelector('#root');
Root.append(new App().el)

router()
// 왜 함수처럼 실행해,,? createRouter() 함수 데이터 반환
// 페이지 관리하는 기능

