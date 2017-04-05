var mainCtrl = angular.module("mainCtrl", []);

/** 社区 **/
mainCtrl.controller("bulletinListCtrl", ["$scope", function($scope) {
    $scope.url = "../libs/images/1.jpg";
}]);

mainCtrl.controller("bulletinDetailCtrl", ["$scope","$rootScope","$routeParams", function($scope,$rootScope,$routeParams) {
    $rootScope.path = "/bulletin_detail";
    if($routeParams.id == "add"){
        $scope.text = "新建公告";
    }else{
        $scope.text = "公告详情";
    }


    $scope.model={isChecked:'自定义'};
}]);

mainCtrl.controller("feedbackCtrl", ["$scope", function($scope) {
    
}]);

mainCtrl.controller("feedbackDetailCtrl", ["$scope","$rootScope","$routeParams", function($scope,$rootScope,$routeParams) {
    
    $rootScope.path = "/feedback_detail";
    $scope.$on('$viewContentLoaded', function(){
        (function(){
            $.each($(".contentImg img"),function(){
                /*if(!CheckImgExists(this.src)){
                    $(this).remove();
                }*/


            });
            var winWidth = $(window).width(),
                winHeight = $(window).height(),
                imgs = $(".contentImg img"),
                bigImg = $(".lightBox .bigImg"),
                size = imgs.size(),
                curIndex;

            $(".lightBox").hide();

            function CheckImgExists(imgurl) {  
                var ImgObj = new Image(); //判断图片是否存在  
                ImgObj.src = imgurl;  
                //没有图片，则返回-1  
                if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {  
                    return true;  
                } else {  
                    return false;
                }  
            } 

            function showImg(index){
                var imgSrc = imgs.eq(index).attr("src");
                var newImage = new Image();

                newImage.src = imgSrc;
                bigImg.attr("src",imgSrc);

                var isHorizontal = newImage.naturalWidth/newImage.naturalHeight < winWidth/winHeight ? true : false;
                bigImg.css({
                    opacity:"0"
                });
                bigImg.stop().animate({
                        opacity:"1"
                    },500);
                if(isHorizontal){
                    bigImg.css({
                        width:"auto",
                        height:"85%"
                    });
                }else{
                    bigImg.css({
                        width:"85%",
                        height:"auto"
                    });
                }
            }

            imgs.each(function(index){
                $(this).click(function(){
                    $(".lightBox").fadeIn();
                    curIndex = index;
                    showImg(curIndex);
                });
            });

            $(".lightBox .mask").click(function(){
                $(".lightBox").fadeOut();
            });

            $(".lightBox .prev").click(function(){
                curIndex = --curIndex % size;
                showImg(curIndex);
            });  
            $(".lightBox .next").click(function(){
                curIndex = ++curIndex % size;
                showImg(curIndex);
            });  
        })();
    });
}]);

mainCtrl.controller("wikiCtrl", ["$scope", function($scope) {
    
}]);

mainCtrl.controller("wikiDetailCtrl", ["$scope","$rootScope","$routeParams", function($scope,$rootScope,$routeParams) {
    $rootScope.path = "/wiki_detail";
    if($routeParams.id == "add"){
        $scope.text = "新建词条";
    }else{
        $scope.text = "社区百科详情";
    }
}]);

mainCtrl.controller("permissionListCtrl", ["$scope", function($scope) {
    
}]);

mainCtrl.controller("permissionDetailCtrl", ["$scope","$rootScope","$routeParams", function($scope,$rootScope,$routeParams) {

    $rootScope.path = "/permission_detail";
    
	$scope.lb = [
		{id:"1",name:"社区"},
		{id:"2",name:"企业"}
	];
	$scope.list = [
		{lb:"1",dz:"长江路12"},
		{lb:"2",dz:"长江路45"},
		{lb:"1",dz:"长江路85"},
		{lb:"2",dz:"长江路44"},
		{lb:"1",dz:"长江路83"}
	];
    $scope.add=function(){
	    var obj={};
	    $scope.list.push(obj);

	};

	$scope.del=function(idx){
	    $scope.list.splice(idx,1);
	};
	$scope.cs=function(){
	    console.log($scope.list);
	};
}]);

mainCtrl.controller("personalCtrl", ["$scope", function($scope) {
    
}]);

mainCtrl.controller("picManageCtrl", ["$scope", function($scope) {
    $scope.addPic = function(n){
    	document.getElementById(n).click();
    };
    $scope.deletePic = function(n){
    	if(confirm("确定删除吗？")){
    		console.log("删除了"+n+"图片");
    	}
    };
}]);









/** 区级 **/
mainCtrl.controller("communityListCtrl", ["$scope", function($scope) {
    
}]);

