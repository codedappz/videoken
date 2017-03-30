angular.module('videokenApp').controller('videokenController',
		function($scope,$location){
	
	/*login*/
	$scope.loginValidate=function(obj){

		$location.path("/details");/*
		angular.forEach(obj, function(value,key){
			console.log(value,key)
		});*/
	};
	
	/*load library*/
	$scope.loadLibrary=function(obj){
		$scope.playList;
		$scope.videoList= [
         				{
        					"id": "Amazing Science Tricks using liquid",
        					"url": "HQx5Be9g16U",
        					"startTime": "0.00s",
        					"endTime": "0.00s"
        				},
        				{
        					"id": "Amazing Science Tricks using liquid",
        					"url": "ViZNgU-Yt-Y",
        					"startTime": "0.00s",
        					"endTime": "0.00s"
        				}, 
        				{
        					"id": "Amazing Science Tricks using static Electricity",
        					"url": "uUMH01fD94I",
        					"startTime": "0.00s",
        					"endTime": "0.00s"
        				}, 
        				{
        					"id": "Impossibly cool ideas for party every human",
        					"url": "w8OkziSMRzk",
        					"startTime": "0.00s",
        					"endTime": "0.00s"
        				}]
		                				
		
		angular.forEach($scope.videoList, function(value,key){
			if($scope.playList==undefined){
				$scope.playListStart=value.url;
				$scope.playList=value.url;
			}
			else
			$scope.playList=$scope.playList+","+value.url;
		});
	};
	
	/*adding the videos to library*/
	$scope.addVideo=function(obj){
		if($scope.videoList==undefined){
			$scope.videoList[0]={"id": obj.addVideoId,
					"url":  obj.addVideoUrl,
					"startTime": obj.addVideoStartTime,
					"endTime": obj.addVideoEndTime
				}
		}else
			{
			$scope.videoList[$scope.videoList.length]={"id": obj.addVideoId,
					"url":  obj.addVideoUrl,
					"startTime": obj.addVideoStartTime,
					"endTime": obj.addVideoEndTime
				}
			}
	}
	
})