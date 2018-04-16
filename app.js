
var app = angular.module("mealApp", []);

app.controller("mealController",function($scope,$http) {
 $scope.mealItems = [];
 $scope.keyw = '';
 $scope.results = true;
 $scope.meals = false;
 $scope.myrecipes = "No Results";
 $scope.myFunc = function(){
     $scope.keyw = this.keyword;
     var url = "http://www.recipepuppy.com/api/?q="+ $scope.keyw;

     $http.get(url).then( function(response) {
         $scope.recipes = response.data;
         if($scope.recipes.results.length == 0){
          $scope.myrecipes = "No Results";
      }
      else {
          $scope.myrecipes = "Search Results";
      }
  });
 }

 $scope.toggleResults = function(){
   $scope.meals = false;
   $scope.results = true;
   if($scope.recipes.results.length == 0){
      $scope.myrecipes = "No Results";
  }
  else {
      $scope.myrecipes = "Search Results";
  }
}

$scope.toggleMeals = function(){
   $scope.meals = true;
   $scope.results = false;
   if($scope.mealItems.length == 0){
      $scope.mymeals = "No Meals";
  }
  else {
      $scope.mymeals = "My Meals";
  }

}

$scope.addToMeal = function(recipe) {
   if($scope.mealItems.indexOf(recipe) == -1){
      $scope.mealItems.push(recipe);
  } 
}

$scope.removeMeal= function (x) {
    $scope.mealItems.splice(x, 1);
    if($scope.mealItems.length == 0){
      $scope.mymeals = "No Meals";
  }
}

});



