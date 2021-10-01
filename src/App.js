import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
		const filterRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.serachfield.toLowerCase()
		})
		//console.log('render');
	  if (this.state.robots.length === 0){
	  	return <h1> Loading </h1>;
	  }else{
	  	return(
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