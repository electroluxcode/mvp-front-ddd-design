## 设计思路

以常见系统的用户领域举例子 

链路：userView -> userAdapt -> userService/userEntity 

## 代码实现

1. store：

    1.1 定义业务实体和值对象，

    1.2 值在这里转化成 组件需要的数据
2. service

    2.1 处理api请求()

    2.2 本地存储/读取数据

3. adapt

    4.1 处理数据转化，逻辑判断、数据筛选、数据转换 供视图层调用

4. view 

    4.1 处理视图逻辑(react中是hook，其他框架对应着有其他框架的逻辑)