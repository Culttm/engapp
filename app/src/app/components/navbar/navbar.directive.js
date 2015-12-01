(function() {
    'use strict';

    angular
        .module('app')
        .directive('mainNavbar', mainNavbar);

    /** @ngInject */
    function mainNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/_navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        return directive;

        /** @ngInject */
        function NavbarController($state) {
            var vm = this;

            vm.state = $state;

        }
    }

})();
