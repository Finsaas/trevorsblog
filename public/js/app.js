var BlogList = React.createClass({
    render: function() {
     
      var blogData = this.props.data.map(function(blog){      
        return (
        	<div>
        		
        			<h1>{blog.title}</h1>
        			<h3>{blog.body}</h3>
     
        	</div>
        	)
      });

        return (
        <div>
            <ul>
              {blogData}
            </ul>
        </div>
          );
    }
});


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