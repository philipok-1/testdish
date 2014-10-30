//Application cache update function

function checkUpdate(updatediv){

window.applicationCache.update()	
var appCache=window.applicationCache

while (appCache.status!="1"){

	document.getElementById(updatediv).style="visible"
	document.getElementById(updatediv).innerHTML=appCache.status
	
};

alert ("finished");
};

function updateCache(){
	
	if (window.applicationCache==4){window.applicationCache.swapCache()
		window.location.reload()
		
	}
}
