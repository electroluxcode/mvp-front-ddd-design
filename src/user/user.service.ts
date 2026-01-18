
import { BaseUserConfig } from "./type";

// 外层变量存储用户信息
let userData: BaseUserConfig = {
    id: '',
    name: ''
};

class UserService {
    // 保存用户名
    saveUserName(name: string): void {
        userData.name = name;
    }

    // 读取用户名
    getUserName(): string {
        return userData.name || '';
    }

    // 保存完整用户信息
    saveUser(user: BaseUserConfig): void {
        userData = { ...user };
    }

    // 获取完整用户信息
    getUser(): BaseUserConfig {
        return { ...userData };
    }
}

const userService = new UserService();
export default userService;