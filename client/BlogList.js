var React = require('react');
var BlogComment = require('./BlogComment');
var md5 = require('MD5');
var GRAVATAR_URL = "http://gravatar.com/avatar";

var BlogList = React.createClass({
    
    render: function() {
      var that = this;
      var blogData = this.props.data.map(function(blog){      
          
          var blogInfo = blog.comments.map(function(comment){
            var blogDate = new Date(comment.date).toDateString();

            if(comment.user){
              var user = comment.user.local.email;       
              var size = 36;
              var hash = md5(user);
              var gravUrl = GRAVATAR_URL + "/" + hash + "?s=" +size;
            } else {
              var user = "Anonymous";
            }
          return(
            
            <div className="well">
              <p><em><h4><img src={gravUrl}/>{user}</h4></em></p>
              <p><h5>{comment.body}</h5></p>
              <p>{blogDate}</p>
            </div>
          )
          }).reverse();
        
        return (
        	<div className="container-full">
        		<div className="well">
        			<div className="container-full"><h1>{blog.title}</h1></div>
        			<div className="container-full"><h3>{blog.body}</h3></div>
              <div className="container-full"><h6>{blogInfo}</h6></div>
              <div><BlogComment blogId={blog._id} onPost={that.props.newData}/></div>
        		</div>
        	</div>
        	)
      });

        return (

        <div>
	        <div className="buttonDiv">
            <div className="container">
            <ul className="col-sm-4">			
  				   	<button className="navButtons" type="button">Home</button>
  				   	<button className="navButtons" type="button">Blogs</button>
  				   	<button className="navButtons" type="button">Contact</button>
  				   	<button className="navButtons" type="button">Login</button>
  				   	<button className="navButtons" type="button">Signup</button>
  				   	<button className="navButtons" type="button">Post</button>	
            </ul>	
            </div>
	    	  </div>    
	        <div>
              		{blogData}  	
          </div>
        </div>
          );
    }
});

module.exports = BlogList;