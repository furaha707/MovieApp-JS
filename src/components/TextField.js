import Component from "../core/root";
import messageStore from "../store/message"

export default class TextField extends Component {
  render(){
    // getter 실행
    this.el.innerHTML = /*html*/ `
      <input value="${messageStore.state.message}" />
    `
    // setter 실행
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      messageStore.state.message = inputEl.value
    })
  }
}