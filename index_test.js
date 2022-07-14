// // const value = "値";
// // console.log(value);
// console.log(typeof true);// => "boolean"
// console.log(typeof 42); // => "number"
// console.log(typeof 9007199254740992n); // => "bigint"
// console.log(typeof "JavaScript"); // => "string"
// console.log(typeof Symbol("シンボル"));// => "symbol"
// console.log(typeof undefined); // => "undefined"
// console.log(typeof null); // => "object"
// console.log(typeof ["配列"]); // => "object"
// console.log(typeof { "key": "value" }); // => "object"
// console.log(typeof function() {}); // => "function"

// const obj = {
//   "key": "value"
// }
// // ドット記法
// console.log(obj.key);
// // ブラケット記法
// console.log(obj["key"]);

// const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
// // `numberRegExp`の正規表現が文字列"123"にマッチするかをテストする
// console.log(numberRegExp.test("123")); // => true

// const value = undefined; // または null
// // === では2つの値と比較しないといけない
// if (value === null || value === undefined) {
//   console.log("valueがnullまたはundefinedである場合の処理");
// }
// if (value == null ) {
//   console.log("valueがnullまたはundefinedである場合の処理")
// }

// console.log(14     & 9);      // => 8
// 同じ位の各ビット同士をAND演算する（上位の`0`は省略）
// 1110
// 1001
// ----
// 1000
// console.log(0b1110 & 0b1001); // => 0b1000

// console.log(15     | 9);      // => 15
// 同じ位の各ビット同士をOR演算する（上位の`0`は省略）
// 1111
// 1001
// ----
// 1111
// console.log(0b1111 | 0b1001); // => 0b1111

// const str = "森森木森森";
// if (str.includes("木")) {
//     console.log("木を見つけました");
// }

// // 任意の個数の数値を受け取り、その合計値を返す関数
// function sum(...values) {
//   return values.reduce((total, value) => {
//       return total + value;
//   }, 0);
// }
// const x = 1, z = 10;
// let y; // `y`はundefined
// console.log(sum(x, y, z)); // => NaN

// function double(num) {
//   return num * 2;
// }
// console.log(double(10));

// function echo(x) {
//   return x;
// }
// console.log(echo(1));
// console.log(echo());

// function echo(x = "デフォルト値") {
//   return x;
// }

// console.log(echo(1)); // => 1
// console.log(echo()); // => "デフォルト値"

//  const array = [1, 2, 3];
// const output = (value) => {
//   console.log(value);
// };
// array.forEach(output);
// const  array = [1, 2, 3];
// array.forEach((value) => {
//   console.log(value);
// });
// const obj = {
//   method() {
//     return "This is method";
//   }
// };
// console.log(obj.method());
// if (true) {
//   console.log("この行は実行されます");
// }
// if ("文字列") {
//   console.log("この行は実行されます");
// }
// if (42) {
//   console.log("この行は実行されます");
// }
// if (["配列"]) {
//   console.log("この行は実行されます");
// }
// if ({ name: "オブジェクト" }) {
//   console.log("この行は実行されます");
// }
// if (false) {
//   // この行は実行されません
// }
// if ("") {
//   // この行は実行されません
// }
// if (0) {
//   // この行は実行されません
// }
// if (undefined) {
//   // この行は実行されません
// }
// if (null) {
//   // この行は実行されません
// }
// const version = "ES6";
// if (version === "ES5") {
//     console.log("ECMAScript 5");
// } else if (version === "ES6") {
//     console.log("ECMAScript 2015");
// } else if (version === "ES7") {
//     console.log("ECMAScript 2016");
// }
// const year = new Date().getFullYear();
// if (year % 4 === 0) { // 4で割り切れる
//     if (year % 100 === 0) { // 100で割り切れる
//         if (year % 400 === 0) { // 400で割り切れる
//             console.log(`${year}年はうるう年です`);
//         } else {
//             console.log(`${year}年はうるう年ではありません`);
//         }
//     } else {
//         console.log(`${year}年はうるう年です`);
//     }
// } else {
//     console.log(`${year}年はうるう年ではありません`);
// }

// let x = 0;
// console.log(`ループ開始前のxの値: ${x}`);
// while (x < 10) {
//   console.log(x);
//   x += 1;
// }
// console.log(`ループ終了後のxの値: ${x}`);

// let total = 0;
// for (let i = 0; i < 10; i++) {
//   total += i + 1;
// }
// console.log(total);

// function sum(number) {
//   let total = 0;
//   for (let i = 0; i < number.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// console.log(sum([1, 2, 3, 4, 5]));

// const array = [1, 2, 3];
// array.forEach(currentValue => {
//   console.log(currentValue);
// });

// function sum(numbers) {
//   let total = 0;
//   numbers.forEach(num => {
//     total += num;
//   });
//   return total;
// }

// console.log(sum([1, 2, 3, 4, 5]));

// const numbers = [1, 5, 10, 15]

// let isEvenIncluded = false;
// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   if (num % 2 === 0) {
//     isEvenIncluded = true;
//     break;
//   }
// }
// console.log(isEvenIncluded);

// function isEven(num) {
//   return num % 2 === 0;
// }
// function isEvenIncluded(numbers) {
//   let isEvenIncluded = false;
//   for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     if (isEven(num)) {
//       isEvenIncluded = true;
//       break;
//     }
//   }
//   return isEvenIncluded;
// }
// const array = [1, 5, 10, 15, 20]
// console.log(isEvenIncluded(array));

// function isEven(num) {
//   return num % 2 === 0;
// }
// const numbers = [1, 5, 10, 15, 20]
// console.log(numbers.some(isEven));

// function isEven(num) {
//   return num % 2 === 0;
// }
// function filterEven(numbers) {
//   const results = [];
//   for (let i = 0; i < numbers.length; i++) {
//       const num = numbers[i];
//       if (!isEven(num)) {
//           continue;
//       }
//       results.push(num);
//   }
//   return results;
// }
// const array = [1, 5, 10, 15, 20];
// console.log(filterEven(array)); 

// function isEven(num) {
//   return num % 2 === 0;
// }
// const array = [1, 5, 10, 15, 20];
// console.log(array.filter(isEven));

// const obj = {
//   "a" : 1,
//   "b" : 2,
//   "c" : 3
// };

// for (const key in obj) {
//   const value = obj[key];
//   console.log(`key:${key}, value:${value}`);
// }

// const str = "行廣映二"
// for (const value of str) {
//   console.log(value);
// }

// const name = "名前";
// const obj = {
//   name
// };
// console.log(obj);

// const obj = {
//   key: "value"
// };
// console.log(obj.key);
// console.log(obj["key"]);

// const obj = {
//   key: "value",
//   123: 456,
//   "my-key": "my-value"
// };

// console.log(obj["key"]); // => "value"
// // プロパティ名が数字からはじまる識別子も利用できる
// console.log(obj[123]); // => 456
// // プロパティ名にハイフンを含む識別子も利用できる
// console.log(obj["my-key"]); // => "my-value"

// const obj = {};
// console.log(obj.notFound);

// const widget = {
//   window: {
//       title: "ウィジェットのタイトル"
//   }
// };
// console.log(widget.window);
// console.log(widget.windw);
// console.log(widget.windw.title);

// const obj = {
//   key: "value"
// };
// // `key`プロパティが`undefined`ではないなら、プロパティが存在する?
// if (obj.key !== undefined) {
//   // `key`プロパティが存在する?ときの処理
//   console.log("`key`プロパティの値は`undefined`ではない");
// }

