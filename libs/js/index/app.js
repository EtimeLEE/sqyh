var mainApp = angular.module("mainApp",["ngRoute","inform","mainCtrl","mainDirectives","mainServices","mainFilters","baiduMap"]);
mainApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
mainApp.constant("pagination",{"currentPage":1,"itemsPerPage":10});
    
mainApp.config(function($routeProvider) {
	$routeProvider
	/** 社区 **/
	.when('/bulletin_list', {
		templateUrl: 'bulletin_list.html',
		controller: 'bulletinListCtrl'
	})

	.when('/bulletin_list_waterFall', {
		templateUrl: 'bulletin_list_waterFall.html',
		controller: 'bulletinListCtrl'
	})

	.when('/bulletin_detail/:id', {
		templateUrl: 'bulletin_detail.html',
		controller: 'bulletinDetailCtrl'
	})

	.when('/feedback', {
		templateUrl: 'feedback.html',
		controller: 'feedbackCtrl'
	})

	.when('/feedback_detail/:id', {
		templateUrl: 'feedback_detail.html',
		controller: 'feedbackDetailCtrl'
	})

	.when('/wiki', {
		templateUrl: 'wiki.html',
		controller: 'wikiCtrl'
	})

	.when('/wiki_detail/:id', {
		templateUrl: 'wiki_detail.html',
		controller: 'wikiDetailCtrl'
	})

	.when('/permission_list', {
		templateUrl: 'permission_list.html',
		controller: 'permissionListCtrl'
	})

	.when('/permission_detail/:id', {
		templateUrl: 'permission_detail.html',
		controller: 'permissionDetailCtrl'
	})

	.when('/personal', {
		templateUrl: 'personal.html',
		controller: 'personalCtrl'
	})

	.when('/picManage', {
		templateUrl: 'pic.html',
		controller: 'picManageCtrl'
	})





	/** 区级 **/
	.when('/community_list', {
		templateUrl: 'community_list.html',
		controller: 'communityListCtrl'
	})
	.when('/community_detail/:flag', {
		templateUrl: 'community_detail.html',
		controller: 'communityDetailCtrl'
	})
	.when('/community_apply', {
		templateUrl: 'community_apply.html',
		controller: 'communityApplyCtrl'
	})
	
	.when('/swy_list', {
		templateUrl: 'swy_list.html',
		controller: 'swyListCtrl'
	})
	.when('/data_statistics', {
		templateUrl: 'data_statistics.html',
		controller: 'dataStatisticsCtrl',
	})
	.when('/data_list/:flag', {
		templateUrl: 'data_list.html',
		controller: 'dataListCtrl'
	})
	.when('/data_detail/:id', {
		templateUrl: 'data_detail.html',
		controller: 'dataDetailCtrl'
	})
	.when('/notice', {
		templateUrl: 'notice.html',
		controller: 'noticeCtrl'
	})
	.when('/notice_add/:id', {
		templateUrl: 'notice_add.html',
		controller: 'noticeAddCtrl'
	})
	.when('/modify_password/:flag', {
		templateUrl: 'modify_password.html',
		controller: 'modifyPasswordCtrl'
	})
	.otherwise({
		redirectTo: '/',
		template:"<div class='temp'>欢迎来到社区一号社区后台</div>"
	});
});

mainApp.run(['$rootScope', '$location', function($rootScope, $location) {

    $rootScope.$on('$routeChangeSuccess', function(event) {
        $rootScope.path = $location.path();
    });

}]);