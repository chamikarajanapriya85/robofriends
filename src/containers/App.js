import React,{Component} from 'react';
import CardList from '../components/CardList';
import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import 'tachyons';
import './App.css';


class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
		//console.log('constructor') ;// to see the order of the life cycle methods
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>  return response.json())
			.then(users => this.setState({robots:users}));
		//console.log('componentDidMount');
	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		//console.log(event.target.value);
		
		})
	}
	render(){
		const {robots,searchfield} = this.state
		//destructuring the code
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(serachfield.toLowerCase()
		})
		//console.log('render');
		//robots.length === o equal to the !robots.length
		//add ternary operator
	   return !robots.length) ?
	  	 <h1> Loading </h1>:
	    (
			<div className ='tc'>
				<h1 className = 'f2'> Robo Friends </h1>
				<SearchBox searchChange ={this.onSearchChange} />
				<Scroll> 
					<CardList robots={filterRobots} /> //insted of this.state.robots
				</Scroll>
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