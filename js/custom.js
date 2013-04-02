// infinitescroll() is called on the element that surrounds 
// the items you will be loading more of
$('#content').infinitescroll({
	navSelector  : "nav.paged-nav",            
		// selector for the paged navigation (it will be hidden)
	nextSelector : "div.navigation a:first",    
		// selector for the NEXT link (to page 2)
	itemSelector : "ul#shotsListing li"          
		// selector for all items you'll retrieve
 });