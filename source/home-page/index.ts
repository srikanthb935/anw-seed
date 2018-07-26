import { HomePageComponent } from './home-page.component';
 
export const HomePageModule = angular.module(
  "fnd.home",  [])
  .component( HomePageComponent.NAME, new HomePageComponent() )
  .name;