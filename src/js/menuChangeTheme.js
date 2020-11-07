const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body.classList;
const themeSwitchToggle = document.querySelector('.theme-switch__toggle');
const useTheme = localStorage.getItem('theme');

addTheme();
themeSwitchToggle.addEventListener('change', onChangeTheme);

function addTheme() {
  if (useTheme) {
    body.add(useTheme);
    console.log(useTheme);
  }
  if (body.contains(Theme.DARK)) {
    themeSwitchToggle.checked = true;
  }
}

function onChangeTheme(e) {
  if (e.target.checked) {
    body.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
