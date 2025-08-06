
import vh from 'vh-plugin'
import { fmtTime } from '@/utils/index'
import { $GET } from '@/utils/index'
// 图片懒加载
import vhLzImgInit from "@/scripts/vhLazyImg";

const InfoDynamicInit = async (data: any) => {
  const infoDynamicDOM = document.querySelector('.main-inner-content>.vh-tools-main>main.talking-main')
  if (!infoDynamicDOM) return;
  
  try {
    let res = data;
    if (typeof data === 'string') {
      res = await $GET(data);
    }
    
    console.log('信息动态数据:', res); // 调试日志
    
    // 使用与主页相同的卡片样式
    const cardsHTML = res.map((item: any) => {
      // 直接使用封面图片URL，避免在客户端使用Node.js模块
      const ARTICLE_COVER = item.cover || '/assets/images/banner/072c12ec85d2d3b5.webp';
      const description = item.content.length > 100 ? item.content.substring(0, 100) + '...' : item.content;
      
      // 处理链接：如果有link字段则使用link，否则使用默认的动态详情页链接
      const articleLink = item.link || `/info-dynamic/${item.id}`;
      
      return `
        <article class="vh-article-item vh-animation vh-animation-init vh-article-link${item.top ? " active" : ""}">
          <section class="vh-article-banner">
            <img src="/assets/images/lazy-loading.webp" data-vh-lz-src="${ARTICLE_COVER}" alt="${item.title}" />
          </section>
          <header>
            <h3>
              <a class="vh-article-cat vh-cat-${item.categories}" href="/categories/${item.categories}">${item.categories}</a>
              <time>${fmtTime(item.date)}</time>
            </h3>
            <h1 class="title">
              <a class="vh-ellipsis" href="${articleLink}">${item.title}</a>
            </h1>
          </header>
          <h2 class="vh-article-excerpt vh-ellipsis line-2">${description}</h2>
          <h4 class="vh-article-taglist vh-ellipsis">
            ${item.tags.map((tag: string) => `<a href="/tag/${tag}">${tag}</a>`).join('')}
          </h4>
        </article>
      `;
    });
    
    infoDynamicDOM.innerHTML = `
      <section class="article-list">
        ${cardsHTML.join('')}
      </section>
    `;
    
    // 图片懒加载
    vhLzImgInit();
  } catch (error) {
    console.error('获取信息动态数据失败:', error);
    vh.Toast('获取数据失败')
  }
}

// 信息动态初始化
import INFO_DYNAMIC_DATA from "@/page_data/InfoDynamic";
const { api, data } = INFO_DYNAMIC_DATA;
export default () => InfoDynamicInit(api || data);