//変数の宣言
let userName;

//変数の代入
userName = '侍太郎';
console.log(userName);

//変数の再代入
userName = 'MEGUMI';
console.log(userName)

//算術演算子を使った場合の戻り値の出力
console.log(45 + 18);
console.log(45 < 18);

//等価演算子
console.log('5' == 5);

//厳密等価演算子を使って戻り値の出力
console.log('5' === 5);

//6.5　変数numに０〜４までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

//変数numの値を出力する（確認用）
console.log(num);

//変数numの値が４であれば、「大当たりです」という文字列を出力する

if (num === 4) {
        console.log("大当たりです");
}
//変数numが０〜3であれば。「ハズレです」という文字列を出力する*/
else {
    console.log('ハズレです')
}

//変数numの値が４であれば、「大吉です」という文字列を出力する

if (num === 4) {
    console.log("大吉です");
}

//変数numが３であれば、「中吉です」という文字列を出力する
else if (num === 3){
        console.log('中吉です')
}

//変数numが３であれば、「小吉です」という文字列を出力する
else if (num === 2){
    console.log('小吉です')
}

//変数numが０〜１であれば。『末吉です』という文字列を出力する*/
else {
        console.log('末吉です')
}

let Wight;
Wight = 68;
let Hight;
Hight = 1.7;

console.log(Wight/(Hight*Hight))
