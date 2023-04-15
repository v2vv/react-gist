import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { marked } from "marked";

// 配置 Marked hightlightjs
function setMarked(langName) {
  marked.setOptions({
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : langName;
      return hljs.highlight(code, { language }).value;
    },
  });
}

function markedConvert(markdown, hljsLang) {
  setMarked(hljsLang);
  marked.parse(markdown);
}

function hljsEffect() {
  // 配置 highlight.js  忽略未经转义的html标签
  hljs.configure({ ignoreUnescapedHTML: true });
  // 获取到内容中所有的code标签
  const codes = document.querySelectorAll("pre code");
  // 让code进行高亮
  codes.forEach((el) => {
    hljs.highlightElement(el);
  });
}

export { markedConvert, hljsEffect };
