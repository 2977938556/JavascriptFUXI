//将两个模块合并到一个模块中并且使用 export进行导出到外部
import  * as apiA from "./12A.js";
import  * as  apiB from "./12B.js";

export {apiA,apiB};