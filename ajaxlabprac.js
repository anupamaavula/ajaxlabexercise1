
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



// Button3---Get the comments from post with id of 12 

$("#button3").click(function(){
	$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments',{id:12} ,function(res){
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