// const obj = { key: undefined };
// // `key`プロパティを持っているならtrue
// if ("key" in obj) {
//     console.log("`key`プロパティは存在する");
// }

// const obj = { key: undefined };
// // `obj`が`key`プロパティを持っているならtrueとなる
// if (Object.hasOwn(obj, "key")) {
//     console.log("`obj`は`key`プロパティを持っている");
// }

// function printWidgetTitle(widget) {
//   if (widget.window !== undefined && widget.window.title !== undefined) {
//     console.log(`ウィジェットのタイトルは${widget.window.title}です`);
//   } else {
//     console.log("ウィジェットのタイトルは未定義です");
//   }
// }
// printWidgetTitle({
//   window: {
//     title: "Book Viewer"
//   }
// });
// printWidgetTitle({

// });

// const obj = { key: "value" };
// console.log(obj.toString()); // => "[object Object]"
// // `String`コンストラクタ関数は`toString`メソッドを呼んでいる
// console.log(String(obj)); // => "[object Object]"

// const obj = {};
// const symbolKey1 = Symbol("シンボル1");
// const symbolKey2 = Symbol("シンボル2");
// obj[symbolKey1] = "1";
// obj[symbolKey2] = "2";
// console.log(obj[symbolKey1]);
// console.log(obj[symbolKey2]);

// const obj = {
//   "one": 1,
//   "two": 2,
//   "three": 3
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const keys = Object.keys(obj);
// keys.forEach(key => {
//   console.log(key);
// });

// const objectA = { a: "a" };
// const objectB = { b: "b" };
// const merged = Object.assign(objectA, objectB);
// console.log(merged);
// console.log(objectA);
// console.log(merged === objectA);

// const pomeranians = [];
// const dogs = ['dog', 'cat', 'pomeranian']
// dogs.forEach(dog => {
//   if (dog === 'pomeranian') {
//     pomeranians.push(dog)
//   }
// });
// console.log(pomeranians);

// const dogs = ['dog', 'cat', 'pomeranian']
// const pomeranians = dogs.filter(dog => {
//   return dog === "pomeranian"
// });

// const pomeranians = dogs.filter(dog => dog === "pomeranian");

// console.log(pomeranians);

// let myDog;
// const dogs = ["ポメラニアス1世", "ポメラニアス2世", "ポメラニアス3世"];
// dogs.forEach(dog => {
//   if (dog === 'ポメラニアス3世') {
//     myDog = dog;
//   }
// });
// console.log(myDog);

// for (let i = 0; i < dogs.length; i++)(dog => {
//   if (dog === 'ポメラニアス3世') {
//     myDog = dog;
//     break;
//   }
// })

// console.log(myDog);

// const myDog = dogs.find(dog => dog === "ポメラニアス3世");

// console.log(myDog);

// const myDog = dogs.filter(dog => dog === "ポメラニアス3世")[0];

// console.log(myDog);

// const dogNames = [];

// dogs.forEach(dog => {
//   dogNames.push(dog);
// });

// console.log(dogNames);

// const dogNames = dogs.map(dog => dog);

// console.log(dogNames);

// const objectA = { a: "a" };
// const objectB = { b: "b" };
// const merged = {
//     ...objectA,
//     ...objectB
// };
// console.log(merged);

// const obj = {};ss
// console.log(obj.toString()); // => "[object Object]"

// console.log(typeof Object.prototype.toString);

// const obj = {};
// // `obj`というオブジェクト自体に`toString`メソッドが定義されているわけではない
// console.log(Object.hasOwn(obj, "toString")); // => false
// // `in`演算子は指定されたプロパティ名が見つかるまで親をたどるため、`Object.prototype`まで見にいく
// console.log("toString" in obj); // => true

// const matrix = [
//   ["a", "b"],
//   ["c", "d"]
// ];
// console.log(matrix[0][0]);

// const array = ["one", "two", "three"];
// console.log(array.length);
// console.log(array[array.length - 1]);

// const sparseArray = [1,, 3];
// console.log(sparseArray.length);
// console.log(sparseArray[1]);

// const array = ["a", "b", "c"];
// console.log(array.at(0));
// console.log(array.at(1));
// console.log(array.at(-1));
// console.log(array[array.length - 1]);
// console.log(array[-1]);

// const array = ["one", "two", "three"];
// const [first, second, third] = array;
// console.log(first); 
// console.log(second);
// console.log(third); 

// const array = ["Java", "JavaScript", "Ruby"];
// const indexOfJS = array.indexOf("JavaScript");
// console.log(indexOfJS);
// console.log(array[indexOfJS]);
// console.log(array.indexOf("JS"));

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" }
// ];
// const indexOfBlue = colors.findIndex((obj) => {
//   return obj.color === "blue";
// });
// console.log(indexOfBlue);
// console.log(colors[indexOfBlue]);

// const array = ["A", "B", "C", "D", "E"];
// // インデックス1から4の範囲を取り出す
// console.log(array.slice(1, 4)); // => ["B", "C", "D"]
// // 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
// console.log(array.slice(1)); // => ["B", "C", "D", "E"]
// // マイナスを指定すると後ろからの数えた位置となる
// console.log(array.slice(-1)); // => ["E"]
// // 第一引数と第二引数が同じ場合は、空の配列を返す
// console.log(array.slice(1, 1)); // => []
// // 第一引数 > 第二引数の場合、常に空配列を返す
// console.log(array.slice(4, 1)); // => []

// const array = ["Java", "JavaScript", "Ruby"];
// const indexOfJS = array.indexOf("JavaScript");
// if (indexOfJS !== -1) {
//   console.log("配列にJavascriptが含まれている");
// }

// const array = ["Java", "JavaScript", "Ruby"];
// if (array.includes("JavaScript")) {
//   console.log("配列にJavascriptが含まれている")
// };

// const colors = [
//   { "color": "red" },
//   { "color": "green" },
//   { "color": "blue" }
// ];
// const  isIncludeBlueColor = colors.some((obj) => {
//   return obj.color === "blue";
// });
// console.log(isIncludeBlueColor);

// const array = ["A", "B", "C"];
// array.push("D");
// console.log(array);
// const poppedItem = array.pop();
// console.log(poppedItem);
// console.log(array);

// const array = ["A", "B", "C"];
// array.unshift("S");
// console.log(array);
// const shiftedItem = array.shift();
// console.log(shiftedItem);
// console.log(array);

// スプレッド構文

// 配列の展開
// const  arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); 

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// const nameArr = ["john", "Nancy", "eityamo"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

//  const newNameArr = nameArr.map((name) => {
//    if (name === "eityamo") {
//      return name
//    } else {
//      return `Mr.${name}`
//    }
//  })

// console.log(newNameArr);

// const num = 1300;
// console.log(num.toLocaleString());

// const formatedNum = typeof num === "number" ? num.toLocaleString() : '数値を入力して下さい';
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えてます!!' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2 ) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2 ) {
//   console.log("1も2はtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

// const array = ["A", "B", "C"];
// const newArray = ["X", "Y", "Z", ...array];
// const newArrayConcat = ["X", "Y", "Z"].concat(array);
// console.log(newArray);
// console.log(newArrayConcat);

// const array = [[["A"], "B"], "C"];
// console.log(array.flat());
// console.log(array.flat(1));
// console.log(array.flat(2));
// console.log(array.flat(Infinity));

// const array = ["a", "b", "c"];
// array.splice(1, 1);
// console.log(array);
// console.log(array.length);
// console.log(array[1]);
// array.splice(0, array.length);
// console.log(array.length);

