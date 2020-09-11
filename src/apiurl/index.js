// export default [
//     {
//         name: 'api', // 封装的接口地址
//         url: '/XXX/api' // 接口地址
//     }
// ]

   /**
    * api统一出口
    * */
   // 网站管理接口
   import websiteManageAPI from './websiteManageAPI';
   // 其他模块接口
   
   // 导出接口
   export default {
       websiteManageAPI,
       // ...
   }
