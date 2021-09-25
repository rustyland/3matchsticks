console.log(`🕹️  [三堆火柴]
   游戏规则:
   每行自上而下（方向不限）分别是3、5、7根
   两个玩家，每人可以在一轮内，在任意行拿任意根牙签，但不能跨行
   拿最后一根牙签的人即为输家\n\n
`);

const direction: boolean = Boolean(
  Number(prompt("➡️  请选择方向，[0] 为 自上而下(3,5,7)，[1] 为自下而上(7,5,3)，默认为0: \n\n")),
);
let matchstick: Array<number>;
if (!direction) {
  console.log(
    "🕹️  选择的方向为自上而下(3,5,7)\n\n 📏 📏 📏\n\n 📏 📏 📏 📏 📏\n\n 📏 📏 📏 📏 📏 📏 📏\n\n",
  );
  matchstick = [3, 5, 7];
} else {
  console.log(
    "🕹️  选择的方向为自下而上(7,5,3)\n\n 📏 📏 📏 📏 📏 📏 📏\n\n 📏 📏 📏 📏 📏\n\n 📏 📏 📏\n\n",
  );
  matchstick = [7, 5, 3];
}

let user: number = 1;

while (true) {
  const n: number = Number(
    prompt(
      `\n\n➡️  请输入 ${user == 1 ? "玩家1 🔵" : "玩家2 ⚪"} 拿牙签的数量 ( 范围：1 - ${
        matchstick[0]
      } ) `,
    ),
  );

  if (isNaN(n) || n < 1 || n > matchstick[0]) {
    console.log("\n\n\n⚠️ 输入错误");
    continue;
  }

  matchstick[0] -= n;

  if (matchstick[0] == 0) {
    matchstick.shift();
  }

  console.log(`\n\n\n📏 剩余 ${matchstick.length ? matchstick : 0} 根牙签`);

  if (matchstick.length > 0) {
    user = user == 1 ? 2 : 1;
  } else {
    break;
  }
}

console.log(`\n\n🏳️  ${user == 1 ? "玩家1 🔵" : "玩家2 ⚪"} 输了\n\n`);
