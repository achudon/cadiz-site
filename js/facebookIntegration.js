window.fbAsyncInit = function() {
    FB.init({
      appId      : '474734025997699',
      xfbml      : true,
      version    : 'v2.1'
    });

    var accessToken = "474734025997699|aa62abbda78e9ffc10c39c3a88101a30"
    FB.api('286051361583488?fields=posts',{access_token : accessToken},	 function(response) {
  		var posts = response.posts.data;

  		//This is neccessary because there's no garauntee a post has a message. We always wanted 5 posts, so the only way to do it
  		//Is to count everytime it enters the if statement
  		var numberPosts = 0
  		for(var i = 0; i < posts.length; i++) {
  			if (numberPosts === 5) break;
  			if(posts[i].message ) {
  				numberPosts++;
  				var post = document.createElement("div");
  				post.className = "post";
  				var message = document.createElement("p");
  				message.innerHTML = posts[i].message;
  				var date = document.createElement("p");
  				date.innerHTML = posts[i].created_time.substring(0, 10);
  				post.appendChild(message);
  				post.appendChild(date);
  				console.log(document);
  				document.getElementById("facebookPosts").appendChild(post);				
  			}
  		}
	});


  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
