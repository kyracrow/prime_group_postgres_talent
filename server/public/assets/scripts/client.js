/**
 * Created by kyracrowston on 1/20/16.
 */
var app = angular.module('talentAgency', []);
app.controller('MainController', ['$scope', '$http', function($scope, $http){
    var newTalent = {};

    $scope.skills = ['Cookies', 'Arson', 'Nunchucks', 'Driving Stick'];
    $scope.talent = {
        skills:['talent']
    };

    $scope.submitTalent = function(){
        newTalent.first_name = $scope.talent.firstname;
        newTalent.last_name = $scope.talent.lastname;
        newTalent.phone = $scope.talent.phone;
        newTalent.low_range = $scope.talent.lowrange;
        newTalent.high_range = $scope.talent.highrange;
        console.log(newTalent);
        return $http.post('/sendTalent', newTalent).success(function(response){
            console.log(response);
        });
    };

}]);

