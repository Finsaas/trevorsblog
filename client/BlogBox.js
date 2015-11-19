var React = require('react');
var BlogList = require('./BlogList')

var BlogBox = React.createClass({

	getInitialState: function(){
		return {data: []};
	},

	loadBlogsFromServer: function(){
		$.ajax({
			url:this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log("We made it!")
				this.setState({data: data})
			}.bind(this)
		});
	},

	componentDidMount: function(){
		this.loadBlogsFromServer();
	},

	render: function(){
		return(
			<div>
				<ul>
					<BlogList data={this.state.data}/>
				</ul>
			</div>
		);
	}

});
React.render(<BlogBox url="/api/blogs"/>, document.getElementById("bloghere"));
// module.exports = BlogBox;