class userUtils {
    static transformUserList(userList: any[]) {
        return userList.map((user) => {
            return {
                id: user.id,
                name: user.name
            }
        })
    }
}
const userUtilsInstance = new userUtils()

export default userUtilsInstance