// const array = [1, 2, 3];
// array.length = 1;
// console.log(array);

// let array = [1, 2, 3];
// console.log(array.length);
// array = [];
// console.log(array.length);

// const myArray = ["A", "B", "C"];
// const result = myArray.push("D");
// console.log(result);
// console.log(myArray);

// // `array`の`index`番目の要素を削除した配列を返す関数
// // 引数の`array`は破壊的に変更される
// function removeAtIndex(array, index) {
//   array.splice(index, 1);
//   return array;
// }
// const array = ["A", "B", "C"];
// // `array`から1番目の要素を削除した配列を取得
// const newArray = removeAtIndex(array, 1);
// console.log(newArray);
// // `array`自体にも影響を与える
// console.log(array);

// const myArray = ["A", "B", "C"];
// const copiedArray = myArray.slice();
// myArray.push("D");
// console.log(myArray);
// console.log(copiedArray);
// console.log(copiedArray === myArray); 

// function removeAtIndex(array, index) {
//   const copiedArray = array.slice();
//   copiedArray.splice(index, 1);
//   return copiedArray;
// };
// const array = ["A", "B", "C"];
// const newArray = removeAtIndex(array, 1);
// console.log(newArray);
// console.log(array);

// const array = [1, 2, 3];
// array.forEach((currentValue, index, array) => {
//   console.log(currentValue, index, array);
// });

// const array = [1, 2, 3];
// const newArray = array.map((currentValue) => {
//   return currentValue * 10;
// });
// console.log(newArray);
// console.log(array === newArray);

// const array = [1, 2, 3];
// const newArray = array.filter((currentValue, index, array) => {
//   return currentValue % 2 === 1;
// });
// console.log(newArray);
// console.log(array === newArray);

// const array = [1, 2, 3];
// const totalValue = array.reduce((accumulator, currentValue, index, array) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(totalValue);

// const array = ["a"].concat("b").concat("c");
// console.log(array);

// const ECMAScriptVersions = [
//   { name: "ECMAScript 1", year: 1997 },
//   { name: "ECMAScript 2", year: 1998 },
//   { name: "ECMAScript 3", year: 1999 },
//   { name: "ECMAScript 5", year: 2009 },
//   { name: "ECMAScript 5.1", year: 2011 },
//   { name: "ECMAScript 2015", year: 2015 },
//   { name: "ECMAScript 2016", year: 2016 },
//   { name: "ECMAScript 2017", year: 2017 },
// ];
// const  versionNames = ECMAScriptVersions.filter(ECMAScript => ECMAScript.year <= 2000).map(ECMAScript => ECMAScript.name);
// console.log(versionNames);

// const multiline = "1行目\n2行目\n3行目";
// console.log(multiline);

// const str = "文字列";
// console.log(str.at(0));
// console.log(str.at(1));
// console.log(str.at(2));
// console.log(str.at(-1));

// const str = "ABCDE";
// console.log(str.slice(1));
// console.log(str.slice(1, 5));
// console.log(str.slice(-1));
// console.log(str.slice(1, 4));
// console.log(str.slice(4, 1));

// const url = "https://example.com?param=1";
// const indexOfQuery = url.indexOf("?");
// const queryString = url.slice(indexOfQuery);
// console.log(queryString);

// function main() {
//   const invalidPattern = /[/;
// }

// function main() {
//   const invalidPattern = new RegExp("[");
// }
// main();

// console.log("い".codePointAt(0));
// console.log(String.fromCodePoint(12356));
// console.log(String.fromCodePoint(0x3044));

// function fn() {
//   const x = 1;
//   // fn関数のスコープ内から`x`は参照できる
//   console.log(x); // => 1
// }
// fn();
// // fn関数のスコープ外から`x`は参照できないためエラー
// console.log(x);

// function fn(arg) {
//   // fn関数のスコープ内から仮引数`arg`は参照できる
//   console.log(arg); // => 1
// }
// fn(1);
// // fn関数のスコープ外から`arg`は参照できないためエラー
// console.log(arg);

// const array = [1, 2, 3, 4, 5];
// // ループごとに新しいブロックスコープを作成する
// for (const element of array) {
//     // forのブロックスコープの中でのみ`element`を参照できる
//     console.log(element);
// }
// // ループの外からはブロックスコープ内の変数は参照できない
// console.log(element);

// 実行時間を計測したい関数をコールバック関数として引数に渡す
// const measureTask = (taskFn) => {
//   const startTime = Date.now();
//   taskFn();
//   const endTime = Date.now();
//   console.log(`実行時間は${endTime - startTime}ミリ秒`);
// };
// function doHeavyTask() {
//   // 計測したい処理
// }
// measureTask(doHeavyTask);

// `increment`関数を定義して返す関数
// function createCounter() {
//   let count = 0;
//   // `increment`関数は`count`変数を参照
//   function increment() {
//       count = count + 1;
//       return count;
//   }
//   return increment;
// }
// // `myCounter`は`createCounter`が返した関数を参照
// const myCounter = createCounter();
// myCounter(); // => 1
// myCounter(); // => 2
// // 新しく`newCounter`を定義する
// const newCounter = createCounter();
// newCounter(); // => 1
// newCounter(); // => 2
// // `myCounter`と`newCounter`は別々の状態持っている
// myCounter(); // => 3
// newCounter(); // => 3

// const x = 10; // ＊1

// function printX() {
//     // この識別子`x`は常に ＊1 の変数`x`を参照する
//     console.log(x); // => 10
// }

// function run() {
//     const x = 20; // ＊2
//     printX(); // 常に10が出力される
// }

// run();

// const createCounter = () => {
//   let count = 0;
//   return function increment() {
//       // `increment`関数は`createCounter`関数のスコープに定義された`変数`count`を参照している
//       count = count + 1;
//       return count;
//   };
// };
// // createCounter()の実行結果は、内側で定義されていた`increment`関数
// const myCounter = createCounter();
// // myCounter関数の実行結果は`count`の評価結果
// console.log(myCounter());
// console.log(myCounter());

// const createCounter = () => {
//   // 外のスコープから`privateCount`を直接参照できない
//   let privateCount = 0;
//   return () => {
//       privateCount++;
//       return `${privateCount}回目`;
//   };
// };
// const counter = createCounter();
// console.log(counter()); // => "1回目"
// console.log(counter()); // => "2回目"

// console.log(globalThis);

// "use strict";
// function fn1() {
//     return this;
// }
// const fn2 = function() {
//     return this;
// };
// // 関数の中の`this`が参照する値は呼び出し方によって決まる
// // `fn1`と`fn2`どちらもただの関数として呼び出している
// // メソッドとして呼び出していないためベースオブジェクトはない
// // ベースオブジェクトがない場合、`this`は`undefined`となる
// console.log(fn1()); // => undefined
// console.log(fn2()); // => undefined

// "use strict";
// function outer() {
//     console.log(this); // => undefined
//     function inner() {
//         console.log(this); // => undefined
//     }
//     // `inner`関数呼び出しのベースオブジェクトはない
//     inner();
// }
// // `outer`関数呼び出しのベースオブジェクトはない
// outer();

// const obj = {
//   // 関数式をプロパティの値にしたメソッド
//   method1: function() {
//       return this;
//   },
//   // 短縮記法で定義したメソッド
//   method2() {
//       return this;
//   }
// };
// // メソッド呼び出しの場合、それぞれの`this`はベースオブジェクト(`obj`)を参照する
// // メソッド呼び出しの`.`の左にあるオブジェクトがベースオブジェクト
// console.log(obj.method1()); // => obj
// console.log(obj.method2()); // => obj

