import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';

// BrowserRouterでフロントの画面遷移
// Routeでパスを指定
const App = () => (
  <BrowserRouter>
      <div>
        <Route exact path="/associative" component={Split} />
        <Route path="/associative/supporter" component={Supporter} />
        <Route path="/associative/solver" component={Solver} />
        <Route path="/associative/answer" component={Answer} />
      </div>
    </BrowserRouter>
)


const counter  = (state=1, action)  => {
  switch (action.type) {
    case 'ADD':
      return state  + 1
      default:
      return state
    }
}

let store = createStore(counter)

const Split = () => {
  store.dispatch({  type:  'ADD'  })

  return(
    <div>
      <p><Link to="/associative/supporter">ヒントを出す人はこちら</Link></p>
      <p><Link to="/associative/solver">答えを書く人はこちら</Link></p>
    </div>
  )
}

const Supporter = () => {
  let count = store.getState().toString()

  return(
    <div>
      <h1>お題</h1>
      <p>{count}問目のみんなのヒント</p>
    </div>
  )
}

const Solver = () => {
  return(
    <div>
      <h1>ヒント</h1>
    </div>
  )
}


export default App;
// // React.componentを拡張してClockを作るJSXで書く
// class Clock extends React.Component {
//   // Clockクラスが作られたときに呼ばれる特別なメソッド
//   // superはreact.componentを指している今受け取ったpropsを渡す
//   constructor(props) {
//     super(props);
//     this.now = new Date();

//     this.state = {
  //       time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
//     }

//     this.refresh = this.refresh.bind(this);
//   }

//   // 定義したstateをsetStateで書き換える
//   refresh() {
  //     this.now = new Date();

//     this.setState((state) => ({
//       time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
//     }))
//   }

//   render() {
   
//     return <p onClick={this.refresh}>{this.state.time}</p>
//   }
// }


// npm run start

// Reduxステートを管理するもの
// サイトの中で共通で使いたいものがあるときに使う
// npm でreduxをインストール
// react-reduxもインストール

// Routing
// npmでreact-router-domをインストール



// const Blog = props => {
//   // matchするidがあればとってくる
//   const { id } = props.match.params

//   return(
//     <div>
//       <p>{id}番目の記事です</p>
//     </div>
//   )
// }

// const Sum = props => {
//   const { num1, num2 } = props.match.params

//   return (
//     <div>
//       <p>{num1} + {num2} = {parseInt(num1) + parseInt(num2)}</p>
//     </div>
//   )
// }