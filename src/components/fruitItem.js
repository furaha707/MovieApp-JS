import Component from "../core/Root";

export default class fruitItem extends Component {
  constructor(payload){
    super({
      tagName : 'li',
      props: payload.props
    })
  }
  render(){
    this.el.innerHTML = 
    `
    <span>${this.props.name}</span>
    <span>${this.props.price}</span>
    `
    this.el.addEventListener('click', () => {
      console.log(this.props.name, this.props.price)
    });
  }
}