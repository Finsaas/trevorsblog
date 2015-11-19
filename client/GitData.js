var React = require('react');
var Github = require('./GitDisplay');

var GitBox = React.createClass({
	
		getInitialState: function(){
			return{data: []};
		},
		loadGitData: function(){
			var url = '/api/github'
			$.ajax({
				url: url,
				dataType:'json',
				success: function(data){
					console.log(data)
					this.setState({data:data});
				}.bind(this),
				error: function(err, status){
					console.log(err);
				}.bind(this)
			});
		},
		componentDidMount: function(){
			this.loadGitData();
		},
		render: function(){
			return(
				<div>
					<Github data={this.state.data}/>
				</div>
		);

	}
}); 

module.exports = GitBox;