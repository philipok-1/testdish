//Application cache update function

function checkUpdate(updatediv){

window.applicationCache.update()	
var appCache=window.applicationCache
var checked=false

while (checked==false){
alert (checked)
	document.getElementById(updatediv).style="visible"
	document.getElementById(updatediv).innerHTML=appCache.status
	if (appCache.status==4){checked=true}
};

alert ("finished");
};

function updateCache(){
	
	if (window.applicationCache==4){window.applicationCache.swapCache()
		window.location.reload()
		
	}
}
