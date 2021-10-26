'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async list(data) {
    const { app, ctx } = this;
        const options = {
            where: {
              article_id:1,
            },
        };
        // const result = await this.app.mysql.update("wx_article", {image:JSON.stringify(data.image)}, options);
        const results = await this.app.mysql.select('wx_article');
        return results;
  }
}

module.exports = HomeService;



'https://2f.zol-img.com.cn/product_small/15_200x150/779/ceRlkQBaCZ3E.jpg'
华为nova 9 Pro（8GB/128GB/全网通
8.6'
￥3499
'https://2b.zol-img.com.cn/product_small/15_200x150/735/ceeP3oH2m5Cw.jpg'
vivo X70 Pro+（12GB/256GB/全网通/5G版）
8.7'
￥5999
'https://2f.zol-img.com.cn/product_small/15_200x150/719/cez6uyNdeRBEg.jpg'
iQOO Z5（8GB/128GB/全网通/5G版）
8.7'
￥1899
'https://2f.zol-img.com.cn/product_small/14_200x150/701/ceEdxMIUthtc.jpg'
一加9 Pro（12GB/256GB/全网通/5G版）
8.6'
￥5499
'https://2b.zol-img.com.cn/product_small/14_200x150/847/ceSEIUYm0b2ws.jpg'
魅族18 Pro（8GB/256GB/全网通/5G版）
8.4'
￥4499
'https://2e.zol-img.com.cn/product_small/15_200x150/778/ce6JZsWnaYLlc.jpg'
华为P50 Pro（8GB/256GB/全网通/麒麟9000）
8.6'
￥6488
'https://2d.zol-img.com.cn/product_small/14_200x150/121/ceysMXALu7e.jpg'
华为Mate40 Pro（8GB/256GB/全网通/5G版/玻璃版）
8.7'
￥6999
'https://2a.zol-img.com.cn/product_small/14_200x150/234/cebPerwOSyCqI.jpg'
iQOO 7（12GB/256GB/全网通/5G版）
8.7'
￥4198
'https://2b.zol-img.com.cn/product_small/14_200x150/909/ceUcbkazTgI.jpg'
realme GT Neo（8GB/128GB/全网通/5G版）
8.6'
￥1999
'https://2b.zol-img.com.cn/product_small/15_200x150/965/ceYePfeUbQ.jpg'
OPPO K9 Pro（8GB/128GB/全网通/5G版）
8.9'
￥2199
'https://2d.zol-img.com.cn/product_small/15_200x150/823/ceg3vKco5njZY.jpg'
苹果iPhone 13（128GB/全网通/5G版）
6.5'
￥5999
'https://2b.zol-img.com.cn/product_small/15_200x150/995/ceKeui8s7DaU6.jpg'
一加9RT（8GB/128GB/全网通/5G版）
8.9'
￥3299
'https://2c.zol-img.com.cn/product_small/15_200x150/782/cepo2dhMWwPP2.jpg'
华为nova 9（8GB/128GB/全网通）
6.7'
￥2699
'https://i0-prosmall-fd.zol-img.com.cn/t_s200x150/g6/M00/0B/01/ChMkKWDKCnaIOtOsAAFQYKWmBx4AAQtTQNMgXgAAVB4600.jpg'
荣耀50（8GB/256GB/全网通/5G版）
8.5'
￥2999
'https://2c.zol-img.com.cn/product_small/15_200x150/846/ceCfplnxBB6PI.jpg'
苹果iPhone 13 Pro（128GB/全网通/5G版）
6.8'
￥7999
'https://2c.zol-img.com.cn/product_small/15_200x150/252/ceykvHxx2dIu6.jpg'
OPPO Find X3 Pro 摄影师版（16GB/512GB/全网通/5G版）
9.2'
￥6499
'https://i3-prosmall-fd.zol-img.com.cn/t_s200x150/g6/M00/03/06/ChMkKWA3tw2IV6hUAACvlPyICi0AAKf0wOXoP4AAK-s773.jpg'
Redmi K40（12GB/256GB/全网通/5G版）
6.6'
￥2499
'https://i3-prosmall-fd.zol-img.com.cn/t_s200x150/g6/M00/04/01/ChMkKmECsfaIdpuAAACA45EWHLMAASRKAMHFH0AAID7089.jpg'
华为P50（8GB/128GB/全网通）
6.9'
￥4488
'https://2e.zol-img.com.cn/product_small/15_200x150/932/cePBAtjdQW9I.jpg'
荣耀Magic3 Pro（8GB/256GB/全网通/5G版）
8.8'
￥5999
'https://2e.zol-img.com.cn/product_small/14_200x150/602/ceAffEC7W3bQ.jpg'
OPPO Reno6（12GB/256GB/全网通/5G版）
9.1'
￥2999
'https://2d.zol-img.com.cn/product_small/14_200x150/425/cepVn4AgEmY0E.jpg'
小米11 Ultra（12GB/512GB/全网通/5G版）
6.4'
￥6499
'https://i5-prosmall-fd.zol-img.com.cn/t_s200x150/g6/M00/0E/0A/ChMkKWFK38GIXMN4AAGPOINMQlQAAT7bAO4KGkAAY9Q815.jpg'
realme GT Neo2（8GB/256GB/全网通/5G版）
8.6'
￥2699
'https://2a.zol-img.com.cn/product_small/15_200x150/482/ceH3hbyo9J4cE.jpg
小米Civi（8GB/256GB/全网通/5G版）
6.9'
￥2899
'https://2e.zol-img.com.cn/product_small/14_200x150/246/ce2DLNosyziLQ.jpg
小米11（8GB/128GB/全网通/5G版）
8.4'
￥3599
'https://i3-prosmall-fd.zol-img.com.cn/t_s200x150/g6/M00/03/04/ChMkKWCt9PyIMpPsAADhWcIov2kAAPfKgI7e-kAAOFx933.jpg'
Redmi Note 10 Pro（8GB/128GB/全网通/5G版）
7.0'
￥1799
'https://2d.zol-img.com.cn/product_small/15_200x150/789/ceDJABh4BYs.jpg
华为P50（8GB/256GB/全网通）
6.9'
￥4988
'https://i3-prosmall-fd.zol-img.com.cn/t_s200x150/g6/M00/0B/04/ChMkKWEVJJiIfMwOAAC99xdXjAQAAStvQO4_i8AAL4P833.jpg'
荣耀Magic3（8GB/128GB/全网通/5G版）
8.6'
￥4599
'https://2e.zol-img.com.cn/product_small/15_200x150/750/ceFjRnonIo16Q.jpg'
vivo X70（8GB/256GB/全网通/5G版）
6.8'
￥3999
'https://2a.zol-img.com.cn/product_small/14_200x150/676/ceGo19aj4CaaM.jpg'
iQOO Neo5（8GB/256GB/全网通/5G版）
8.8'
￥2699
'https://2a.zol-img.com.cn/product_small/14_200x150/518/ceZzptpvMPks.jpg'
OPPO Find X3 Pro（12GB/256GB/全网通/5G版）
9.1'
￥5499
'https://2d.zol-img.com.cn/product_small/15_200x150/783/cemCHo0PZqJ3k.jpg'
华为nova 9（8GB/256GB/全网通）
6.7'
￥2999
