
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

const body = document.body;
const themeSwitchToggle = document.querySelector('.theme-switch__toggle')

const defaultTheme = document.body.classList.add(Theme.LIGHT);
defaultTheme();

themeSwitchToggle.addEventListener('change', onChanheTheme);

const useTheme = localStorage.setItem( 'theme', currentTheme)




function onChanheTheme(){
    const defaultTheme = document.body.classList.add(Theme.DARK); 
    
    const theme = defaultTheme === document.body.classList.toggle(Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    
    localStorage.setItem('theme', theme);
   
}



/*
Добавь функционал изменения темы при нажатии (событие change) 
на чекбокс #theme-switch-toggle в тулбаре.

    По умолчанию тема светлая.
    При изменении темы, необходимо добавлять на элемент body класс 
    light-theme или dark-theme.
    Выбранная тема должна сохраняться между перезагрузками страницы. 
    Для хранения темы используй localStorage.
    Если при загрузке страницы тема тёмная, не забудь поставить 
    свойство checked у чекбокса #theme-switch-toggle в true, 
    чтобы ползунок сдвинулся в правильное положение.

Для удобства хранения списка тем используй такое перечисление.

;*/