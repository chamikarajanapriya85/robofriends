import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import 'tachyons';
import './App.css';


class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots:robots,
			searchfield:''
		}
	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		//console.log(event.target.value);
		
		})
	}
	render(){
		const filterRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.serachfield.toLowerCase())
	  return(
		<div className ='tc'>
			<h1 className = 'f2'> Robo Friends </h1>
			<SearchBox searchChange ={this.onSearchChange} />
			<CardList robots={filterRobots} /> //insted of this.state.robots

		</div>
	);	
	}
}
// const App = () => {
// 	return(
// 		<div className ='tc'>
// 			<h1> Robo Friends </h1>
// 			<SearchBox />
// 			<CardList robots={robots} />

// 		</div>
// 	);
// }
export default App;