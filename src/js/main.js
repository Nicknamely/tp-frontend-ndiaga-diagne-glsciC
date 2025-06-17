class ThemeSwitcher {
  constructor() {
    this.themeSwitch = document.getElementById('theme-switch');
    this.body = document.body;
    this.currentTheme = localStorage.getItem('theme') || 'dark';
    
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    
    this.createThemeButton();
    
    this.themeSwitch.addEventListener('click', () => {
      this.toggleTheme();
    });
  }

  createThemeButton() {
    this.themeSwitch.innerHTML = `
      <button aria-label="Toggle theme">
        <span class="light-icon">light</span>
        <span class="dark-icon">dark</span>
      </button>
    `;
  }

  setTheme(theme) {
    if (theme === 'dark') {
      this.body.classList.add('dark');
    } else {
      this.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});
