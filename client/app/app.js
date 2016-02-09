var app = angular.module('myApp', [])

app.controller('formCtrl', function($scope, $http) {
    $scope.user = {from: "15627624447", to: "17148550762"};
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
                mediaUrl: $scope.user.mediaUrl || dataL //|| 'http://cdn.fansided.com/wp-content/blogs.dir/229/files/2015/10/drake-hotline-bling.jpg',
           });
  var config = { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }         
  $http.post('/send', data, config).then(function (data){
    console.log(data)
  }, function (err){
    console.log(err)
  });
}
    

}); 