// const person = {
//   fullName: "Brendan Eich",
//   sayName: function() {
//       // `person.fullName`と書いているのと同じ
//       return this.fullName;
//   }
// };
// // `person.fullName`を出力する
// console.log(person.sayName()); // => "Brendan Eich"

// const obj1 = {
//   obj2: {
//       obj3: {
//           method() {
//               return this;
//           }
//       }
//   }
// };
// // `obj1.obj2.obj3.method`メソッドの`this`は`obj3`を参照
// console.log(obj1.obj2.obj3.method() === obj1.obj2.obj3); // => true

// "use strict";
// const person = {
//     fullName: "Brendan Eich",
//     sayName: function() {
//         // `this`は呼び出し元によって異なる
//         return this.fullName;
//     }
// };
// // `sayName`メソッドは`person`オブジェクトに所属する
// // `this`は`person`オブジェクトとなる
// console.log(person.sayName()); // => "Brendan Eich"
// // `person.sayName`を`say`変数に代入する
// const say = person.sayName;
// // 代入したメソッドを関数として呼ぶ
// // この`say`関数はどのオブジェクトにも所属していない
// // `this`はundefinedとなるため例外を投げる
//  console.log(say()); // => TypeError: Cannot read property 'fullName' of undefined

// "use strict";
// function say(message) {
//   return `${message} ${this.fullName}!`;
// }
// const person = {
//   fullName: "Brendan Eich"
// };
// console.log(say.call(person, "こんにちは"));
// say("こんにちは");

// "use strict";
// function say(message) {
//     return `${message} ${this.fullName}！`;
// }
// const person = {
//     fullName: "Brendan Eich"
// };
// // `this`を`person`にして`say`関数を呼びだす
// // callとは異なり引数を配列として渡す
// console.log(say.apply(person, ["こんにちは"])); // => "こんにちは Brendan Eich！"
// // `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
// say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined

// function say(message) {
//   return `${message} ${this.fullName}！`;
// }
// const person = {
//   fullName: "Brendan Eich"
// };
// // `this`を`person`に束縛した`say`関数をラップした関数を作る
// const sayPerson = say.bind(person, "こんにちは");
// console.log(sayPerson()); // => "こんにちは Brendan Eich！"

// function say(message) {
//   return `${message} ${this.fullName}！`;
// }
// const person = {
//   fullName: "Brendan Eich"
// };
// // `this`を`person`に束縛した`say`関数をラップした関数を作る
// //  say.bind(person, "こんにちは"); は次のようなラップ関数を作る
// const sayPerson = () => {
//   return say.call(person, "こんにちは");
// };
// console.log(sayPerson()); // => "こんにちは Brendan Eich！"

// "use strict";
// // strict modeを明示しているのは、thisがグローバルオブジェクトに暗黙的に変換されるのを防止するため
// const Prefixer = {
//     prefix: "pre",
//     /**
//      * `strings`配列の各要素にprefixをつける
//      */
//     prefixArray(strings) {
//         return strings.map(function(str) {
//             // コールバック関数における`this`は`undefined`となる(strict mode)
//             // そのため`this.prefix`は`undefined.prefix`となり例外が発生する
//             return this.prefix + "-" + str;
//         });
//     }
// };
// // `prefixArray`メソッドにおける`this`は`Prefixer`
// console.log(Prefixer.prefixArray(["a", "b", "c"])); 

// "use strict";
// const Prefixer = {
//     prefix: "pre",
//     prefixArray(strings) {
//         // `that`は`prefixArray`メソッド呼び出しにおける`this`となる
//         // つまり`that`は`Prefixer`オブジェクトを参照する
//         const that = this;
//         return strings.map(function(str) {
//             // `this`ではなく`that`を参照する
//             return that.prefix + "-" + str;
//         });
//     }
// };
// // `prefixArray`メソッドにおける`this`は`Prefixer`
// const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
// console.log(prefixedStrings);

// "use strict";
// const Prefixer = {
//     prefix: "pre",
//     prefixArray(strings) {
//         // Arrayの`map`メソッドは第二引数に`this`となる値を渡せる
//         return strings.map(function(str) {
//             // `this`が第二引数の値と同じになる
//             // つまり`prefixArray`メソッドと同じ`this`となる
//             return this.prefix + "-" + str;
//         }, this);
//     }
// };
// // `prefixArray`メソッドにおける`this`は`Prefixer`
// const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
// console.log(prefixedStrings);

// "use strict";
// const Prefixer = {
//     prefix: "pre",
//     prefixArray(strings) {
//         return strings.map((str) => {
//             // Arrow Function自体は`this`を持たない
//             // `this`は外側の`prefixArray`関数が持つ`this`を参照する
//             // そのため`this.prefix`は"pre"となる
//             return this.prefix + "-" + str;
//         });
//     }
// };
// // このとき、`prefixArray`のベースオブジェクトは`Prefixer`となる
// // つまり、`prefixArray`メソッド内の`this`は`Prefixer`を参照する
// const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
// console.log(prefixedStrings);

// const fn = () => {
//   return this;
// };
// console.log(fn() === this);

// const Prefixer = {
//   prefix: "pre",
//   prefixArray(string) {
//     return string.map((str) => {
//       return this.prefix + "-" + str
//     });
//   }
// };
// const prefixedStrings = Prefixer.prefixArray(['a', 'b', 'c']);
// console.log(prefixedStrings);

// class MyClass {
// }
// const myClass = new MyClass();
// const myClassAnother = new MyClass();
// console.log(myClass === myClassAnother);
// console.log(myClass instanceof MyClass);
// console.log(myClassAnother instanceof MyClass);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }
// const point = new Point(3, 4);
// console.log(point.x);
// console.log(point.y);

// class Counter {
//   constructor() {
//     this.count = 0;
//   }
//   increment() {
//     this.count++;
//   }
// }
// const counterA = new Counter();
// const counterB = new Counter();
// counterA.increment();
// console.log(counterA.count);
// console.log(counterB.count);

// class NumberWrapper {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     console.log("getter");
//     return this._value;
//   }
//   set value(newValue) {
//     console.log("setter");
//     this._value = newValue;
//   }
// }
// const numberWrapper = new NumberWrapper(1);
// console.log(numberWrapper.value);
// numberWrapper.value = 42;
// console.log(numberWrapper.value);

// const array = [1, 2, 3, 4, 5];
// // 要素数を減らすと、インデックス以降の要素が削除される
// array.length = 3;
// console.log(array.join(", "));
// // 要素数だけを増やしても、配列の中身は空要素が増えるだけ
// array.length = 5;
// console.log(array.join(", "));

// class ArrayLike {
//   constructor(items = []) {
//     this._items = items;
//   }
//   get items() {
//     return this._items;
//   }
//   get length() {
//     return this._items.length;
//   }
//   set length(newLength) {
//     const currentItemLength = this.items.length;
//     if (newLength < currentItemLength) {
//       this._items = this.items.slice(0, newLength);
//     } else if (newLength > currentItemLength) {
//       this._items = this.items.concat(new Array(newLength - currentItemLength));
//     }
//   }
// }
// const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
// arrayLike.length = 2;
// console.log(arrayLike.items.join(", "));
// arrayLike.length = 5;
// console.log(arrayLike.items.join(", "));

