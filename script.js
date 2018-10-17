/*angular.module('ToDo',[]).
controller('todoController', ['$scope', function($scope){
	 $scope.todos = [
	 {'title': 'Build an list','done':false}
	 ];

		$scope.addTodo = function(){
			$scope.todos.push({'title':$scope.newTodo,'done':false  });
			$scope.newTodo ="";
		}
		$scope.clearCompleted = function(){}
}]) ;*/

angular.module('mainApp',[]).

controller('app',['$scope', function($scope){

     $scope.tasks = [];
	$scope.searchEnter = function(){
		if(event.which ==13 && $scope.task != ""){
			$scope.addTask();
		}    
	};
     
	$scope.addTask =function() {
        $scope.tasks.push({'taskMsg':$scope.task,'status':'false'});
       // console.log($scope.tasks);
        $scope.task='';
	};
	$scope.contentEdit = function(){
		event.target.contentEditable =event.target.contentEditable == "false" ? "true": "false";
        
	};
	$scope.enterAgain =function(msg){
		if(event.which==13 && msg !=""){
			$scope.contentEdit();
		}
	}
	$scope.clearCompleted = function(){
		$scope.tasks = $scope.tasks.filter(function(item){
			return item.done
		})
	}

}
]);