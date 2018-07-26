export class HomePageController {

  static NAME = "homePageController";

  /* @ngInject */
  constructor(  ) { }

  $onInit() {
    console.log("Home page Init.....");
  }
}

export class HomePageComponent implements ng.IComponentOptions {
  static NAME = "homePageComponent";
  template = require("./home-page.component.html");
  controller = HomePageController;
  controllerAs = "vm";
}
