// export default class App {
//   constructor(){
//     this.el = document.createElement('div')
//     this.el.textContent = 'Hello World'
//     this.render();
//   }
//   // 프로토타입 부분
//   render(){
//     // 비워둠
//   }
// }

import Component from "./core/root";
import TheHeader from "./components/TheHeader";
// 상속은 확장 개념!


export class App extends Component {
  render(){
    const routerView = document.createElement('router-view')
    this.el.append(
      new TheHeader().el, routerView
    )
  }
}