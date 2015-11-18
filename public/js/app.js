var BlogList = React.createClass({
    render: function() {
     
      var blogData = this.props.data.map(function(blog){      
        return (
        	<div>
        		<div>
        			<h1>{blog.title}</h1>
        			<h3>{blog.body}</h3>
        		</div>
     
        	</div>
        	)
      });

        return (

        <div>
	        <div class="buttonDiv">			
				   	<button className="navButtons" type="button" onClick="location.href='index.html'">Home</button>
				   	<button className="navButtons" type="button" onClick="location.href='blog.html'">Blogs</button>
				   	<button className="navButtons" type="button" onClick="location.href='contact.html'">Contact</button>
				   	<button className="navButtons" type="button" onClick="location.href='/login'">Login</button>
				   	<button className="navButtons" type="button" onClick="location.href='signup'">Signup</button>
				   	<button className="navButtons" type="button" onClick="location.href='postBlog.html'">Post</button>		
	    	</div>    
	        <div>
              		{blogData}  	
            </div>
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