mainCtrl.controller("communityDetailCtrl", ["$scope", "$routeParams","$interval", function($scope, $routeParams,$interval) {
    if($routeParams.flag == "edit"){
        $scope.text = "社区简介";
        $scope.editBtn = true;
        $scope.reviewBtn = false;
    }else if($routeParams.flag == "review"){
        $scope.text = "审核详情";
        $scope.editBtn = false;
        $scope.reviewBtn = true;
    }

    var size = $scope.imgSize = 4;

    $scope.lunboImg = [];
    $scope.lunboImg.push({ id: 1, img: '../libs/images/c0.jpg' });
    $scope.lunboImg.push({ id: 2, img: '../libs/images/c1.jpg' });
    $scope.lunboImg.push({ id: 3, img: '../libs/images/c2.jpg' });

    $scope.lunbo = { 
        currentId:1
    };
        
    $scope.previousImg = function () {
        if ($scope.lunbo.currentId == 1) {
            $scope.lunbo.currentId = size-1;
        }
        else {
            $scope.lunbo.currentId--;
        }
    };
    $scope.nextImg = function () {
        if ($scope.lunbo.currentId == size-1) {
            $scope.lunbo.currentId = 1;
        }
        else {
            $scope.lunbo.currentId++;
        }
    };
    $interval(function () {
        if ($scope.lunbo.currentId == size-1) {
            $scope.lunbo.currentId = 1;
        }
        else {
            $scope.lunbo.currentId++;
        }
    }, 3000);


}]);


mainCtrl.controller("communityApplyCtrl", ["$scope", function($scope) {
    
}]);


mainCtrl.controller("swyListCtrl", ["$scope", function($scope) {
    
}]);

mainCtrl.controller("dataStatisticsCtrl", ["$scope", function($scope) {
    $scope.data={
        aa:45
    };
	$scope.data1 = [  
        {
            isSolve: 'resolved',
            name: '已解决',
            value: $scope.data.aa
        }, {
            isSolve: 'notSolved',
            name: '未解决',
            value: 50
        }, {
            isSolve: 'canNotSolve',
            name: '不可解决',
            value: 310
        }
    ];  

    $scope.data2 = [  
        {
            isReport: 'Notreported',
            name: '社区解决',
            value: 65
        }, {
            isReport: 'reported',
            name: '上报区级',
            value: 310
        }
    ];  
    $scope.beginDate = "2016-08-10"; //起始日期


	$scope.show=function(){
		var startStamp = $scope.startDate;
		var endStamp = $scope.endDate;
        $scope.Bdate = "264656";

		if(!(startStamp && endStamp)){
			alert("未选择日期");
			return false;
		}
		if(startStamp > endStamp){
			alert("结束日期应大于起始日期");
			return false;
		}
		// console.log(Date.parse(startStamp));
		// console.log(Date.parse(endStamp));
	};
}]);

/**数据列表**/
mainCtrl.controller("dataListCtrl", ["$scope","$rootScope","$routeParams", function($scope,$rootScope,$routeParams) {
    $rootScope.path = "/data_list";
    if($routeParams.flag == "resolved"){
        $scope.text = "已解决";
    }else if($routeParams.flag == "notSolved"){
        $scope.text = "未解决";
    }else if($routeParams.flag == "canNotSolve"){
        $scope.text = "不可解决";
    }else if($routeParams.flag == "Notreported"){
        $scope.text = "社区解决";
    }else if($routeParams.flag == "reported"){
        $scope.text = "上报区级";
    }
}]);

mainCtrl.controller("dataDetailCtrl", ["$scope","$rootScope","$routeParams","$timeout", function($scope,$rootScope,$routeParams,$timeout) {
    
    $rootScope.path = "/data_detail";
    $scope.offlineOpts = {retryInterval: 5000};

    var longitude = 121.506191;
    var latitude = 31.245554;
    $scope.mapOptions = {
        center: {
            longitude: longitude,
            latitude: latitude
        },
        zoom: 17,
        city: 'ShangHai',
        markers: [{
            longitude: longitude,
            latitude: latitude,
            icon: 'img/mappiont.png',
            width: 49,
            height: 60,
            title: 'Where',
            content: 'Put description here'
        }]
    };

    $scope.mapLoaded = function(map) {
        console.log(map);
    };

    $timeout(function() {
        $scope.mapOptions.center.longitude = 121.500885;
        $scope.mapOptions.center.latitude = 31.190032;
        $scope.mapOptions.markers[0].longitude = 121.500885;
        $scope.mapOptions.markers[0].latitude = 31.190032;
    }, 5000);
    
}]);

mainCtrl.controller("noticeCtrl", ["$scope", function($scope) {
    
}]);

mainCtrl.controller("noticeAddCtrl", ["$scope","$rootScope","$routeParams","inform", function($scope,$rootScope, $routeParams,inform) {
    $rootScope.path = "/notice_add";
    if($routeParams.id == "add"){
        $scope.text = "新建公告";
    }else{
        $scope.text = "公告详情";
    }
    $scope.model={isChecked:'自定义'};
    $scope.save = function(){
    	if(!$scope.content && !$scope.url){
    		// alert("超链接或者文本内容必须输入一项");
    		inform.add("超链接或者文本内容必须输入一项",{
				ttl: 2000, type: 'danger'
			});
			return;
    	}
    };
}]);


mainCtrl.controller("modifyPasswordCtrl", ["$scope","$rootScope","$routeParams", function($scope,$rootScope,$routeParams) {
    if($routeParams.flag == "gov"){
        $scope.text = "修改区级登录密码";
    }else if($routeParams.flag == "com_login"){
        $scope.text = "修改社区登录密码";
    }else if($routeParams.flag == "com_second"){
        $scope.text = "修改社区二级密码";
    }
}]);
