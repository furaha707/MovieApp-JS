export default class Component {
  constructor(some = {}){
    // 구조분해할당인데, tagName 기본값 바로 할당
    const {
      tagName = 'div', 
      state = {},
      props = {}
    } = some
    this.el = document.createElement(tagName)
    this.tagName = tagName
    this.state = state
    this.props = props
    this.render();
  }
  render(){

  }
}