
var BlogForm = React.createClass({

  handleSubmit: function(e){

    e.preventDefault();

    var title = React.findDOMNode(this.refs.title).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();

    var data = ({title: title, body: body});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      data: data,
      type:'POST',
        success: function(response){
        console.log("Success",data, response),
        document.location='/blog.html'
        }.bind(this),
        error: function(xhr, status, err){
            console.log("failure")
            console.error(this.props.url, status, err.toString())
        }.bind(this)
    })

    },

    render: function(){
      
      return(
        <div>
            <div className="container">
                <div className="row">
                    <form>
                         <h1>Post A Blog</h1>
        
                            
                            <div>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" ref = "title" placeholder="Title"/>
                            </div>

                            <div className="form-group">
                                <label>Content</label>
                                <input type="text" className="form-control" ref = "body" placeholder="Blog post"/>
                            </div>
                            <div>
                                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary"> Submit </button>
                            </div>
                            </div>
                    </form>
                </div>
            </div>     
    </div>
    );

    return(
        <div >
            <div class="buttonDiv">         
                    <button className="navButtons" type="button" onClick="location.href='index.html'">Home</button>
                    <button className="navButtons" type="button" onClick="location.href='blog.html'">Blogs</button>
                    <button className="navButtons" type="button" onClick="location.href='contact.html'">Contact</button>
                    <button className="navButtons" type="button" onClick="location.href='/login'">Login</button>
                    <button className="navButtons" type="button" onClick="location.href='signup'">Signup</button>
                    <button className="navButtons" type="button" onClick="location.href='postBlog.html'">Post</button>      
            </div> 
           <div>
                {BlogForm}
           </div>
        </div>
        )
  }
});

React.render(<BlogForm url="/api/blogs"/>, document.getElementById('postHere'));

