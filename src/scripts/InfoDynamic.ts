import vh from 'vh-plugin'
import { fmtTime } from '@/utils/index'
import { $GET } from '@/utils/index'
// 图片懒加载
import vhLzImgInit from "@/scripts/vhLazyImg";
// 获取封面图
import getCover from "@/utils/getCover";
// 导入blog集合
import { getCollection } from 'astro:content';

const InfoDynamicInit = async (data: any) => {
  const infoDynamicDOM = document.querySelector('.main-inner-content>.vh-tools-main>main.talking-main')
  if (!infoDynamicDOM) return;
  
  try {
    let res = data;
    if (typeof data === 'string') {
      res = await $GET(data);
    }
    
    // 使用与主页相同的卡片样式
    const cardsHTML = res.map(async (item: any) => {
      const ARTICLE_COVER = await getCover(item.data.cover || '');
      // 创建简介：显示前80个字符，如果内容超过80字符则添加省略号
      const description = item.body.length > 80 ? item.body.substring(0, 80) + '...' : item.body;
      
      return `
        <article class="vh-article-item vh-animation vh-animation-init vh-article-link${item.data.top ? " active" : ""}">
          <section class="vh-article-banner">
            <img src="/assets/images/lazy-loading.webp" data-vh-lz-src="${ARTICLE_COVER}" alt="${item.data.title}" />
          </section>
          <header>
            <h3>
              <a class="vh-article-cat vh-cat-${item.data.categories}" href="/categories/${item.data.categories}">${item.data.categories}</a>
              <time>${fmtTime(item.data.date)}</time>
            </h3>
            <h1 class="title">
              <a class="vh-ellipsis" href="/info-dynamic/${item.data.id}" target="_blank">${item.data.title}</a>
            </h1>
          </header>
          <h2 class="vh-article-excerpt vh-ellipsis line-2">${description}</h2>
          <h4 class="vh-article-taglist vh-ellipsis">
            ${item.data.tags.map((tag: string) => `<a href="/tag/${tag}">${tag}</a>`).join('')}
          </h4>
        </article>
      `;
    });
    
    // 等待所有卡片HTML生成完成
    const cardsHTMLArray = await Promise.all(cardsHTML);
    infoDynamicDOM.innerHTML = `
      <section class="article-list">
        ${cardsHTMLArray.join('')}
      </section>
    `;
    
    // 图片懒加载
    vhLzImgInit();
  } catch (error) {
    console.error('获取信息动态数据失败:', error);
    vh.Toast('获取数据失败')
  }
}

// 信息动态初始化 - 从blog集合获取数据
const getBlogData = async () => {
  try {
    const posts = await getCollection('blog');
    // 按日期排序，最新的在前面
    return posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  } catch (error) {
    console.error('获取blog集合数据失败:', error);
    return [];
  }
};

export default async () => {
  const blogData = await getBlogData();
  return InfoDynamicInit(blogData);
};
