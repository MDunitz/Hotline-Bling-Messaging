var app = angular.module('myApp', [])

app.controller('formCtrl', function($scope, $http) {
    $scope.user = {};
    $scope.master = {to: "15627624447", from: "17148550762", body: "type in your message", mediaUrl: 'type in your link'};
    $scope.reset = function() {
        //$scope.user = angular.copy($scope.master);
        $scope.user = ''
    };
    //$scope.user = {'user.to': '', 'user.from': '', 'user.message':'' , 'user.mediaUrl': ''};
    $http.get("/").then(function(response) {
      console.log('success')
    }), function(response){
      console.log('error')
    };

  

  // $scope.sendPost = function (){

  //   console.log(data)
  //   $http.post('/send', data, config).
  //     success(function (data){
  //     console.log(data)
  //     console.log('posted successfully')
  //   }).error(function(data){

  //     console.log('error in posting')
  //   })
  //  }
$scope.sendPost = function (){
    var data = $.param({
                to: $scope.user.to,
                from: $scope.user.from,
                messages: $scope.user.messages,
                mediaUrl: $scope.user.mediaUrl,
           });
  var config = { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }         
  $http.post('/send', data, config).then(function (data){
    console.log(data)
  }, function (err){
    console.log(err)
  });
}
   

   // $scope.sendPost = function (){
   //  console.log('hit')
   //  $http({
   //      method: "POST",
   //      url: '/send',
   //      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
   //      // data: $.param({
   //      //         to: $scope.user.to,
   //      //         from: $scope.user.from,
   //      //         body: $scope.user.body,
   //      //         mediaUrl: $scope.user.mediaUrl
   //      //    })
   //  data: {to: $scope.user.to}
   //  }).success(function(result){
   //      console.log(result);
   //  });
   // } 
      
 
 
}); 

    //$scope.reset();

// $http({
//   method: 'GET',
//   url: 'index.html'
//   }).then(function successCallback(response) {
   
//     response.status(200)
//     console.log(response.data)
//   }, function errorCallback(response) {
  
//   });

//   $http({
//     method: 'POST',
//     url: 'index.html'
//     }).then(function successCallback(response) {
      
//       console.log(response.data)

//     }, function errorCallback(response) {
      
//     });

// $http.get('http://localhost:8080', config).then(successCallback, errorCallback);
// // $http.post('index.html', data, config).then(successCallback , errorCallback);




// body: "Hey this is working!", 
// mediaUrl: "http://farm2.static.flickr.com/1075/1404618563_3ed9a44a3a.jpg", 