// class Counter {
//   count = 0;
//   increment() {
//     this.count++;
//   }
// }
// const counter = new Counter();
// console.log(counter.count);
// counter.increment();
// console.log(counter.count);

// class Counter {
//   count = 0;
//   up = this.increment;
//   increment() {
//     this.count++;
//   }
// }
// const counter = new Counter();
// counter.up();
// console.log(counter.count);

// class PrivateExampleClass {
//   #privateField = 42;
//   dump() {
//     console.log(this.#privateField);
//   }
// }
// const privateExample = new PrivateExampleClass();
// privateExample.dump();

// class NumberWrapper {
//   // Publicクラスフィールドなのでクラスの外からアクセスできる
//   _value;
//   constructor(value) {
//     this._value = value;
//   }
//   // `_value`プロパティの値を返すgetter
//   get value() {
//     return this._value;
//   }
//   // `_value`プロパティに値を代入するsetter
//   set value(newValue) {
//     this._value = newValue;
//   }
// }
// const numberWrapper = new NumberWrapper(1);
// console.log(numberWrapper._value);

// class NumberWrapper {
//   // valueはPrivateクラスフィールドとして定義
//   #value;
//   constructor(value) {
//     this.#value = value;
//   }
//   // `#value` フィールドの値を返すgetter
//   get value() {
//     return this.#value;
//   }
//   // `#value`フィールドに値を代入するsetter
//   set value(newValue) {
//     this.#value = newValue;
//   }
// }
// const numberWrapper = new NumberWrapper(1);
// console.log(numberWrapper._value);

// class ArrayWrapper {
//   // new演算子で引数が渡されなかった場合の初期値は空配列
//   constructor(array = []) {
//     this.array = array;
//   }
//   // rest parametersとして要素を受け付ける
//   static of(...items) {
//     return new ArrayWrapper(items);
//   }
//   get length() {
//     return this.array.length;
//   }
// }
// // 配列を引数として渡している
// const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
// // 要素を引数として渡している
// const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
// console.log(arrayWrapperA.length);
// console.log(arrayWrapperB.length);

// class Colors {
//   static GREEN = "緑";
//   static RED = "赤";
//   static BLUE = "青";
// }
// // クラスのプロパティとして参照できる
// console.log(Colors.GREEN); // => "緑"

// class ConflictClass {
//   //  インスタンスオブジェクトに`method`を定義
//   method = () => {
//     console.log("インスタンスオブジェクトのメソッド");
//   };
//   method() {
//     console.log("プロトタイプオブジェクト")
//   }
// }
// const conflict = new ConflictClass();
// conflict.method();
// delete conflict.method;
// conflict.method();

// class Parent {
//   constructor(...args) {
//     console.log("Parentコンストラクタの処理", ...args);
//   }
// }
// class Child extends Parent {
//   constructor(...args) {
//     super(...args);
//     console.log("Childコンストラクタの処理", ...args);
//   }
// }
// const child = new Child("引数1", "引数2");

// class Parent {
//   constructor() {
//     this.name = "Parent";
//   }
// }
// class Child extends Parent {
//   constructor() {
//     super();
//     this.name = "Child";
//   }
// }
// const parent = new Parent();
// console.log(parent.name);
// const child = new Child();
// console.log(child.name);

// class Parent {
//   parentField = "親クラスで定義したフィールド";
// }
// class Child extends Parent {
//   childField = "子クラスで定義したフィールド";
// }
// const instance = new Child();
// console.log(instance.parentField);
// console.log(instance.childField);

// class Parent {
//   #parentFeild = "親クラスで定義したPrivateフィールド";
// }
// // `Parent`を継承した`Child`を定義
// class Child extends Parent {
//   dump() {
//       console.log(this.#parentFeild); // => SyntaxError: reference to undeclared private field or method #parentFeild
//   }
// }
// const instance = new Child();
// instance.dump();

// class Parent {
//   static hello() {
//     return "Hello";
//   }
// }
// class Child extends Parent {}
// console.log(Child.hello());

// try {
//   console.log("try節:この行は実行されます");
//   undefinedFunction();
// } catch (error) {
//   console.log("catch節:この行は実行されます");
//   console.log("error instanceof ReferenceError");
//   console.log(error.message);
// } finally {
//   console.log("finally節:この行は実行されます");
// }

// try {
//   undefinedFunction();
// } catch (error) {
//   console.error(error);
// }
// try {
//   undefinedFunction();
// } finally {
//   console.log("この行は実行されます");
// }

// try {
//   throw new Error("例外が投げられました");
// } catch (error) {
//   console.log(error.message);
// }

// function assertPositiveNumber(num) {
//   if (num < 0) {
//     throw new Error(`${num} is not positive.`);
//   }
// }

// try {
//   assertPositiveNumber(-1);
// } catch (error) {
//   console.log(error instanceof Error);
//   console.log(error.message);
// }

// try {
//   // 存在しない変数を参照する
//   console.log(x);
// } catch (error) {
//   console.log(error instanceof ReferenceError); // => true
//   console.log(error.name); // => "ReferenceError"
//   console.log(error.message); // エラーメッセージが表示される
// }

// try {
//   // eval関数は渡した文字列をJavaScriptとして実行する関数
//   // 正しくない構文をパースさせ、SyntaxErrorを実行時に発生させる
//   eval("foo! bar!");
// } catch (error) {
//   console.log(error instanceof SyntaxError); // => true
//   console.log(error.name); // => "SyntaxError"
//   console.log(error.message); // エラーメッセージが表示される
// }

// try {
//   // 関数ではないオブジェクトを関数として呼び出す
//   const fn = {};
//   fn();
// } catch (error) {
//   console.log(error instanceof TypeError); // => true
//   console.log(error.name); // => "TypeError"
//   console.log(error.message); // エラーメッセージが表示される
// }

// function reverseString(str) {
//   if (typeof str !== "string") {
//       throw new TypeError(`${str} is not a string`);
//   }
//   return Array.from(str).reverse().join("");
// }

// try {
//   // 数値を渡す
//   reverseString(100);
// } catch (error) {
//   console.log(error instanceof TypeError); // => true
//   console.log(error.name); // => "TypeError"
//   console.log(error.message); // "100 is not a string"
// }

// function fn() {
//   console.log("メッセージ");
//   console.error("エラーメッセージ");
// }

// fn();

// function blockTime(timeout) {
//   const startTime = Date.now();
//   while(true) {
//     const diffTime = Date.now() - startTime;
//     if (diffTime >= timeout) {
//       return;
//     }
//   }
// }
// console.log("処理を開始");
// blockTime(3000);
// console.log("この行が呼ばれるまで処理がブロックされる");

// function blockTime(timeout) {
//   const startTime = Date.now();
//   while (true) {
//     const diffTime = Date.now() - startTime
//     if (diffTime >= timeout) {
//       return;
//     }
//   }
// }
// console.log("1, setTimeoutのコールバック関数を10ミリ秒後に実行します");
// setTimeout(() => {
//   console.log("3, ブロックする処理を開始します");
//   blockTime(3000);
//   console.log("4, ブロックする処理が完了しました");
// }, 10);
// console.log("2, 動機的な処理を実行します");

// function blockTime(timeout) {
//   const startTime = Date.now();
//   while (true) {
//     const diffTime = Date.now() - startTime;
//     if (diffTime >= timeout) {
//       return;
//     }
//   }
// }
// const startTime = Date.now();
// setTimeout(() => {
//   const endTime = Date.now();
//   console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリかかりました`);
// }, 10);
// console.log("ブロックする処理を開始します");
// blockTime(1000);
// console.log("ブロックする処理が完了しました");

