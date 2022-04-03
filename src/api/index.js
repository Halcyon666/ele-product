import requests from "./request";

// 三级联动接口
// /api/product/getBaseCategoryList
export const reqCategoryList = () => requests.get("/product/getBaseCategoryList");

import mockRequests from './mockReq';
// 获取Banner数据
export const reqGetBannerList = () => mockRequests.get('/banner');
