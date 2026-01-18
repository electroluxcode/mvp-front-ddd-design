import userAdapt from "./user.adapt";

class UserView {
    // 更新显示用户名
    updateDisplay(displayId: string): void {
        const displayElement = document.getElementById(displayId);
        if (displayElement) {
            const userName = userAdapt.getUserName();
            displayElement.textContent = userName || '未设置';
        }
    }

    // 设置用户名
    setUserName(inputId: string, displayId: string): void {
        const inputElement = document.getElementById(inputId) as HTMLInputElement;
        if (inputElement && inputElement.value) {
            userAdapt.setUserName(inputElement.value);
            inputElement.value = '';
            this.updateDisplay(displayId);
        }
    }
}

const userViewInstance = new UserView();
export default userViewInstance;