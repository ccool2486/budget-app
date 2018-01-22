import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {init as firebaseInit} from './javascripts/firebase'

class App extends Component {
	constructor(props) {
		super(props);
		firebaseInit()
		//this.tick = this.tick.bind(this);
		this.state = {
			appName: "Budget APP",
			budgetCounts: 3,
			budgetCategories: [
				{
					key: 1,
					title: "零用錢",
					balance: 2000
				},
				{
					key: 2,
					title: "Love",
					balance: 3000
				},
				{
					key: 3,
					title: "家人",
					balance: 500
				}
			]
		};
	}

	tick = () => {
    this.setState({ budgetCounts: this.state.budgetCounts + 1 });
  }
  // componentDidMount 為 component 生命週期中階段 component 已插入節點的階段，通常一些非同步操作都會放置在這個階段。這便是每1秒鐘會去呼叫 tick 方法
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  // componentWillUnmount 為 component 生命週期中 component 即將移出插入的節點的階段。這邊移除了 setInterval 效力
  componentWillUnmount() {
    clearInterval(this.interval);
  }

	render() {
		return (
			<div className="App">
				<MyfirstClassComponent />
				<MyFirstFunctionalComponent />
				<BudgetCategories budget={this.state.budgetCategories} />
				<BudgetCategories2 budget={this.state.budgetCategories} />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">預算數量： {this.state.budgetCounts}</p>
			</div>
		);
	}
}

class MyfirstClassComponent extends Component {
	render() {
		return <p>This is from a Class Component</p>;
	}
}

const MyFirstFunctionalComponent = () => <p>Shout from Functional Componet</p>;

class BudgetCategories extends Component {
  
	render() {
		return this.props.budget.map(elem => {
			return (
				<p key={elem.key}>
          類別標題： {elem.title} / Balance: {elem.balance}
				</p>
			);
		});
	}
}

const BudgetCategories2 = props =>
	props.budget.map(elem => (
		<p key={elem.key}>
			{elem.title} / Balance: {elem.balance}
		</p>
	));

export default App;
