//Application cache update function

function checkUpdate(updatediv){

window.applicationCache.update()	
var appCache=window.applicationCache

while (appCache.status>1){

	document.getElementById(updatediv).innerHTML=appCache.status
	document.getElementById(updatediv).style="visible"
}

alert ("finished")
}

function updateCache(){
	
	if (window.applicationCache==4){window.applicationCache.swapCache()
		window.location.reload()
		
	}
}
