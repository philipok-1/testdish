//Application cache update function

function checkUpdate(updatediv){

window.applicationCache.update()	

if (appCache.status==4){
	
	document.getElementById(updatediv).innerHTML="Update available!"
	document.getElementById(updatediv).style="visible"
	
}
else {alert ("no update")}
}

function updateCache(){
	
	if (window.applicationCache==4){window.applicationCache.swapCache()
		window.location.reload()
		
	}
}