// try {
//   setTimeout(() => {
//       throw new Error("非同期的なエラー");
//   }, 10);
// } catch (error) {
//   // 非同期エラーはキャッチできないため、この行は実行されません
// }
// console.log("この行は実行されます");

// fs.readFile("./example.txt", (error, data) => {
//   if (error) {
//   } else {
//   }
// })

// /**
//  * 1000ミリ秒未満のランダムなタイミングでレスポンスを疑似的にデータ取得する関数
//  * 指定した`path`にデータがある場合は`callback(null, レスポンス)`を呼ぶ
//  * 指定した`path`にデータがない場合は`callback(エラー)`を呼ぶ
//  */
//  function dummyFetch(path, callback) {
//   setTimeout(() => {
//       // /success からはじまるパスにはリソースがあるという設定
//       if (path.startsWith("/success")) {
//           callback(null, { body: `Response body of ${path}` });
//       } else {
//           callback(new Error("NOT FOUND"));
//       }
//   }, 1000 * Math.random());
// }
// // /success/data にリソースが存在するので、`response`にはデータが入る
// dummyFetch("/success/data", (error, response) => {
//   if (error) {
//       // この行は実行されません
//   } else {
//       console.log(response); // => { body: "Response body of /success/data" }
//   }
// });
// // /failure/data にリソースは存在しないので、`error`にはエラーオブジェクトが入る
// dummyFetch("/failure/data", (error, response) => {
//   if (error) {
//       console.log(error.message); // => "NOT FOUND"
//   } else {
//       // この行は実行されません
//   }
// });

// /**
//  * リソースの取得に成功した場合は`successCallback(レスポンス)`を呼び出す
//  * リソースの取得に失敗した場合は`failureCallback(エラー)`を呼び出す
//  */
//  function dummyFetch(path, successCallback, failureCallback) {
//   setTimeout(() => {
//       if (path.startsWith("/success")) {
//           successCallback({ body: `Response body of ${path}` });
//       } else {
//           failureCallback(new Error("NOT FOUND"));
//       }
//   }, 1000 * Math.random());
// }

// const executor = (resolve, reject) => {
//   // 非同期の処理が成功したときはresolveを呼ぶ
//   // 非同期の処理が失敗したときはrejectを呼ぶ
// };

// const promise = new Promise((resolve, reject) => {

// });
// const onFulfilled = () => {
//   console.log("resolveされたときに呼ばれる");
// };
// const onRejected = () => {
//   console.log("rejectされたときに呼ばれる");
// };
// promise.then(onFulfilled, onRejected);

// /**
//  * 1000ミリ秒未満のランダムなタイミングでレスポンスを疑似的にデータ取得する関数
//  * 指定した`path`にデータがある場合、成功として**Resolved**状態のPromiseオブジェクトを返す
//  * 指定した`path`にデータがない場合、失敗として**Rejected**状態のPromiseオブジェクトを返す
//  */
// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/success")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("Not Found"));
//       }
//     }, 1000 * Math.random());
//   });
// }
// `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
// /success/data のリソースは存在するので成功しonFulfilledが呼ばれる
// dummyFetch("/success/data").then(function onFulfilled(response) {
//   console.log(response); // => { body: "Response body of /success/data" }
// }, function onRejected(error) {
//   // この行は実行されません
// });
// // /failure/data のリソースは存在しないのでonRejectedが呼ばれる
// dummyFetch("/failure/data").then(function onFulfilled(response) {
//   // この行は実行されません
// }, function onRejected(error) {
//   console.log(error); // Error: "NOT FOUND"
// });

// function delay(timeoutMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, timeoutMs);
//   });
// }
// delay(10).then(() => {
//   console.log("10ミリ秒後に呼ばれる");
// });

// function errorPromise(message) {
//   return new Promise((resolve, reject) => {
//     reject(new Error(message));
//   });
// }
// // 非推奨: `then`メソッドで失敗時のコールバック関数だけを登録
// errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
//   console.log(error.message);
// });
// // 推奨: `catch`メソッドで失敗時のコールバック関数を登録
// errorPromise("catchでエラーハンドリング").catch(error => {
//   console.log(error.message);
// });

// function throwPromise() {
//   return new Promise((resolve, reject) => {
//     // Promiseコンストラクタの中で例外は自動的にキャッチされrejectを呼ぶ
//     throw new Error("例外が発生");
//     // 例外が発生すると、これ以降のコンストラクタの処理は実行されません
//   });
// }

// throwPromise().catch(error => {
//   console.log(error.message);
// });

// const promise = new Promise((resolve, reject) => {
//   // 非同期でresolveする
//   setTimeout(() => {
//       resolve();
//       // すでにresolveされているため無視される
//       reject(new Error("エラー"));
//   }, 16);
// });
// promise.then(() => {
//   console.log("Fulfilledとなった");
// }, (error) => {
//   // この行は呼び出されない
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve();
//       resolve(); // 二度目以降のresolveやrejectは無視される
//   }, 16);
// });
// promise.then(() => {
//   console.log("最初のresolve時に一度だけ呼ばれる");
// }, (error) => {
//   // この行は呼び出されない
// });

// const fulfilledPromise = Promise.resolve(); と同じ意味
// const fulfilledPromise = new Promise((resolve) => {
//   resolve();
// });

// `resolve(42)`された`Promise`インスタンスを作成する
// const fulfilledPromise = Promise.resolve(42);
// fulfilledPromise.then(value => {
//     console.log(value); // => 42
// });

// const promise = Promise.resolve();
// promise.then(() => {
//     console.log("2. コールバック関数が実行されました");
// });
// console.log("1. 同期的な処理が実行されました");

// const promise = new Promise((resolve) => {
//   console.log("1. resolveします");
//   resolve();
// });
// promise.then(() => {
//   console.log("3. コールバック関数が実行されました");
// });
// console.log("2. 同期的な処理が実行されました");

// const rejectedPromise = Promise.reject(new Error("エラー"));
// const rejectedPromise = new Promise((resolve, reject) => {
//   reject(new Error("エラー"));
// });

// Promise.reject(new Error("エラー")).catch(() => {
//   console.log("2, コールバク関数が実行されました");
// });
// console.log("1, 動機的な処理が実行されました");

// Promise.resolve()
// .then(() => {
//   console.log(1);
// })
// .then(() => {
//   console.log(2);
// });

// Promiseチェーンを変数に入れた場合
// const firstPromise = Promise.resolve();
// const secondPromise = firstPromise.then(() => {
//     console.log(1);
// });
// const thirdPromise = secondPromise.then(() => {
//     console.log(2);
// });
// // それぞれ新しいPromiseインスタンスが作成される
// console.log(firstPromise === secondPromise); // => false
// console.log(secondPromise === thirdPromise); // => false

// function asyncTask() {
//   return Math.random() > 0.5
//   ? Promise.resolve("成功")
//   : Promise.reject(new Error("失敗"));
// }

// // asyncTask関数は新しい`Promise`インスタンスを返す
// asyncTask()
//   // thenメソッドは新しい`Promise`インスタンスを返す
//   .then(function onFulfilled(value) {
//     console.log(value);
//   })
//   // catchメソッドは新しい`Promise`インスタンスを返す
//   .catch(function onRejected(error) {
//     console.log(error.message);
//   })

// const rejectedPromise = Promise.reject(new Error("失敗"));
// rejectedPromise.then(() => {

// }).then(() => {

