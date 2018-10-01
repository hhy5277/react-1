webpackJsonp([0x68ce5b727d54],{882:function(s,n){s.exports={data:{markdownRemark:{html:'<p>我们来观察一下声明的这个变量：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>这种看起来可能有些奇怪的标签语法既不是字符串也不是 HTML。</p>\n<p>它被称为 JSX， 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。JSX 乍看起来可能比较像是模版语言，但事实上它完全是在 JavaScript 内部实现的。</p>\n<p>JSX 用来声明 React 当中的元素。在<a href="/docs/rendering-elements.html">下一个章节</a>里面我们会详细介绍元素是如何被渲染出来的，接下来呢，我们先来看看 JSX 的基本使用方法。</p>\n<h3 id="在-jsx-中使用表达式"><a href="#%E5%9C%A8-jsx-%E4%B8%AD%E4%BD%BF%E7%94%A8%E8%A1%A8%E8%BE%BE%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>在 JSX 中使用表达式</h3>\n<p> 你可以任意地在 JSX 当中使用 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions">JavaScript 表达式</a>，在 JSX 当中的表达式要包含在大括号里。</p>\n<p> 例如 <code class="gatsby-code-text">2 + 2</code>， <code class="gatsby-code-text">user.firstName</code>， 以及 <code class="gatsby-code-text">formatName(user)</code> 都是可以使用的。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>\n  firstName<span class="token punctuation">:</span> <span class="token string">\'Harper\'</span><span class="token punctuation">,</span>\n  lastName<span class="token punctuation">:</span> <span class="token string">\'Perez\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">    Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span>\n</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  element<span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="http://codepen.io/gaearon/pen/PGEjdG?editors=0010">在 CodePen 上试试。</a></p>\n<p>我们书写 JSX 的时候一般都会带上换行和缩进，这样可以增强代码的可读性。与此同时，我们同样推荐在 JSX 代码的外面扩上一个小括号，这样可以防止 <a href="http://stackoverflow.com/q/2846283">分号自动插入</a> 的 bug。</p>\n<h3 id="jsx-本身其实也是一种表达式"><a href="#jsx-%E6%9C%AC%E8%BA%AB%E5%85%B6%E5%AE%9E%E4%B9%9F%E6%98%AF%E4%B8%80%E7%A7%8D%E8%A1%A8%E8%BE%BE%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX 本身其实也是一种表达式</h3>\n<p>在编译之后呢，JSX 其实会被转化为普通的 JavaScript 对象。</p>\n<p>这也就意味着，你其实可以在 <code class="gatsby-code-text">if</code> 或者 <code class="gatsby-code-text">for</code> 语句里使用 JSX，将它赋值给变量，当作参数传入，作为返回值都可以：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">getGreeting</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token function">formatName</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> Stranger<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="jsx-属性"><a href="#jsx-%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX 属性</h3>\n<p>你可以使用引号来定义以字符串为值的属性：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>也可以使用大括号来定义以 JavaScript 表达式为值的属性：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>img</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>切记你使用了大括号包裹的 JavaScript 表达式时就不要再到外面套引号了。JSX 会将引号当中的内容识别为字符串而不是表达式。</p>\n<h3 id="jsx-嵌套"><a href="#jsx-%E5%B5%8C%E5%A5%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX 嵌套</h3>\n<p>如果 JSX 标签是闭合式的，那么你需要在结尾处用 <code class="gatsby-code-text">/&gt;</code>, 就好像 XML/HTML 一样：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>avatarUrl<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>JSX 标签同样可以相互嵌套：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Good to see you here<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p><strong>警告:</strong></p>\n<p>因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 <code class="gatsby-code-text">camelCase</code> 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称。</p>\n<p>例如，<code class="gatsby-code-text">class</code> 变成了 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className"><code class="gatsby-code-text">className</code></a>，而 <code class="gatsby-code-text">tabindex</code> 则对应着 <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex"><code class="gatsby-code-text">tabIndex</code></a>。</p>\n</blockquote>\n<h3 id="jsx-防注入攻击"><a href="#jsx-%E9%98%B2%E6%B3%A8%E5%85%A5%E6%94%BB%E5%87%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX 防注入攻击</h3>\n<p>你可以放心地在 JSX 当中使用用户输入：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> title <span class="token operator">=</span> response<span class="token punctuation">.</span>potentiallyMaliciousInput<span class="token punctuation">;</span>\n<span class="token comment">// 直接使用是安全的：</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>React DOM 在渲染之前默认会 <a href="http://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html">过滤</a> 所有传入的值。它可以确保你的应用不会被注入攻击。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS(跨站脚本)</a> 攻击。</p>\n<h3 id="jsx-代表-objects"><a href="#jsx-%E4%BB%A3%E8%A1%A8-objects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX 代表 Objects</h3>\n<p>Babel 转译器会把 JSX 转换成一个名为 <code class="gatsby-code-text">React.createElement()</code> 的方法调用。</p>\n<p>下面两种代码的作用是完全相同的：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>greeting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Hello<span class="token punctuation">,</span> world<span class="token operator">!</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>\n  <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>className<span class="token punctuation">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'Hello, world!\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="gatsby-code-text">React.createElement()</code> 这个方法首先会进行一些避免bug的检查，之后会返回一个类似下面例子的对象：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// 注意: 以下示例是简化过的（不代表在 React 源码中是这样）</span>\n<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">{</span>\n  type<span class="token punctuation">:</span> <span class="token string">\'h1\'</span><span class="token punctuation">,</span>\n  props<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    className<span class="token punctuation">:</span> <span class="token string">\'greeting\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token string">\'Hello, world\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>这样的对象被称为 “React 元素”。它代表所有你在屏幕上看到的东西。React 通过读取这些对象来构建 DOM 并保持数据内容一致。</p>\n<p>我们将在下一个章节当中介绍更多有关 React 元素 是如何渲染成 DOM 的内容。</p>\n<blockquote>\n<p><strong>Tip:</strong></p>\n<p>如果你是在使用本地编辑器编写 JSX 代码的话，推荐你去装一个支持 JSX 高亮的插件，这样更方便之后的开发学习。</p>\n</blockquote>',frontmatter:{title:"JSX 简介",next:"rendering-elements.html",prev:"hello-world.html"},fields:{path:"docs/introducing-jsx.md",slug:"docs/introducing-jsx.html"}}},pathContext:{slug:"docs/introducing-jsx.html"}}}});
//# sourceMappingURL=path---docs-introducing-jsx-html-16548079296f60aa75a8.js.map