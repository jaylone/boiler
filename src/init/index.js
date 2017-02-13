import htmlparser from 'htmlparser2';
import chalk from 'chalk';

let distDom = [];
const rawHtml = "开头<font size=15 color='#333' style='fontSize: 16px'>前置<del>删除文字<a>链接1</a><a>链接2</a></del><br /><strong>粗体文字</strong>后置</font>结尾";
const handler = new htmlparser.DomHandler((error, dom) => {
  if (error) {
    console.log(chalk.red(error));
  } else {
    distDom = dom
  }
})

const parser = new htmlparser.Parser(handler, {
  decodeEntities: false,
  xmlMode: true
});
parser.write(rawHtml);
parser.end();

let str = '';


const parseToText = (node) => {

  const { data, type, attribs, children } = node;
  const list = [];

  if (type === 'tag') {
    list.push(children.map(parseToText));
  } else if (type === 'text') {
    list.push(data)
  }

  return list;
}

console.log(distDom);

console.log(distDom.map(parseToText));

if(module.hot) {
  module.hot.accept();
}
