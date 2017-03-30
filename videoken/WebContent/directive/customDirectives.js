/**
 *  This directive used enter key operation
 */
videokenApp.directive('myYoutube', function($sce) {
	  return {
		    restrict: 'EA',
		    replace: true,
		    template: '<div style="height:300px;"><iframe style="overflow:hidden;height:90%;width:90%" width="90%" height="90%" src="{{url}}" frameborder="0" allowfullscreen autoplay></iframe></div>',
		    link:function (scope, element, attrs) {
	            var playListUrl = scope.playList;
	            var playListStartUrl=scope.playListStart;
	            if (playListUrl) {
	            	if(playListStartUrl==undefined)
	            		scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" +playListStartUrl);
	            	else
		               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" +playListStartUrl+"?playlist="+playListUrl);
		           }
	            
	          //  scope.callback(); // calls exampleCallback()
	        }
		    	/*function (scope) {
		        console.log('here');
		        scope.$watch('code','code', function (newVal,val) {
		           if (newVal) {
		               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" +"HQx5Be9g16U"+"?playlist="+"uUMH01fD94I,uUMH01fD94I");
		           }
		        });
		    }*/
		  };
})
