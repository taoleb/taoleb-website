// 项目分享页面功能
import ProjectsData from "@/page_data/Projects";

interface Project {
  name: string;
  author: string;
  description: string;
  longDescription: string;
  github: string;
  demo?: string;
  tags: string[];
  language: string;
  stars: string;
  license: string;
  featured: boolean;
}

class ProjectsManager {
  private container: HTMLElement | null = null;

  constructor() {
    this.init();
  }

  private async init() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initProjects());
    } else {
      this.initProjects();
    }
  }

  private async initProjects() {
    this.container = document.querySelector('.vh-projects-container');
    if (!this.container) return;

    try {
      let projects: Project[] = [];

      // 如果有API接口，优先使用API数据
      if (ProjectsData.api) {
        const response = await fetch(ProjectsData.api);
        projects = await response.json();
      } else {
        // 使用静态数据
        projects = ProjectsData.data;
      }

      this.renderProjects(projects);
    } catch (error) {
      console.error('加载项目数据失败:', error);
      this.renderError();
    }
  }

  private renderProjects(projects: Project[]) {
    if (!this.container) return;

    // 按featured排序，featured项目优先显示
    const sortedProjects = projects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    const projectsHTML = sortedProjects.map(project => this.createProjectCard(project)).join('');
    this.container.innerHTML = projectsHTML;

    // 添加交互事件
    this.addEventListeners();
  }

  private createProjectCard(project: Project): string {
    const demoButton = project.demo 
      ? `<a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-primary">在线体验</a>`
      : '';

    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const featuredBadge = project.featured 
      ? '<div class="project-featured">推荐</div>'
      : '';

    return `
      <article class="project-card" data-project="${project.name}">
        ${featuredBadge}
        <div class="project-content">
          <div class="project-header">
            <div class="project-title">
              <h3>${project.name}</h3>
              <span class="project-author">@${project.author}</span>
            </div>
            <div class="project-stats">
              <span class="project-stars">${project.stars}</span>
              <span class="project-language">${project.language}</span>
            </div>
          </div>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
          <div class="project-actions">
            ${demoButton}
            <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-secondary">查看源码</a>
          </div>
          <div class="project-footer">
            <span class="project-license">${project.license}</span>
          </div>
        </div>
      </article>
    `;
  }

  private addEventListeners() {
    // 为项目卡片添加点击事件
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // 如果点击的是链接，不触发卡片点击事件
        if ((e.target as HTMLElement).tagName === 'A') return;
        
        const projectName = card.getAttribute('data-project');
        this.showProjectDetails(projectName);
      });
    });
  }

  private showProjectDetails(projectName: string | null) {
    if (!projectName) return;

    const project = ProjectsData.data.find(p => p.name === projectName);
    if (!project) return;

    // 创建模态框显示项目详情
    const modal = this.createModal(project);
    document.body.appendChild(modal);

    // 添加关闭事件
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    [closeBtn, overlay].forEach(el => {
      el?.addEventListener('click', () => {
        document.body.removeChild(modal);
      });
    });

    // ESC键关闭
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        document.body.removeChild(modal);
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);
  }

  private createModal(project: Project): HTMLElement {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>${project.name}</h2>
          <button class="modal-close">×</button>
        </div>
        <div class="modal-body">
          <p>${project.longDescription}</p>
          <div class="modal-actions">
            ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-primary">在线体验</a>` : ''}
            <a href="${project.github}" target="_blank" class="btn btn-secondary">查看源码</a>
          </div>
        </div>
      </div>
    `;

    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
      .project-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
      }
      .modal-content {
        position: relative;
        background: var(--vh-white-color);
        border-radius: var(--vh-main-radius);
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }
      .modal-header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--vh-border-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .modal-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--vh-font-66);
      }
      .modal-body {
        padding: 1.5rem;
      }
      .modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
      }
    `;
    modal.appendChild(style);

    return modal;
  }

  private renderError() {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div class="projects-error">
        <p>😅 项目数据加载失败，请稍后再试。</p>
      </div>
    `;
  }
}

// 创建全局实例
let projectsManagerInstance: ProjectsManager | null = null;

// 初始化函数
export const initProjects = () => {
  // 如果已经存在实例，先销毁
  if (projectsManagerInstance) {
    projectsManagerInstance = null;
  }
  
  // 创建新实例
  projectsManagerInstance = new ProjectsManager();
};

// 销毁函数
export const destroyProjects = () => {
  if (projectsManagerInstance) {
    projectsManagerInstance = null;
  }
};

// 首次初始化
initProjects();

export default ProjectsManager;