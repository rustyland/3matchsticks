# 🕹️  [三堆火柴]

### 游戏规则
   
每行自上而下（方向不限）分别是3、5、7根
  
两个玩家，每人可以在一轮内，在任意行拿任意根牙签，但不能跨行
   
拿最后一根牙签的人即为输家

### 思路
初始化数组 [3,5,7] / [7，5，3]（或其它顺序)，数组第一位减去两个玩家轮流输入指定范围内的数字，当数组第一位为0时使用Array.shift()方法将其删除，通过while循环判断当数组长度为0时，最后一位输入的玩家为输家。游戏主要采用typescript完成，使用deno命令行运行。

### 运行

[deno](https://github.com/denoland/deno)
```sh
deno run https://cdn.jsdelivr.net/gh/rustyland/3matchsticks@main/mod.ts
```

浏览器
```sh
git clone https://github.com/rustyland/3matchsticks
cd ./3matchsticks
firefox ./index.html &
```
(浏览器打开 index.html，**内容由console.log()输出，F12查看**)

### 截图
[![img1](https://cdn.jsdelivr.net/gh/ctiodn/3matchsticks@main/img1.png)](https://cdn.jsdelivr.net/gh/ctiodn/3matchsticks@main/img1.png)
[![img2](https://cdn.jsdelivr.net/gh/ctiodn/3matchsticks@main/img2.png)](https://cdn.jsdelivr.net/gh/ctiodn/3matchsticks@main/img2.png)
