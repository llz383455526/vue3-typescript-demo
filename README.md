# vue3-typescript-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# CHANGELOG
## vue add vue-next
```
升级到vue3， 执行vue add vue-next。可以看到以下变化：
1.  vue版本升级到3，vue-router,vuex版本升级到4
2.  删除了vue-template-compiler依赖,新增了@vue/compiler-sfc依赖
3.  main.ts:  不需要new Vue()创建实例，是通过creatApp()创建实例，Vue.use()被移除，通过createApp()创建的实例上有use方法
4. router/index.ts: vueRouter实例也不需要new了，而是通过createRouter()创建；history的值是通过createWebHashHistory()和createWebHistory()方法生成。  这里有个坑：vue-router并没有导出RouteConfig类型，下个commit会解决
5. store/index.ts: new Vuex.Store()，改成了Vuex.createStore()。 其实两者是一样的，createStore()内部就是new Vuex.Store()
```
## 修复vue-router错误
