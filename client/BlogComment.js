var React = require('react');

var BlogComment = React.createClass({

	handleCommentSubmit: function(e){
      e.preventDefault();
      
      var body = React.findDOMNode(this.refs.body).value.trim();
      var blogId = this.props.blogId;
      var data = ({ body: body });
      
      

      $.ajax({
      url: '/api/blogs/' + blogId + '/comment' ,
      dataType: 'json',
      data: data,
      type:'POST',
        success: function(response){
          if(this.props.onPost){
            this.props.onPost()
          console.log("Success",data, response)
          }
        
        }.bind(this),
        error: function(xhr, status, err){
            console.log("failure")
            console.error(this.props.url, status, err.toString())
        }.bind(this)
      })
      this.refs.body.getDOMNode().value=''
    },

    render: function(){
    	return(
    		<div>
       			<form>
           			 <div className="form-group" method="POST">
                		<label>Comment</label>
                		<textarea rows="4" className="form-control" ref="body" placeholder="comment"></textarea>
            		</div>
            <button onClick={this.handleCommentSubmit} type="submit" className="btn btn-default">Submit</button>
        </form>
       </div>
    	)
    }
});



module.exports = BlogComment;