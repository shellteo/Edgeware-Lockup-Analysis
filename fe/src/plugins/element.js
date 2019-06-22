import Vue from "vue";
import {
  Table,
  TableColumn,
  Icon,
  Loading,
  Tabs,
  TabPane,
} from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

Vue.component("elTable", Table);
Vue.component("elTableColumn", TableColumn);
Vue.component("elTabs", Tabs);
Vue.component("elTabPane", TabPane);
Vue.use(Loading.directive);
Vue.use(Icon);
Vue.prototype.$loading = Loading.service;
