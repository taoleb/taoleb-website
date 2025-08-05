// 哲学页面功能
import PhilosophyData from "@/page_data/Philosophy";

interface PhilosophyArticle {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  link: string;
  cover?: string;
  featured: boolean;
}

class PhilosophyManager {
  private container: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  private async init() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initPhilosophy());
    } else {
      this.initPhilosophy();
    }
  }

  private async initPhilosophy() {
    this.container = document.querySelector('.vh-philosophy-container');
    if (!this.container) return;

    try {
      let articles: PhilosophyArticle[] = [];

      // 如果有API接口，优先使用API数据
      if (PhilosophyData.api) {
        const response = await fetch(PhilosophyData.api);
        articles = await response.json();
      } else {
        // 使用静态数据
        articles = PhilosophyData.data;
      }

      this.renderPhilosophy(articles);
    } catch (error) {
      console.error('加载哲学文章数据失败:', error);
      this.renderError();
    }
  }

  private renderPhilosophy(articles: PhilosophyArticle[]) {
    if (!this.container) return;

    // 按featured排序，featured文章优先显示
    const sortedArticles = articles.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    if (sortedArticles.length === 0) {
      this.renderEmpty();
      return;
    }

    const articlesHTML = sortedArticles.map(article => this.createArticleCard(article)).join('');
    
    this.container.innerHTML = `
      <div class="philosophy-intro">
        <h2>🧠 哲学思考</h2>
        <p>在这里分享我的哲学思考、人生感悟和对经典哲学著作的解读。哲学不仅仅是抽象的思辨，更是指导我们如何更好地理解世界、认识自我、面对人生的智慧。</p>
        <div class="philosophy-quote">
          <blockquote>"哲学始于惊奇，终于智慧。"</blockquote>
        </div>
      </div>
      <div class="philosophy-articles">
        ${articlesHTML}
      </div>
    `;

    // 添加交互事件
    this.addEventListeners();
  }

  private createArticleCard(article: PhilosophyArticle): string {
    const tagsHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    const coverImage = article.cover ? `<div class="article-cover"><img src="${article.cover}" alt="${article.title}" loading="lazy"></div>` : '';

    return `
      <article class="article-card" data-article="${article.title}">
        ${coverImage}
        <div class="article-header">
          <h3>${article.title}</h3>
          <div class="article-meta">
            <span class="article-date">${article.date}</span>
            <span class="article-category">${article.category}</span>
          </div>
        </div>
        <div class="article-content">
          <p class="article-excerpt">${article.excerpt}</p>
          <div class="article-tags">
            ${tagsHTML}
          </div>
          <a href="${article.link}" class="article-link">阅读全文</a>
        </div>
      </article>
    `;
  }

  private renderEmpty() {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div class="philosophy-intro">
        <h2>🧠 哲学思考</h2>
        <p>在这里分享我的哲学思考、人生感悟和对经典哲学著作的解读。哲学不仅仅是抽象的思辨，更是指导我们如何更好地理解世界、认识自我、面对人生的智慧。</p>
        <div class="philosophy-quote">
          <blockquote>"哲学始于惊奇，终于智慧。"</blockquote>
        </div>
      </div>
      <div class="philosophy-empty">
        <div class="empty-icon">📚</div>
        <h3>暂无哲学文章</h3>
        <p>这里将分享我的哲学思考和对经典著作的解读</p>
        <a href="/article/new" class="add-article-btn">写一篇哲学文章</a>
      </div>
    `;
  }

  private addEventListeners() {
    // 为文章卡片添加点击事件
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // 如果点击的是链接，不触发卡片点击事件
        if ((e.target as HTMLElement).tagName === 'A') return;
        
        const articleTitle = card.getAttribute('data-article');
        this.showArticleDetails(articleTitle);
      });
    });
  }

  private showArticleDetails(articleTitle: string | null) {
    if (!articleTitle) return;

    const article = PhilosophyData.data.find(a => a.title === articleTitle);
    if (!article) return;

    // 跳转到文章详情页
    window.location.href = article.link;
  }

  private renderError() {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div class="philosophy-empty">
        <div class="empty-icon">😅</div>
        <h3>加载失败</h3>
        <p>哲学文章数据加载失败，请稍后再试。</p>
      </div>
    `;
  }
}

// 创建全局实例
let philosophyManagerInstance: PhilosophyManager | null = null;

// 初始化函数
export const initPhilosophy = () => {
  // 如果已经存在实例，先销毁
  if (philosophyManagerInstance) {
    philosophyManagerInstance = null;
  }
  
  // 创建新实例
  philosophyManagerInstance = new PhilosophyManager();
};

// 销毁函数
export const destroyPhilosophy = () => {
  if (philosophyManagerInstance) {
    philosophyManagerInstance = null;
  }
};

// 首次初始化
initPhilosophy();

export default PhilosophyManager; 