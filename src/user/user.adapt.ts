import { BaseUserConfig } from "./type";
import userEntity from "./user.entity";
import userService from "./user.service";

class UserAdapt {
    // 设置用户名（适配层：处理数据转化和逻辑判断）
    setUserName(name: string): void {
        const user: BaseUserConfig = {
            id: Date.now().toString(), // 简单生成ID
            name: name.trim()
        };
        
        userEntity.setUser(user);
        // 保存到本地存储
        userService.saveUser(user);
    }

    // 获取用户名（适配层：数据转换供视图层调用）
    getUserName(): string {
        // 先从本地存储读取
        const storedUser = userService.getUser();
        
        // 更新实体
        if (storedUser.name) {
            userEntity.setUser(storedUser);
        }
        return userEntity.getUser().name;
    }

    // 获取完整用户信息
    getUser(): BaseUserConfig {
        const storedUser = userService.getUser();
        if (storedUser.name) {
            userEntity.setUser(storedUser);
        }
        return userEntity.getUser();
    }
}

const userAdaptInstance = new UserAdapt();
export default userAdaptInstance;