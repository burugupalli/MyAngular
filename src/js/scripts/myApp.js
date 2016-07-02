/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module("myApp",[]);
//myApp.factory("addService", function(){
//    return{
//        addNumbers : function(x, y){
//            return x+y;
//        }
//    }
//});

myApp.controller("storeController", function($scope, $http){
    var items = [
        {shortDesc: "plaid poplin shirt", likes:0, dislikes:0, price:'29.99', imgSrc: "images/item1.jpg", quantity:10, discountPrice:'19.99', discount:true},
        {shortDesc: "plaid lenin shirt", likes:0, dislikes:0, price:'34.99', imgSrc: "images/item2.jpg", quantity:10},
        {shortDesc: "normal poplin shirt", likes:0, dislikes:0, price:'24.99', imgSrc: "images/item3.jpg", quantity:0},
        {shortDesc: "black lenin shirt", likes:0, dislikes:0, price:'24.99', imgSrc: "images/item4.jpg", quantity:10},
        {shortDesc: "white lenin shirt", likes:0, dislikes:0, price:'39.99', imgSrc: "images/item5.jpg", quantity:10, discountPrice:'29.99', discount:true},
        {shortDesc: "normal lenin shirt", likes:0, dislikes:0, price:'29.99', imgSrc: "images/item6.jpg", quantity:10},
        {shortDesc: "plaid shirt", likes:0, dislikes:0, price:'19.99', imgSrc: "images/item7.jpg", quantity:0},
        {shortDesc: "lenin shirt", likes:0, dislikes:0, price:'29.99', imgSrc: "images/item8.jpg", quantity:10},
        {shortDesc: "poplin shirt", likes:0, dislikes:0, price:'19.99', imgSrc: "images/item9.jpg", quantity:10},
        {shortDesc: "T shirt", likes:10, dislikes:0, price:'9.99', imgSrc: "images/item10.jpg", quantity:10}
    ];
    $http.get('students.php')
            .then(function(response){
                console.log(response);
                //$scope.data = response.data.records;
    }, function(response){
        console.log(response);
    });
    $scope.items = items;
    $scope.sortClass = "likes";
    $scope.incrementLikes = function(me){
        me.likes++;
       // $scope.items[index].likes = me.likes;    
    };
    $scope.decrementLikes = function(me){
        me.dislikes++;
      //  $scope.items[index].dislikes = me.dislikes;
    };
    $scope.setSortColumn = function(name){
        $scope.sortClass = name;
    };
    $scope.itemClass = function(name){
        return name.discount ? 'item-disprice' : 'item-price';
    };
//    $scope.addSrvc = function(x, y){
//        $scope.output = addService.addNumbers(x, y);
//    };
});

