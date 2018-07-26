import { RoutingConfig } from "./index.routing";
import { HomePageModule } from "./home-page";

let uiRouterModule = require("angular-ui-router");
let uiBootstrapModule = require("angular-ui-bootstrap");

let fndModule = angular.module("freshndesi", [
    uiRouterModule, 
    uiBootstrapModule,
    HomePageModule
  ])
  .config(RoutingConfig);

export default fndModule;
