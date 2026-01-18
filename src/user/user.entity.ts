import { BaseUserConfig } from "./type";

const UserProxy = new Proxy<{
    instance: {
        user: BaseUserConfig
    }
}>({
    instance: {
        user: {
            id: "",
            name: ""
        },
    },
}, {});
class UserEntity {
    BaseUserConfig: typeof UserProxy
    constructor() {
        this.BaseUserConfig = UserProxy
    }
    setUser(user: BaseUserConfig) {
        this.BaseUserConfig.instance.user = user
    }
    getUser() {
        return this.BaseUserConfig.instance.user
    }
}
const userEntity = new UserEntity()
export default userEntity