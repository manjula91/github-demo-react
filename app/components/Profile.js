var React = require('react');
var ReactDom = require('react-dom');
var Repos = require('./github/Repos');
var UserProfile = require('./github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
	mixins : [ReactFireMixin],
	getInitialState:function(){
	 	return{
	 		notes:[1,2,3,4],
	 		bio:{name:"Manjula"},
	 		repos:["react","nodejs"]
	 	}
	 },
	componentDidMount:function(){
		this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
	},
	render:function(){
		console.log(this.props);
		return(
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio}/>
					User Profile Component 
				</div>
				<div className="col-md-4">
					<Repos repos={this.state.repos}/>
					Repos Component
				</div>
				<div className="col-md-4">
					<Notes notes={this.state.notes}/>
					Notes Component
				</div>
			</div>	
		)
	}
});

module.exports = Profile;