// }).catch(error => {
//   console.log(error.message);
// })

// Promise.resolve().then(() => {
//   throw new Error("例外");
// }).then(() => {

// }).catch(error => {
//   console.log(error.message);
// });

// Promise.resolve(1).then((value) => {
//   console.log(value);
//   return value * 2;
// }).then(value => {
//   console.log(value);
//   return value * 4;
// }).then(value => {
//   console.log(value);
// }).then(value => {
//   console.log(value);
// });

// Promise.reject(new Error("失敗")).catch(error => {
//   // 一度catchすれば、次に呼ばれるのは成功時のコールバック
//   return 1;
// }).then(value => {
//   console.log(value); // => 1
//   return value * 2;
// }).then(value => {
//   console.log(value); // => 2
// });

// Promise.resolve().then(function onfulfilledA() {
//   return Promise.reject(new Error("失敗"));
// }).then(function onFulfilledB() {
//   console.log("onFulfilledBは呼び出せません");
// }).catch(function onRejected(error) {
//   console.log(error.message);
// }).then(function onFulfilledC() {
//   console.log("onFulfilledCは呼び出されます");
// });

// function main() {
//   return Promise.reject(new Error("エラー"));
// }
// // mainはRejectedなPromiseを返す
// main().catch(error => {
//   // mainで発生したエラーのログを出力する
//   console.log(error);
//   // Promiseチェーンはそのままエラーを継続させる
//   return Promise.reject(error);
// }).then(() => {
//   // 前のcatchでRejectedなPromiseが返されたため、この行は実行されません
// }).catch(error => {
//   console.log("メインの処理が失敗した");
// });

