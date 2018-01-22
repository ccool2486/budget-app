import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			appName: 'Budget APP',
			budgetCategories: [
				{
					key: 1,
					title: '零用錢',
					balance: 2000
				},
				{
					key: 2,
					title: 'Love',
					balance: 3000
				},
				{
					key: 3,
					title: '家人',
					balance: 500
				},
			]
		}
	}

  

	render() {
		console.log('yo')
		return (
			<div className="App">
				<MyfirstClassComponent/>
				<MyFirstFunctionalComponent/>
				<BudgetCategories budget={this.state.budgetCategories}/>
				<BudgetCategories2 budget={this.state.budgetCategories}/>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

class MyfirstClassComponent extends Component {
	render() {
		return (
			<p>This is from a Class Component</p>
		)
	}
}

const MyFirstFunctionalComponent = () => (
	<p>Shout from Functional Componet</p> 
)

class BudgetCategories extends Component {
	render() {
		return (
			this.props.budget.map(elem => {
				return <p key={elem.key}>類別標題： {elem.title} / Balance: {elem.balance}</p>
			})
  
		)
	}
}

const BudgetCategories2 = (props) => ( 
	props.budget.map(elem => <p key={elem.key}>{elem.title} / Balance: {elem.balance}</p>) 
)



export default App
