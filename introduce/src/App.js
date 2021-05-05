import React  from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
// import { createStore } from 'redux';
import axios from'axios';
import './App.css';

// BrowserRouterでフロントの画面遷移
// Routeでパスを指定
const App = () => (
  <BrowserRouter>
      <div>
        <Route exact path="/associative" component={Split} />
        <Route path="/associative/solver" component={Solver} />
        <Route path="/associative/supporter" component={Supporter} />
      </div>
    </BrowserRouter>
)

class Split extends React.Component {
  render() {
    return(
      <div>
        <p><Link to="/associative/solver">回答する人はこちら</Link></p>
        <p><Link to="/associative/supporter">サポーターはこちら</Link></p>
      </div>
    )
  }
}

class Solver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hint: '',
      answer: ''
    }
    this.getHint = this.getHint.bind(this);
    this.postAnswer = this.postAnswer.bind(this);
    this.answerChange = this.answerChange.bind(this);
  }

  answerChange (event) {
    this.setState({ answer: event.target.value });
  }

  getHint () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({ hint: res.data[0].name });
      })
      .catch(error => {
        // axiosのエラー処理
        console.log(error);
      });
  }

  postAnswer () {
    axios.post('http://localhost:8080/api/v1/associative-questions/5/judge', {
      Answer: this.state.answer,
      QuestionID: 1,
      TeamID: 5
    })
    .then(function(){
      alert("成功");
    })
    .catch(error => {
      alert("失败 + error");
    });
  }

  render() {
    return(
      <div>
        <button onClick={ this.getHint }>ヒントはこちら</button>
        <div>{ this.state.hint }</div>

        <form onSubmit={ this.postAnswer }>
          <label>
            answer:
            <input type="text" value={ this.state.value } onChange={ this.answerChange } />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

class Supporter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ' ',
      question: ' '
    }
    this.getQuestion = this.getQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postHint =this.postHint.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
        Content: this.state.value,
        Author:  "ImPost",
        AssociativeQuestionID: 1,
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
        
        <form onSubmit={this.postHint}>
          <label>
            Hint:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"  />
        </form>
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

