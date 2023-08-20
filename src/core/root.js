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
    // ...
  }
}

// [{path: '#/', component: Home}, 
// {path: '#/about', component: About}]

function routeRender(routes){

  // 해쉬가 없는 경우를 위해 해쉬가 없어도 해쉬 붙게끔
  // replaceState() 는 새고 없이 현재 url 변경 가능
  if(!location.hash){
    history.replaceState(null, '', '/#/')
  }

  const routerView = document.querySelector('router-view')
  // http://localhost:1234/#/about?name=heropy
  // 구조분해
  const [hash, queryString = ''] = location.hash.split('?')

  // query 정보를 활용할 경우 필요
  //a=123&b=456
  //['a=123','b=456']
  //{a:'123', b:'456'}
  const query = queryString
  .split('&')
  .reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    acc[key] = value
    return acc
  }, {})

  history.replaceState(query, '')

  const currentRoute = routes.find(route =>  new RegExp(`${route.path}/?$`).test(hash))
  routerView.innerHTML = ''
  // 현재 주소의 hash 와 동일한 객체 데이터 의 component 는
  // component 는 class 임. 그래서 new 로 가져오는 것
  routerView.append(new currentRoute.component().el)

  window.scrollTo(0,0)
}

// 여기서 routes 는 index.js 에서 받은 배열의 데이터, 이것 가지고 로직을 짜자
// [{path: '#/', component: Home}, 
// {path: '#/about', component: About}]

export function createRouter(routes){
  // 함수데이터를 반환하고 있음
  return function(){
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}

// Store
export class Store {
  constructor(state){
    this.state = {}
    this.observers = {}
    for(const key in state){
      // this.state.message 를 지금 정의중임
      Object.defineProperty(this.state, key, {
        // 값에 접근하면
        get: () => state[key], //state['message']
        // 값에 할당하면
        set: val => {
          console.log(val)
          state[key] = val
          // this.observers['message']()
          this.observers[key].forEach(observer => observer(val))
        }
      })
    }
  }
  // 상태를 구독하는 개념?
  subscribe(key, cb){
  this.observers[key] = this.observers[key] || [];
  this.observers[key].push(cb);
  }
}