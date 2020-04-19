
//Button1 ---Get all posts

$("#button1").click(function()
{
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',function(res){
		res.forEach(function(){
		var  p = $('<p></p>');
		p.text(JSON.stringify(res));
		$('body').append(p);
	})
	
})
})


//Button2---Get post of id 10
$("#button2").click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:10} ,function(res){
		res.forEach(function(){
		var p = $('<p></p>');
		p.text(JSON.stringify(res));
		$('body').append(p);
	})
	
})
})



// Button3---Get the comments from post with id of 14 

$("#button3").click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments',{id:14} ,function(res){
		res.forEach(function(){
		var p = $('<p></p>');
		p.text(JSON.stringify(res));
		$('body').append(p);
	})
	
})
})



//Button 4----Get all the posts from user with id of 2
$("#button4").click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:2} ,function(res){
		res.forEach(function(){
		var p = $('<p></p>');
		p.text(JSON.stringify(res));
		$('body').append(p);
	})
	
})
})



//Button 5--Create a new post and log the id generated for it by the server
$("#button5").click(function(){
	var postTitle="This is a very new post"
	$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{title:postTitle} ,
		function(res){
		console.log(res);
	})
	
})

//Button 6--Replace the post with id of 14 and render the responseJSON

$("#button6").click(function(){
	$.ajax({
		method: 'PUT',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	data: {
		userId: 1,
		title: "New Post",
		body: "New post added"
	},
	complete: function(response){
		var p = $('<p></p>');
		p.text(JSON.stringify(response));
		$('body').append(p);
		// console.log(response.responseJSON);
	}
   })
})

//Button 7---Update the title of post with id of 14 and render responseJSON	


$("#button7").click(function(){
$.ajax({
	method: 'PATCH',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	data: {
        title: "patched it"
    },
	complete: function(response){
		var p = $('<p></p>');
		p.text(JSON.stringify(response));
		$('body').append(p);
		// console.log(response.responseJSON);
	}
})
})

//Button8----Delete the post with id of 14 and render a success message

$("#button8").click(function(){
$.ajax({
	method: 'DELETE',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	complete: function(response){
		var p = $('<p></p>');
		p.text(JSON.stringify(response));
		$('body').append(p);
		// console.log(response.statusText);
	}
})
})


//Button 9---Display a list of posts.

$("#button9").click(function()
{
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',function(res){
		res.forEach(function(){
		var  p = $('<p></p>');
		p.text(JSON.stringify(res));
		$('body').append(p);
	})
	
})
})
// function getAllPosts() {
// 	return new Promise(function(resolve,reject){
// 			$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
// 				resolve(posts);
// 			})
// 	})
// }
// })