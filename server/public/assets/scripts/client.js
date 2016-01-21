/**
 * Created by kyracrowston on 1/20/16.
 */
var app = angular.module('talentAgency', []);
app.controller('MainController', ['$scope', '$http', function($scope, $http){
    var newTalent = {};
    $scope.usrcooks = false;
    $scope.usrarson = false;
    $scope.usrnunchucks = false;
    $scope.usrstick = false;
    $scope.skills = {Cookies:false, Arson:false, Nunchuck:false, Stick:false};
    $scope.talent = {
        skills:['talent']
    };

    $scope.submitTalent = function(){
        newTalent.first_name = $scope.talent.firstname;
        newTalent.last_name = $scope.talent.lastname;
        newTalent.phone = $scope.talent.phone;
        newTalent.low_range = $scope.talent.lowrange;
        newTalent.high_range = $scope.talent.highrange;
        newTalent.cookies = $scope.skills.Cookies;
        newTalent.arson = $scope.skills.Arson;
        newTalent.nunchucks = $scope.skills.Nunchucks;
        newTalent.stick = $scope.skills.Stick;

        return $http.post('/sendTalent', newTalent).success(function(response) {
            console.log(response[response.length/2]);
            var serversideObject = response;
            var skillsArray = [];
            var bigArray = [];

            //for(var i = 0; i < serversideObject.length; i++){
            //    if(serversideObject[i].cookies == true){
            //        $scope.usrcooks = true;
            //    }
            //    if(serversideObject[i].arson == true){
            //        $scope.usrarson = true;
            //    }
            //    if(serversideObject[i].nunchucks == true){
            //        $scope.usrnunchucks = true;
            //    }
            //    if(serversideObject[i].stick == true){
            //        $scope.usrstick = true;
            //    }
            //    return $scope.informationHolder = serversideObject;
            //}
            $scope.informationHolder = serversideObject;

            //for(var i = 0; i < serversideObject.length; i++){
            //    skillsArray.push(serversideObject[i].serversideObject[i].cookies);
            //    skillsArray.push(serversideObject[i].arson);
            //    skillsArray.push(serversideObject[i].nunchucks);
            //    skillsArray.push(serversideObject[i].stick);
            //}
            //console.log(skillsArray);
        });

    };

}]);

///**
// * Created by kyracrowston on 1/20/16.
// */
//var app = angular.module('talentAgency', []);
//app.controller('MainController', ['$scope', '$http', function($scope, $http){
//    var newTalent = {};
//
//    var data=[];
//
//    $scope.skills = {Cookies:false, Arson:false, Nunchuck:false, Stick:false};
//    $scope.talent = {
//        skills:['talent']
//    };
//
//    $scope.talentData = data;
//
//    $scope.submitTalent = function(){
//        newTalent.first_name = $scope.talent.firstname;
//        newTalent.last_name = $scope.talent.lastname;
//        newTalent.phone = $scope.talent.phone;
//        newTalent.low_range = $scope.talent.lowrange;
//        newTalent.high_range = $scope.talent.highrange;
//        newTalent.cookies = $scope.skills.Cookies;
//        newTalent.arson = $scope.skills.Arson;
//        newTalent.nunchucks = $scope.skills.Nunchucks;
//        newTalent.stick = $scope.skills.Stick;
//        console.log(newTalent);
//
//        return $http.post('/sendTalent', newTalent).success(function(response) {
//            console.log(response);
//            data.push(response);
//        });
//        console.log(data);
//    };
//
//}]);



