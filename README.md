## PAIMAI UI 组件库
如果你是在https://github.com/YolkPie/components-ts看到这个文档，就要注意你来的地方对不对啦！不要在直接https://github.com/YolkPie/components-ts更新代码，请移驾到https://git.xxx.com/auction-fe/react-ts-component-m，开始你的组件封装吧~~
该项目使用了travis-ci进行了预览页面的自动构建，因此代码需要同步到github。
代码克隆到本地之后，需要先增加github源：

git remote add github https://github.com/YolkPie/components-ts.git

当master分支更新之后，在执行了git push将代码推送到git.xxx.com之后，再执行git push github将更新同步给github，接下来travis会自动构建预览页。

预览页地址：https://coding-pages-bucket-3441969-8291683-11391-481925-1301207770.cos-website.ap-hongkong.myqcloud.com

### 本地预览

1.首先执行，安装依赖命令
```
npm install 
```
2.安装完成后执行

 ```
 npm run storybook
 ```

3.本地可以看预览后，按照已有组建封装规则，封装组建，并且创建.stories.tsx

### 组件使用步骤
```
jnpm install @paimai/components-ts
```

### 使用

```
import { Button } from '@paimai/components-ts'
```

### 组件

- [x] Toast 提示组件




### postcss

```
npm update globby --depth 5
```

### 升级 Storybook 版本

```
npx npm-check-updates '/storybook/' -u && jnpm install
```
