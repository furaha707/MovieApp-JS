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

// 상속은 확장 개념!

export class App extends Component {

  constructor(){
    super({
      state: {
        inputText: ''
      }
    })
    
  }

  render(){
    this.el.classList.add('search')
    this.el.innerHTML = /* html */`
    <input />
    <button>Click!</button>
    `
   const inputEl = this.el.querySelector('input')
    console.log(this.tagName)
  
    inputEl.addEventListener('input', () => {
      this.state.inputText = inputEl.value
    })
    
    const buttonEl = this.el.querySelector('button')
    buttonEl.addEventListener('click', () => {
      console.log(this.state.inputText)
    })
  }
}