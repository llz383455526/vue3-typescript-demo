import { Router } from 'vue-router';
import { Store } from "vuex";

export interface Config {
  count?: Number
  defaultValue: Number
}

export interface globalPropertiesInterface {
  $http: Function,
  $router: Router,
  $store: Store<any>
}