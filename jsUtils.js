
function checkUpdate(){

window.applicationCache.addEventListener('updateready', onUpdateReady, false);}

 
function onUpdateReady(){
	
 if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      
      if (confirm('A new version of this site is available. Load it?')) {
        window.applicationCache.swapCache();
window.location.reload();}
else {loadIntro();}}

else {loadIntro();}

}
