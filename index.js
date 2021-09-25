console.log("\uD83D\uDD79\uFE0F  [\u4E09\u5806\u706B\u67F4]\n   \u6E38\u620F\u89C4\u5219:\n   \u6BCF\u884C\u81EA\u4E0A\u800C\u4E0B\uFF08\u65B9\u5411\u4E0D\u9650\uFF09\u5206\u522B\u662F3\u30015\u30017\u6839\n   \u4E24\u4E2A\u73A9\u5BB6\uFF0C\u6BCF\u4EBA\u53EF\u4EE5\u5728\u4E00\u8F6E\u5185\uFF0C\u5728\u4EFB\u610F\u884C\u62FF\u4EFB\u610F\u6839\u7259\u7B7E\uFF0C\u4F46\u4E0D\u80FD\u8DE8\u884C\n   \u62FF\u6700\u540E\u4E00\u6839\u7259\u7B7E\u7684\u4EBA\u5373\u4E3A\u8F93\u5BB6\n\n\n");
var direction = Boolean(Number(prompt('➡️  请选择方向，[0] 为 自上而下(3,5,7)，[1] 为自下而上(7,5,3)，默认为0: \n\n')));
var matchstick;
if (!direction) {
    console.log('🕹️  选择的方向为自上而下(3,5,7)\n\n 📏 📏 📏\n\n 📏 📏 📏 📏 📏\n\n 📏 📏 📏 📏 📏 📏 📏\n\n');
    matchstick = [3, 5, 7];
}
else {
    console.log('🕹️  选择的方向为自下而上(7,5,3)\n\n 📏 📏 📏 📏 📏 📏 📏\n\n 📏 📏 📏 📏 📏\n\n 📏 📏 📏\n\n');
    matchstick = [7, 5, 3];
}
var user = 1;
while (true) {
    var n = Number(prompt("\n\n\u27A1\uFE0F  \u8BF7\u8F93\u5165 " + (user == 1 ? '玩家1 🔵' : '玩家2 ⚪') + " \u62FF\u7259\u7B7E\u7684\u6570\u91CF ( \u8303\u56F4\uFF1A1 - " + matchstick[0] + " ) "));
    if (isNaN(n) || n < 1 || n > matchstick[0]) {
        console.log('\n\n\n⚠️ 输入错误');
        continue;
    }
    matchstick[0] -= n;
    if (matchstick[0] == 0) {
        matchstick.shift();
    }
    console.log("\n\n\n\uD83D\uDCCF \u5269\u4F59 " + (matchstick.length ? matchstick : 0) + " \u6839\u7259\u7B7E");
    if (matchstick.length > 0) {
        user = user == 1 ? 2 : 1;
    }
    else {
        break;
    }
}
console.log("\n\n\uD83C\uDFF3\uFE0F  " + (user == 1 ? '玩家1 🔵' : '玩家2 ⚪') + " \u8F93\u4E86\n\n");
