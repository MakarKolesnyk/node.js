import cowsay from 'cowsay'
import Article from "./Article.mjs";
import { mult,del,sum} from "./math.mjs";

console.log(cowsay.say({text: 'qwerty'}));


const num1 = 5;
const num2 = 8;
console.log(sum(num1,num2));
console.log(mult(4, 9));
console.log(del(45, 9));

const newArticle = new Article("content for article");
console.log(newArticle.render());
