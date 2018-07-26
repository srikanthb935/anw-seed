/* @ngInject */
export function RoutingConfig(
  $stateProvider: ng.ui.IStateProvider, 
  $urlRouterProvider: ng.ui.IUrlRouterProvider, 
  $httpProvider: ng.IHttpProvider, 
  $locationProvider: ng.ILocationProvider) {

  $stateProvider
    .state("home", {
      url: "/home",
      template: `<home-page-component></home-page-component>`
    });

  $urlRouterProvider.otherwise("/home");
}