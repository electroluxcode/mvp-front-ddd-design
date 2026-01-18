import userView from './user/user.view';

// 初始化应用
function initApp() {
    const inputId = 'userNameInput';
    const displayId = 'userNameDisplay';
    // 页面加载时显示用户名
    userView.updateDisplay(displayId);
    // 设置按钮
    const setBtn = document.getElementById('setUserNameBtn');
    if (setBtn) {
        setBtn.addEventListener('click', () => {
            userView.setUserName(inputId, displayId);
        });
    }
    
    // 读取按钮
    const getBtn = document.getElementById('getUserNameBtn');
    if (getBtn) {
        getBtn.addEventListener('click', () => {
            userView.updateDisplay(displayId);
        });
    }
    
}

// DOM加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}