import React , { useRef } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { createStore } from 'redux';
import axios from'axios';
import './App.css';

// BrowserRouterでフロントの画面遷移
// Routeでパスを指定
const App = () => (
  <BrowserRouter>
      <div>
        <Route exact path="/associative" component={Split} />
        <Route path="/associative/supporter" component={Supporter} />
      </div>
    </BrowserRouter>
)

class Split extends React.Component {
  render() {
    return(
      <div>
        <p><Link to="/associative/supporter">ヒントを出す人はこちら</Link></p>
      </div>
    )
  }
}

class Supporter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: ''
    }
    this.getQuestion = this.getQuestion.bind(this);
  }

   getQuestion () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({ question: res.data[0].name });
      })
      .catch(error => {
        // axiosのエラー処理
        console.log(error);
      });
  }

  postHint() {
    axios.post('http://localhost:8080/api/v1/associative-hints', {
        Content: "heyAxios",
        Author:  "ImPost",
        AssociativeQuestionID: 2,
        TeamID: 5
    })
    .then(function(){
      alert("成功");
    })
    .catch(error => {
      console.log(error);
      alert("失敗");
    });
  }

  
  render() {
    return(
      <div>
        <h1 onClick={ this.getQuestion }>お題</h1>
        <div>{this.state.question}</div>
        <button onClick={ this.postHint }>ヒント送信</button>
      </div>
    )
  }
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
// refresh() {
  //     this.now = new Date();

  //   this.setState((state) => ({
    //     time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`
  //   }))
  // }

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

