import BlogShareData from '@/page_data/BlogShare'

class BlogShare {
  private container: HTMLElement | null = null
  private data: any[] = []
  
  init() {
    this.container = document.querySelector('.vh-blogshare-container')
    if (!this.container) return
    
    this.loadData()
  }
  
  async loadData() {
    try {
      if (BlogShareData.api) {
        const response = await fetch(BlogShareData.api)
        this.data = await response.json()
      } else {
        this.data = BlogShareData.data
      }
      this.render()
      this.bindEvents()
    } catch (error) {
      console.error('博客分享数据加载失败:', error)
      this.data = BlogShareData.data
      this.render()
      this.bindEvents()
    }
  }
  
  render() {
    if (!this.container || !this.data.length) return
    
    // 分离特色文章和普通文章
    const featuredPosts = this.data.filter(post => post.featured)
    const regularPosts = this.data.filter(post => !post.featured)
    
    // 获取所有分类
    const categories = [...new Set(this.data.map(post => post.category))]
    
    const html = `
      <div class="vh-blogshare-content">
        <!-- 分类筛选器 -->
        <div class="vh-blogshare-filters">
          <button class="vh-filter-btn active" data-category="all">全部</button>
          ${categories.map(cat => `
            <button class="vh-filter-btn" data-category="${cat}">${cat}</button>
          `).join('')}
        </div>
        
        <!-- 特色文章区域 -->
        ${featuredPosts.length > 0 ? `
          <div class="vh-blogshare-featured">
            <h2 class="vh-section-title">
              <span class="vh-title-icon">✨</span>
              特色推荐
            </h2>
            <div class="vh-featured-grid">
              ${featuredPosts.map(post => this.renderFeaturedCard(post)).join('')}
            </div>
          </div>
        ` : ''}
        
        <!-- 文章网格 -->
        <div class="vh-blogshare-grid">
          <h2 class="vh-section-title">
            <span class="vh-title-icon">📚</span>
            技术文章
          </h2>
          <div class="vh-posts-grid">
            ${regularPosts.map(post => this.renderPostCard(post)).join('')}
          </div>
        </div>
      </div>
    `
    
    this.container.innerHTML = html
  }
  
  renderFeaturedCard(post: any): string {
    return `
      <article class="vh-featured-card" data-category="${post.category}" data-link="${post.link}">
        <div class="vh-featured-image">
          <img src="${post.cover}" alt="${post.title}" loading="lazy">
          <div class="vh-featured-overlay">
            <span class="vh-category-tag">${post.category}</span>
          </div>
        </div>
        <div class="vh-featured-content">
          <div class="vh-featured-meta">
            <time class="vh-post-date">${post.date}</time>
            <span class="vh-read-time">${post.readTime}</span>
          </div>
          <h3 class="vh-featured-title">
            <a href="${post.link}" class="vh-article-link">${post.title}</a>
          </h3>
          <p class="vh-featured-desc">${post.description}</p>
          <div class="vh-featured-tags">
            ${post.tags.map((tag: string) => `
              <span class="vh-tag">#${tag}</span>
            `).join('')}
          </div>
        </div>
      </article>
    `
  }
  
  renderPostCard(post: any): string {
    return `
      <article class="vh-post-card" data-category="${post.category}" data-link="${post.link}">
        <div class="vh-post-image">
          <img src="${post.cover}" alt="${post.title}" loading="lazy">
          <div class="vh-post-overlay">
            <span class="vh-category-badge">${post.category}</span>
          </div>
        </div>
        <div class="vh-post-content">
          <div class="vh-post-meta">
            <time class="vh-post-date">${post.date}</time>
            <span class="vh-read-time">${post.readTime}</span>
          </div>
          <h3 class="vh-post-title">
            <a href="${post.link}" class="vh-article-link">${post.title}</a>
          </h3>
          <p class="vh-post-desc">${post.description}</p>
          <div class="vh-post-tags">
            ${post.tags.map((tag: string) => `
              <span class="vh-tag">#${tag}</span>
            `).join('')}
          </div>
        </div>
      </article>
    `
  }
  
  bindEvents() {
    // 分类筛选
    const filterBtns = document.querySelectorAll('.vh-filter-btn')
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        const category = target.dataset.category
        
        // 更新按钮状态
        filterBtns.forEach(b => b.classList.remove('active'))
        target.classList.add('active')
        
        // 筛选文章
        this.filterPosts(category)
      })
    })
    
    // 文章卡片点击事件
    const cards = document.querySelectorAll('.vh-post-card, .vh-featured-card')
    cards.forEach(card => {
      // 鼠标悬浮效果
      card.addEventListener('mouseenter', () => {
        card.classList.add('vh-card-hover')
      })
      card.addEventListener('mouseleave', () => {
        card.classList.remove('vh-card-hover')
      })
      
      // 卡片点击跳转（点击卡片任意位置都可以跳转）
      card.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        // 如果点击的是链接本身，让默认行为生效
        if (target.tagName === 'A' || target.closest('a')) {
          return
        }
        
        const cardElement = card as HTMLElement
        const link = cardElement.dataset.link
        if (link) {
          window.location.href = link
        }
      })
    })
    
    // 确保链接正常工作
    const articleLinks = document.querySelectorAll('.vh-article-link')
    articleLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.stopPropagation() // 防止冒泡到卡片点击事件
        // 让默认的链接行为生效
      })
    })
  }
  
  filterPosts(category: string | undefined) {
    const allCards = document.querySelectorAll('.vh-post-card, .vh-featured-card')
    
    allCards.forEach(card => {
      const cardElement = card as HTMLElement
      if (category === 'all' || cardElement.dataset.category === category) {
        cardElement.style.display = 'block'
        cardElement.classList.add('vh-card-show')
      } else {
        cardElement.style.display = 'none'
        cardElement.classList.remove('vh-card-show')
      }
    })
  }
}

// 初始化
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const blogShare = new BlogShare()
    blogShare.init()
  })
  
  // 支持页面转换
  document.addEventListener('swup:contentReplaced', () => {
    const blogShare = new BlogShare()
    blogShare.init()
  })
}

export default BlogShare