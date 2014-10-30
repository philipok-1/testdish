

function onUpdateReady(){
	
	alert("found update")
	
	window.applicationCache.swapCache()
	window.location.reload()
		
	}

