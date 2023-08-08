export default class Component{
  constructor(some = {}){
    const {tagName = 'div', state = {}, props = {}} = some
    this.el = document.createElement(tagName)
    this.tagName = tagName
    this.state = state
    this.props = props
    this.render()
  }
  render(){

  }
}