// const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
// promise.then(() => {
//   console.log("Promiseのthenメソッド");
// }).catch((error) => {
//   console.log("Promiseのcatchメソッド");
// }).finally(() => {
//   console.log("Promiseのfinallyメソッド");
// });

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}`});
//       } else {
//         reject(new Error("Not Found"));
//       }
//     }, 1000 * Math.random());
//   });
// }
// let isLoading = true;
// dummyFetch("/resource/A").then(response => {
//   console.log(response);
// }).catch(error => {
//   console.log(error);
// }).finally(() => {
//   isLoading = false;
//   console.log("Promiseのfinallyメソッド");
// });

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("Not Found"));
//       }
//     }, 1000 * Math.random());
//   });
// }

// const results = [];
// // Resource Aを取得する
// dummyFetch("/resource/A").then(response => {
//   results.push(response.body);
//   // Resource Bを取得する
//   return dummyFetch("/resource/B");
// }).then(response => {
//   results.push(response.body);
// }).then(() => {
//   console.log(results);
// })

// `timeoutMs`ミリ秒後にresolveする
// function delay(timeoutMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(timeoutMs);
//     }, timeoutMs);
//   });
// }
// const promise1 = delay(1);
// const promise2 = delay(2);
// const promise3 = delay(3);

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// });

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("NOT FOUND"));
//       }
//     }, 1000 * Math.random());
//   });
// }
// const fetchedPromise = Promise.all([
//   dummyFetch("/resource/A"),
//   dummyFetch("/not_found/B")
// ]);
// fetchedPromise.then(([responseA, responseB]) => {
//   console.log(responseA.body);
//   console.log(responseB.body);
// }).catch(error => {
//   console.error(error);
// });

// `timeoutMs`ミリ秒後にresolveする
// function delay(timeoutMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(timeoutMs);
//     }, timeoutMs);
//   });
// }
// // 1つでもresolveまたはrejectした時点で次の処理を呼び出す
// const racePromise = Promise.race([
//   delay(32),
//   delay(64),
//   delay(128)
// ]);
// racePromise.then(value => {
//   // もっとも早く完了するのは1ミリ秒後
//   console.log(value); // => 1
// });

// `timeoutMs`ミリ秒後にrejectする
// function timeout(timeoutMs) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
//       }, timeoutMs);
//   });
// }
// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           if (path.startsWith("/resource")) {
//               resolve({ body: `Response body of ${path}` });
//           } else {
//               reject(new Error("NOT FOUND"));
//           }
//       }, 1000 * Math.random());
//   });
// }
// // 500ミリ秒以内に取得できなければ失敗時の処理が呼ばれる
// Promise.race([
//   dummyFetch("/resource/data"),
//   timeout(500),
// ]).then(response => {
//   console.log(response.body); // => "Response body of /resource/data"
// }).catch(error => {
//   console.log(error.message); // => "Timeout: 500ミリ秒経過"
// });

// async function doAsync() {
//   return "値";
// }
// // doAsync関数はPromiseを返す
// doAsync().then(value => {
//   console.log(value);
// });

// async function resolveFn() {
//   return "返り値";
// }
// resolveFn().then(value => {
//   console.log(value);
// });

// async function rejectFn() {
//   return Promise.reject(new Error("エラーメッセージ"));
// }
// rejectFn().catch(error => {
//   console.log(error.message);
// });

// async function exceptionFn() {
//   throw new Error("例外が発生しました");
// }
// exceptionFn().catch(error => {
//   console.log(error.message);
// });

// async function asyncMain() {
//   const value = await Promise.resolve(42);
//   console.log(value);
// }
// asyncMain();

// function asyncMain() {
//   return Promise.resolve(42).then(value => {
//       console.log(value);
//   });
// }
// asyncMain();

// async function asyncMain() {
//   // `await`式で評価した右辺のPromiseがRejectedとなったため、例外がthrowされる
//   const value = await Promise.reject(new Error("エラーメッセージ"));
//   // await式で例外が発生したため、この行は実行されません
// }
// // Async Functionは自動的に例外をキャッチできる
// asyncMain().catch(error => {
//   console.log(error.message); // => "エラーメッセージ"
// });

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("Not Found"));
//       }
//     }, 1000 * Math.random());
//   });
// }
// // リソースAとリソースBを順番に取得する
// function fetchAB() {
//   const results = [];
//   return dummyFetch("/resource/A").then(response => {
//     results.push(response.body);
//     return dummyFetch("/resource/B");
//   }).then(response => {
//     results.push(response.body);
//     return results;
//   });
// }
// // リソースを取得して出力する
// fetchAB().then((results) => {
//   console.log(results);
// })

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("NOT FOUND"));
//       }
//     }, 1000 * Math.random());
//   });
// }
// // リソースAとリソースBを順番に取得する
// async function fetchAB() {
//   const results = [];
//   const responseA = await dummyFetch("/resource/A");
//   results.push(responseA.body);
//   const responseB = await dummyFetch("/resource/B");
//   results.push(responseB.body);
//   return results;
// }
// // リソースを取得して出力する
// fetchAB().then((results) => {
//   console.log(results);
// });

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("NOT FOUND"));
//       }
//     }, 1000 * Math.random());
//   });
// }
// // 複数のリソースを順番に取得する
// async function fetchResources(resources) {
//   const results = [];
//   for (let i = 0; i < resources.length; i++ ) {
//     const resource = resources[i];
//     const response = await dummyFetch(resource);
//     results.push(response.body);
//   }
//   return results;
// }
// const resources = [
//   "/resource/A",
//   "/resource/B"
// ];
// fetchResources(resources).then((results) => {
//   console.log(results);
// });

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           if (path.startsWith("/resource")) {
//               resolve({ body: `Response body of ${path}` });
//           } else {
//               reject(new Error("NOT FOUND"));
//           }
//       }, 1000 * Math.random());
//   });
// }
// // 複数のリソースをまとめて取得する
// async function fetchAllResources(resources) {
//   // リソースを同時に取得する
//   const promises = resources.map(function(resource) {
//       return dummyFetch(resource);
//   });
//   // すべてのリソースが取得できるまで待つ
//   // Promise.allは [ResponseA, ResponseB] のように結果が配列となる
//   const responses = await Promise.all(promises);
//   // 取得した結果からレスポンスのボディだけを取り出す
//   return responses.map((response) => {
//       return response.body;
//   });
// }
// const resources = [
//   "/resource/A",
//   "/resource/B"
// ];
// // リソースを取得して出力する
// fetchAllResources(resources).then((results) => {
//   console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
// });

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("NOT FOUND"));
//       }
//     }, 1000 * Math.random());
//   });
// }
// async function fetchAllResources(resources) {
//   const promises = resources.map(function(resource) {
//     return dummyFetch(resource);
//   });
//   const responses = await Promise.all(promises);
//   return responses.map((response) => {
//     return response.body;
//   });
// }
// const resources = [
//   "/resource/A",
//   "/resource/B"
// ];
// fetchAllResources(resources).then((results) => {
//   console.log(results);
// });

// async function asyncMain() {
//   await new Promise((resolve) => {
//     setTimeout(resolve, 16);
//   });
// }
// console.log("1. asyncMain関数を呼び出します");
// // Async Functionは外から見れば単なるPromiseを返す関数
// asyncMain().then(() => {
//   console.log("3. asyncMain関数が完了しました");
// });
// // Async Functionの外側の処理はそのまま進む
// console.log("2. asyncMain関数外では、次の行が動機的に呼び出される");

// async function fetchResources(resources) {
//   const results = [];
//   // Syntax Errorとなる例
//   resources.forEach(function(resource) {
//     // Async Functionではないスコープで`await`式を利用しているためSyntax Errorとなる
//     const response = await dummyFetch(resource);
//     results.push(response.body);
//   });
//   return results;
// }

// function dummyFetch(path) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (path.startsWith("/resource")) {
//         resolve({ body: `Response body of ${path}` });
//       } else {
//         reject(new Error("NOT FOUND"));
//       }
//     }, 1000 * Math.random());
//   });
// }
// // リソースを順番に取得する
// async function fetchResources(resources) {
//   const results = [];
//   console.log("1. fetchResourcesを開始");
//   resources.forEach(async function(resource) {
//     console.log(`2. ${resource}の取得開始`);
//     const response = await dummyFetch(resource);
//     console.log(`5. ${resource}の取得完了`);
//     results.push(response.body);
//   });
//   console.log("3. fetchResourcesを終了");
//   return results;
// }
// const resources = ["/resource/A", "/resource/B"];
// // リソースを取得して出力する
// fetchResources(resources).then((results) => {
//   // しかし、resultsは空になってしまう
//   console.log("4. fetchResourcesの結果を取得");
//   console.log(results); // => []
// });

// const map = new Map([["key1", "value1"], ["key2", "value2"]]);
// // 2つのエントリーで初期化されている
// console.log(map.size); // => 2

// const map = new Map();
// map.set("key", "value1");
// console.log(map.size);
// console.log(map.get("key"));
// map.set("key", "value2");
// console.log(map.get("key"));
// console.log(map.has("key"));
// console.log(map.has("foo"));

// const map = new Map();
// map.set("key1", "value1");
// map.set("key2", "value2");
// console.log(map.size);
// map.delete("key1");
// console.log(map.size);
// map.clear();
// console.log(map.size);

// const map = new Map([["key1", "value1"], ["key2", "value2"]]);
// const results = [];
// map.forEach((value, key) => {
//   results.push(`${key}:${value}`);
// });
// console.log(results);

// const map = new Map([["key1", "value1"], ["key2", "value2"]]);
// const keys = [];
// for (const key of map.keys()) {
//   keys.push(key);
// }
// console.log(keys);
// const keysArray = Array.from(map.keys());
// console.log(keysArray);

// const map = new Map([["key1", "value1"], ["key2", "value2"]]);
// const entries = [];
// for (const [key, value] of map.entries()) {
//   entries.push(`${key}:${value}`);
// }
// console.log(entries);

// const map = new Map([["key1", "value1"], ["key2", "value2"]]);
// const results = [];
// for (const [key, value] of map) {
//   results.push(`${key}:${value}`);
// }
// console.log(results);

// class ShoppingCart {
//   constructor() {
//     this.items = new Map();
//   }
//   addItem(item) {
//     const count = this.items.get(item) ?? 0;
//     this.items.set(item, count +1);
//   }
//   getTotalPrice() {
//     return Array.from(this.items).reduce((total, [item, count]) => {
//       return total + item.price * count;
//     }, 0);
//   }
//   toString() {
//     return Array.from(this.items).map(([item, count]) => {
//       return `${item.name}:${count}`;
//     }).join(",");
//   }
// }
// const shoppingCart = new ShoppingCart();
// const shopItems = [
//   { name: "みかん", price: 100 },
//   { name: "リンゴ", price: 200 },
// ];
// shoppingCart.addItem(shopItems[0]);
// shoppingCart.addItem(shopItems[0]);
// shoppingCart.addItem(shopItems[1]);
// console.log(shoppingCart.getTotalPrice());
// console.log(shoppingCart.toString());

// function sendPOSTRequest(url, data) {
//   const httpRequest = new XMLHttpRequest();
//   httpRequest.setRequestHeader("Content-Typw", "application/json");
//   httpRequest.send(JSON.stringify(data));
//   httpRequest.open("POST", url);
// }
// function onLoginFormSubmit(event) {
//   const form = event.target;
//   const data = {
//     userName: form.elements.userName,
//     password: form.elements.password,
//   };
//   sendPOSTRequest("/api/login", data)
// }

// const listenersMap = new WeakMap();

// class EventEmitter {
//   addListner(listener) {
//     const listeners = listenersMap.get(this) ?? [];
//     const newListeners = listeners.concat(listener);
//     listenersMap.set(this, newListeners);
//   }
// }
// let eventEmitter = new EventEmitter();
// eventEmitter.addListner(() => {
//   console.log("イベントが発火しました");
// });
// eventEmitter = null;

// const cache = new WeakMap();

// function getHeight(element) {
//   if (cache.has(element)) {
//     return cache.get(element);
//   }
//   const height = element.getBoundingClientRect().height;
//   cache.set(element, height);
//   return height;
// }

// const json = '{ "id": 1, "name": "js-primer" }';
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(obj.id);
// console.log(obj.name);

// const json = "[1, 2, 3]";
// console.log(JSON.parse(json)); // => [1, 2, 3]

// const userInput = "not json value";
// try {
//     const json = JSON.parse(userInput);
// } catch (error) {
//     console.log("パースできませんでした");
// }

// const obj = { id: 1, name: "js-primer", bio: null };
// console.log(JSON.stringify(obj));

// const obj = { id: 1, name: "js-primer", bio: null };
// const replacer = (key, value) => {
//     if (value === null) {
//         return undefined;
//     }
//     return value;
// };
// console.log(JSON.stringify(obj, replacer));

// const obj = { id: 1, name: "js-primer", bio: null };
// const replacer = ["id", "name"];
// console.log(JSON.stringify(obj, replacer));

// const obj = { id: 1, name: "js-primer" };
// console.log(JSON.stringify(obj, null, 2));

// const obj = { id: 1, name: "js-primer" };
// console.log(JSON.stringify(obj, null, "\t"));
