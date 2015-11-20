var React = require('react');

var BlogList = React.createClass({
    
    handleCommentSubmit: function(e){
      e.preventDefault();
      
      var body = React.findDOMNode(this.refs.body).value.trim();

      var blogId = this.props.blogId;
      var data = ({ body: body });
      

      $.ajax({
      url: '/api/blog/' + blogId + '/comment' ,
      dataType: 'json',
      data: data,
      type:'POST',
        success: function(response){
        console.log("Success",data, response),
        document.location='/blog'
        }.bind(this),
        error: function(xhr, status, err){
            console.log("failure")
            console.error(this.props.url, status, err.toString())
        }.bind(this)
      });
    },

    render: function() {
      var that = this;
      var blogData = this.props.data.map(function(blog){      
        if(blog){
          var blogInfo = blog.comments.map(function(b){
            return(
              <div>
                <p>{b.body}</p>
                <p>{b.date}</p>

              </div>
            )
          });
        }
        return (
        	<div>
        		<div className="well">
        			<div><h1>{blog.title}</h1></div>
        			<div><h3>{blog.body}</h3></div>
              <div><h6>{blogInfo}</h6></div>

              <div className="form-group" method="POST">
                <h4>Thoughts?</h4>
                <input type="text" className="form-control" ref = "title" placeholder="Comment"/>
                <div>
                  <button onClick={that.handleCommentSubmit} type='submit' blogId={blog._id} className="btn btn-primary"><h4>Submit</h4></button>
                </div>
              </div>
        		</div>
        	</div>
        	)
      });

        return (

        <div>
	        <div className="buttonDiv">
            <ul>			
  				   	<button className="navButtons" type="button">Home</button>
  				   	<button className="navButtons" type="button">Blogs</button>
  				   	<button className="navButtons" type="button">Contact</button>
  				   	<button className="navButtons" type="button">Login</button>
  				   	<button className="navButtons" type="button">Signup</button>
  				   	<button className="navButtons" type="button">Post</button>	
            </ul>	
	    	  </div>    
	        <div>
              		{blogData}  	
          </div>
        </div>
          );
    }
});

module.exports = BlogList;