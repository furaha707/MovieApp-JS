import Component from "../core/Root";

export default class TheHeader extends Component {
  constructor(){
    super({
      tagName: 'header'
    })
  }
  render(){
    this.el.innerHTML = `
      <a href="#/">Main!</a>
      <a href="#/about">About!</a>
    `
  }
}