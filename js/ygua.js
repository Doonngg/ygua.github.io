
window.addEventListener("load",function(){
	

	
	
	
})
	var userAgent = navigator.userAgent.toLowerCase();
	    var platform;
	    if(userAgent == null || userAgent == ''){
	        platform = 'WEB' ; 
	    }else{
	        if(userAgent.indexOf("android") != -1 ){ 
	            platform = 'ANDROID';
	            location.href = "mobile.html";
	        }else if(userAgent.indexOf("ios") != -1 || userAgent.indexOf("iphone") != -1 || userAgent.indexOf("ipad") != -1){ 
	            platform = 'IOS';
	            location.href = "mobile.html";
	        }else if(userAgent.indexOf("windows phone") != -1 ){ 
	            platform = 'WP';
	            location.href = "mobile.html";
	        }else{
	            platform = 'WEB' ;
	            location.href = "index.html";
	        };
	    };