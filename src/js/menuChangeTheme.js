const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body;
const themeSwitchToggle = document.querySelector('.theme-switch__toggle');
const useTheme = localStorage.getItem('theme');

addTheme();
themeSwitchToggle.addEventListener('change', onChangeTheme);

function addTheme() {
  if (useTheme) {
    document.body.classList.add(Theme.LIGHT);
  }
  if (document.body.classList.contains(Theme.DARK)) {
    themeSwitchToggle.checked = true;
  }
}

function onChangeTheme(e) {
  if (e.target.checked === true) {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
