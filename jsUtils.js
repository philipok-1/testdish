
function checkUpdate(){

window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      if (confirm('A new version of this site is available. Load it?')) {
        window.applicationCache.swapCache();
window.location.reload();
      }
    } else {
      loadIntro()
    };}


function onUpdateReady(){
	
	alert("found update")
	
	window.applicationCache.swapCache()
	window.location.reload()
		
	}
