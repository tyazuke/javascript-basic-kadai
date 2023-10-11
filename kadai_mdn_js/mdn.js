/*
上記のステップで検索したDateクラスのページを読み、日付の取得方法を調べましょう。
調べた情報を元に「2023年8月22日」の形式で出力するコードを記述してください。
*/

const today = new Date();

const year=today.getFullYear();
const month=today.getMonth();
const day=today.getDate();

/*
「関数は定義しただけでは実行されない」
*/ 
console.log(year+"年"+month+"月"+day+"日");