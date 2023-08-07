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

import Component from "./core/heropy";
import fruitItem from "./components/fruitItem";
// 상속은 확장 개념!

export class App extends Component {

  constructor(){
    super({
      state: {
        fruits: [
          {name : 'Apple', price: 1000},
          {name : 'Banana', price: 2000},
          {name : 'Cherry', price: 3000},
        ]
      }
    })
    
  }

  render(){

    this.el.innerHTML = 
    `
      <h1>Fruits</h1>
      <ul></ul>
    `
    //map과 filter 를 체이닝으로 사용할 수 있구나,,

    const ulEl = this.el.querySelector('ul')
    ulEl.append(
      ...this.state.fruits.map(fruit => new fruitItem({props: {name: fruit.name, price: fruit.price}}).el)
    )
    console.log(this.el)
  }
}