(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function () {
          // open the modal, which will allow the user to enter the room name  
            
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modalInstance'
            });
            
            modalInstance.result.then(function (name) {
                Room.add(name);
            }, function() {
               console.log("modal instance was closed"); 
            });
        };
    }
    
    

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();