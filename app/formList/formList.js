angular.module('myApp.formList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/formList', {
    templateUrl: 'formList/formList.html',
    controller: 'formListCtrl'
  });
}])

.controller('formListCtrl', ["$scope", "$location", function($scope, $location) {
  $scope.liste = [];
  $scope.listeOrj = [];

  // localStorage'ta var ise oradan okuuyp listeye atalım. yoksa service'ten http get sorgusu ile çekeriz (proje örneğinde verilen datayı statik olarak atıyorum)
  if(window.localStorage.StorageForms !== null && window.localStorage.StorageForms !== undefined) {
    $scope.liste = JSON.parse(window.localStorage.StorageForms);
    $scope.listeOrj = $scope.liste;
  }

  // Arama yapılırsa
  $scope.search = function(ev){ 
    let val = ev.target.value;

    if (val && val.trim() != '') {  // inputa bir harf girildiyse aramaya başla hem ismi hem soyismi arayalım. daha önce atadığım orj. listeyi filtreleyip, html'de bastığım listeye atalalım filtrelenmiş listeyi
      $scope.liste = $scope.listeOrj.filter((item) => {
        
        if (item.fields[0].name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (item.fields[0].name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }

        if (item.fields[1].name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (item.fields[1].name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
      });
    }
    else { // arama alanı boş bırakıldı ise, orjinal listeyi gösterelim.
      $scope.liste = $scope.listeOrj;
    }
  }

  
  // yeni form oluştur tıklanırsa
  $scope.clickGenerateNewForm = function(){ 
    $scope.requiredAlertShow = false;
    $scope.form = { "name": "", "description": "", createdAt: "", fields: [{ "required": true, "name": "", dataType: "STRING" }, { "required": true, "name": "", dataType: "STRING" },{ "required": false, "name": "", dataType: "NUMBER" } ]};
    
    angular.element(document.querySelector("#modal")).css("display", "block"); 
  };

  // formu kaydet
  $scope.clickSaveForm = function(){ 
    // ad, soyad ve form adı alanlarının doluluğunu kontrol ediyoruz.
    if($scope.form.fields[0].name === "" || $scope.form.fields[1].name === "" || $scope.form.name === "") {
      $scope.requiredAlertShow = true;

      setTimeout(() => {
        $scope.requiredAlertShow = false;
      }, 3000);

      return;
    }
    
    $scope.StorageForms =  [];
    // tarihi dolduruyoruz.
    $scope.form.createdAt = $scope.generateCurrentDate();

    //localstorage'ta kayıt var mı kontrol edelim, var ise oradaki verileri okuyalım. ve içeri kaydedelim.
    if(window.localStorage.StorageForms !== "" && window.localStorage.StorageForms !== undefined){
      $scope.StorageForms = JSON.parse(window.localStorage.StorageForms);
    }

    // form listelerine az önce doldurduğum formu ekliyoruz.
    $scope.StorageForms.push($scope.form);
    // local storage'taki alanı güncelliyoruz.
    window.localStorage.StorageForms = JSON.stringify(this.StorageForms);
    // form modelimi bir sonraki kayıt için sıfırlıyoruz.ve modalı kapatıyoruz.
    $scope.form = { "name": "", "description": "", createdAt: "", fields: [{ "required": true, "name": "", dataType: "STRING" }, { "required": true, "name": "", dataType: "STRING" },{ "required": false, "name": "", dataType: "NUMBER" } ]};
    angular.element(document.querySelector("#modal")).css("display", "none"); 
    // listeyi tekrar okuyalım, güncelleyelim
    $scope.liste = JSON.parse(window.localStorage.StorageForms);
    $scope.listeOrj = $scope.liste;
  }

  // form moldal'ını kapatan fonkisyon
  $scope.clickCloseModal = function(){ 
    $scope.form = { "name": "", "description": "", createdAt: "", fields: [{ "required": true, "name": "", dataType: "STRING" }, { "required": true, "name": "", dataType: "STRING" },{ "required": false, "name": "", dataType: "NUMBER" } ]};
    angular.element(document.querySelector("#modal")).css("display", "none"); 
  }

  // detay buttonuna tıklanınca çalışan fonksyiıon
  $scope.clickDetail = function(name){
    $location.path('/forms/' + name);
  }

  // istenilen formatta date yaratma fonksiyonu.
  $scope.generateCurrentDate = function(){  
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var current_date = year+'-'+month+'-'+day;
    
    return current_date;
  }
    
}]);


