import { createStore } from "vuex";
import users from "./modules/users";
import articles from "./modules/article";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { users, articles },
});
