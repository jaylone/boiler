import htmlparser from 'htmlparser2';

const parser = new htmlparser.Parser({
  onopentag: function(name, attribs) {
    if (name === "script" && attribs.type === "text/javascript") {
      console.log("JS! Hooray!");
    }
  },
  onattribute: (name, value) => {
    console.log('attribs: ', name, value);
  },
  ontext: function(text) {
    console.log("-->", text);
  },
  onclosetag: function(tagname) {
    if (tagname === "script") {
      console.log("That's it?!");
    }
  }
}, {
  decodeEntities: true
});
parser.write("Xyz <script type='text/javascript'>var foo = 'bar'</ script><font size=15 color='#333' style='fontSize: 16px'>前置<del>删除</del>后置</font>");
parser.end();


if(module.hot) {
  module.hot.accept();
}
