myApp.controller('playController', ['$scope', 'playFactory', 'usersFactory', 'triviasFactory', '$location', '$rootScope', '$cookies', function ($scope, playFactory, usersFactory, triviasFactory, $location, $rootScope, $cookies) {
    console.log('playController loaded');

    $scope.random = Math.round(Math.random() * (5 - 1) + 1);
    // $scope.randomquestion = Math.random() * (max - min) + min
	$scope.logOut = function () {
        $cookies.remove('token');
        $cookies.remove('currentuser');
        $cookies.remove('currentuser_id');
        $rootScope.token = null;
        $rootScope.currentuser = null;
        $rootScope.currentuser_id = null;
        $location.url('/');
    };

    triviasFactory.getall(function (output) {
        console.log("All trivias", output.data);
        if (output.data.length >= 3) {
            var q = Math.round(Math.random() * (output.data.length - 1) + 1);
            // console.log(q);
            var one = q;
            $scope.question1 = output.data[q-1];
            q = Math.round(Math.random() * (output.data.length - 1) + 1);
            while (q == one) {
                q = Math.round(Math.random() * (output.data.length - 1) + 1);
            }
            // console.log(q);
            var two = q;
            $scope.question2 = output.data[q-1];
            while (q == one || q == two) {
                q = Math.round(Math.random() * (output.data.length - 1) + 1);
            }
            // console.log(q);
            $scope.question3 = output.data[q-1];
            // ....
            var p = Math.round(Math.random() * (3 - 1) + 1);
            // console.log(p);
            var one = p;
            p = Math.round(Math.random() * (3 - 1) + 1);
            while (p == one) {
                p = Math.round(Math.random() * (3 - 1) + 1);
            }
            // console.log(p);
            var two = p;
            while (p == one || p == two) {
                p = Math.round(Math.random() * (3 - 1) + 1);
            }
            // console.log(p);
            var three = p;
            $scope.question1.order = [one, two, three]
            // ....
            var p = Math.round(Math.random() * (3 - 1) + 1);
            // console.log(p);
            var one = p;
            p = Math.round(Math.random() * (3 - 1) + 1);
            while (p == one) {
                p = Math.round(Math.random() * (3 - 1) + 1);
            }
            // console.log(p);
            var two = p;
            while (p == one || p == two) {
                p = Math.round(Math.random() * (3 - 1) + 1);
            }
            // console.log(p);
            var three = p;
            $scope.question2.order = [one, two, three]
            // ....
            var p = Math.round(Math.random() * (3 - 1) + 1);
            // console.log(p);
            var one = p;
            p = Math.round(Math.random() * (3 - 1) + 1);
            while (p == one) {
                p = Math.round(Math.random() * (3 - 1) + 1);
            }
            // console.log(p);
            var two = p;
            while (p == one || p == two) {
                p = Math.round(Math.random() * (3 - 1) + 1);
            }
            // console.log(p);
            var three = p;
            $scope.question3.order = ["question3.answer"+one, "question3.answer"+two, "question3.answer"+three]
            console.log($scope.question1.order, $scope.question2.order, $scope.question3.order);
            $scope.questions = [$scope.question1, $scope.question2, $scope.question3]
        }
        else if (output.data.length == 2) {
            $scope.question1 = output.data[0];
            $scope.question2 = output.data[1];
            $scope.questions = [$scope.question1, $scope.question2]
        }
        else if (output.data.length == 1) {
            $scope.question1 = output.data[0];
            $scope.questions = [$scope.question1]
        }
        else {

        }
        // $scope.alltrivias = output;
    });

    $scope.submit = function () {
        console.log($scope.answer1);
        console.log($scope.answer2);
        console.log($scope.answer3);
        var win = 0;
        var lost = 0;
        if ($scope.question1.answer1 == $scope.answer1) {
            console.log("CORRECT");
            win ++;
        }
        else {
            lost ++;
            console.log("INCORRECT");
        }
        if ($scope.question2.answer1 == $scope.answer2) {
            console.log("CORRECT");
            win ++;
        }
        else {
            lost++;
            console.log("INCORRECT");
        }
        if ($scope.question3.answer1 == $scope.answer3) {
            console.log("CORRECT");
            win++;
        }
        else {
            lost++;
            console.log("INCORRECT");
        }
        playFactory.score(win, lost, function (output) {

        });
        // console.log("win", win, "lost", lost);
        $scope.answer1 = {};
        $scope.answer2 = {};
        $scope.answer3 = {};
        $location.url('/dashboard');
    }
    $scope.answer1 = {};
    $scope.answer2 = {};
    $scope.answer3 = {};
	console.log("ROOT USER IS", $rootScope.currentuser);
}]);
