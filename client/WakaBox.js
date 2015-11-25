var React = require('react');
var WakaList = require('./WakaList');

var WakaBox = React.createClass({
	
		getInitialState: function(){
			return{data: []};
		},
		loadWakaData: function(){
			var url = '/api/wakatime'
			$.ajax({
				url: url,
				dataType:'json',
				success: function(data){
					console.log(data)
					this.setState({data: data});
				}.bind(this),
				error: function(err, status){
					console.log(err);
				}.bind(this)
			});
		},
		componentDidMount: function(){
			this.loadWakaData();
		},
		render: function(){
			return(
				<div>
					<WakaList data={this.state.data}/>
				</div>
		);

	}
}); 

module.exports = WakaBox;