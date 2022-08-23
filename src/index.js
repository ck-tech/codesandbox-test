/**
 * const, let
 */

// var var1 = "var変数";
// console.log(var1);

// // var変数は上書き可能
// var1 = "var1の上書き";
// console.log(var1);

// // var変数の再宣言
// var var1 = "var1の再宣言";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// // letは上書き可能
// var2 = "let変数を上書き";
// console.log(var2);

// // letは再宣言が不可能
// let var2 = "let変数を再宣言";

// const var3 = "const変数";
// console.log(var3);

// // constは上書き不可能
// var3 = "const変数を上書き";
// console.log(var3);

// // constは再宣言が不可能
// let var3 = "const変数を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "name",
//   age: 25
// };
// val4.name = "new name";
// val4.address = "Tokyo";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = [1, 2];
// val5[0] = 3;
// val5.push(1);
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "name";
// const age = 25;
// 「私の名前はnameです。年齢は25歳です。」
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProf = {
//   name: "name",
//   age: 25
// };
// const message1 = `私の名前は${myProf.name}です。年齢は${myProf.age}です。`;
// console.log(message1);

// const { name, age } = myProf;
// const message2 = `私の名前は${name}。年齢は${age}です。`;
// console.log(message2);

// const myProf = ["name", 25];
// const message3 = `私の名前は${myProf[0]}。年齢は${myProf[1]}です。`;
// console.log(message3);

// const [name, age] = myProf;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => {
//   return console.log(`こんにちは${name}さん`);
// };
// sayHello("name");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   return console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["A", "B", "C"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => {
//   console.log(`${index + 1}番目は${name}です。`);
// });

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "A") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrue: 条件がfalse
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "11";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(10, 40));

/**
 * 論理演算子の意味
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// // ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定";
// console.log(fee);

// // ||は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num && "何か設定";
// console.log(fee2);
