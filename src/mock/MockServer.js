import Mock from 'mockjs'; // 引入Mock
import banner from './banner.json';// webpack 默认对外暴露的：图片、Json数据格式

Mock.mock("/mock/banner",{code:200,data:banner});