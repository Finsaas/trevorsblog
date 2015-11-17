// var BlogPost = React.createClass({
//     render: function() {
    
//       var blogData = this.props.data.map(function(blog){      
//         return <li>{blog}</li>
//       });

//         return (
//         <div>
//             <ul>
//               {blogData}
//             </ul>
//         </div>
//           );
//     }
// });


// React.render(<BlogPost url="/api/blogs"/>, document.getElementById("bloghere"));



var BlogForm = React.createClass({

  handleSubmit: function(e){

    e.preventDefault();

    var title = React.findDOMNode(this.refs.title).value.trim();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();

    if(!title){
      return;
    }

    var data = ({title: title, author: author, body: body});
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
    render: function(){
      return(
        <div>
          <form>
            <div className="container">
            <div className="row">
            <form action="/api/blogs" method="POST" role="form">
            <legend>Post A Blog</legend>
        
            <div className="form-group">
                <label htmlFor="">Author</label>
                <input type="text" className="form-control" name = "title" id="" placeholder="Input field">
            </div>

            <div className="form-group">
                <label htmlFor="">Content</label>
                <input type="text" className="form-control" name = "body" id="" placeholder="Input field">
            </div>
            
            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary"> Submit </button>
        </form>
        </div>
    </div>
        )
    }
  }
})


React.render(<BlogForm "/api/blogs"/>, document.getElementById('bloghere'));

