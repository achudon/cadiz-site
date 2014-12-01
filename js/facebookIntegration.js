window.fbAsyncInit = function() {
    FB.init({
      appId      : '474734025997699',
      xfbml      : true,
      version    : 'v2.1'
    });

    var accessToken = "474734025997699|aa62abbda78e9ffc10c39c3a88101a30"
    FB.api('286051361583488?fields=posts',{access_token : accessToken},	 function(response) {
  		console.log(response.posts.data);
  		var posts = response.posts.data;
  		for(var i = 0; i < posts.length; i++) {
  			if(posts[i].message)
  				document.getElementById("gallery").innerHTML += posts[i].message + "<br />";
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
