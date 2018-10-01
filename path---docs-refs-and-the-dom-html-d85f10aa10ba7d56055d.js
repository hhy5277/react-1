webpackJsonp([87547260598082],{899:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Refs 提供了一种方式，用于访问在 render 方法中创建的 DOM 节点或 React 元素。</p>\n<p>在典型的 React 数据流中, <a href="/docs/components-and-props.html">属性（props）</a>是父组件与子组件交互的唯一方式。要修改子组件，你需要使用新的 props 重新渲染它。但是，某些情况下你需要在典型数据流外强制修改子组件。要修改的子组件可以是 React 组件的实例，也可以是 DOM 元素。对于这两种情况，React 提供了解决办法。</p>\n<h3 id="何时使用-refs"><a href="#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>何时使用 Refs</h3>\n<p>下面是几个适合使用 refs 的情况：</p>\n<ul>\n<li>处理焦点、文本选择或媒体控制。</li>\n<li>触发强制动画。</li>\n<li>集成第三方 DOM 库</li>\n</ul>\n<p>如果可以通过声明式实现，则尽量避免使用 refs。</p>\n<p>例如，不要在 <code class="gatsby-code-text">Dialog</code> 组件上直接暴露 <code class="gatsby-code-text">open()</code> 和 <code class="gatsby-code-text">close()</code> 方法，最好传递 <code class="gatsby-code-text">isOpen</code> 属性。</p>\n<h3 id="不要过度使用-refs"><a href="#%E4%B8%8D%E8%A6%81%E8%BF%87%E5%BA%A6%E4%BD%BF%E7%94%A8-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>不要过度使用 Refs</h3>\n<p>你可能首先会想到在你的应用程序中使用 refs 来更新组件。如果是这种情况，请花一点时间，重新思考一下 state 属性在组件层中位置。通常你会想明白，提升 state 所在的组件层级会是更合适的做法。有关示例，请参考<a href="/docs/lifting-state-up.html">状态提升</a>.</p>\n<blockquote>\n<p>Note</p>\n<p>下面的例子已经用 React v16.3 引入的 <code class="gatsby-code-text">React.createRef()</code> API 更新。如果你正在使用 React 更早的发布版，我们推荐使用<a href="#callback-refs">回调形式的 refs</a>。</p>\n</blockquote>\n<h3 id="创建-refs"><a href="#%E5%88%9B%E5%BB%BA-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>创建 Refs</h3>\n<p>使用 <code class="gatsby-code-text">React.createRef()</code> 创建 refs，通过 <code class="gatsby-code-text">ref</code> 属性来获得 React 元素。当构造组件时，refs 通常被赋值给实例的一个属性，这样你可以在组件中任意一处使用它们.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>myRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="访问-refs"><a href="#%E8%AE%BF%E9%97%AE-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>访问 Refs</h3>\n<p>当一个 ref 属性被传递给一个 <code class="gatsby-code-text">render</code> 函数中的元素时，可以使用 ref 中的 <code class="gatsby-code-text">current</code> 属性对节点的引用进行访问。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myRef<span class="token punctuation">.</span>current<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>ref的值取决于节点的类型:</p>\n<ul>\n<li>当 <code class="gatsby-code-text">ref</code> 属性被用于一个普通的 HTML 元素时，<code class="gatsby-code-text">React.createRef()</code> 将接收底层 DOM 元素作为它的 <code class="gatsby-code-text">current</code> 属性以创建 <code class="gatsby-code-text">ref</code> 。</li>\n<li>当 <code class="gatsby-code-text">ref</code> 属性被用于一个自定义类组件时，<code class="gatsby-code-text">ref</code> 对象将接收该组件已挂载的实例作为它的 <code class="gatsby-code-text">current</code> 。</li>\n<li><strong>你不能在函数式组件上使用 <code class="gatsby-code-text">ref</code> 属性</strong>，因为它们没有实例。</li>\n</ul>\n<p>下面的例子说明了这些差异。</p>\n<h4 id="为-dom-元素添加-ref"><a href="#%E4%B8%BA-dom-%E5%85%83%E7%B4%A0%E6%B7%BB%E5%8A%A0-ref" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为 DOM 元素添加 Ref</h4>\n<p>以下代码使用 <code class="gatsby-code-text">ref</code> 存储对 DOM 节点的引用：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">CustomTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 创建 ref 存储 textInput DOM 元素</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line">\n</span><span class="gatsby-highlight-code-line">  <span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span>    <span class="token comment">// 直接使用原生 API 使 text 输入框获得焦点</span>\n    <span class="token comment">// 注意：通过 "current" 取得 DOM 节点</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 告诉 React 我们想把 &lt;input> ref 关联到构造器里创建的 `textInput` 上</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n</span>          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n          <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n          \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus the text input<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>React 会在组件加载时将 DOM 元素传入 <code class="gatsby-code-text">current</code> 属性，在卸载时则会改回 <code class="gatsby-code-text">null</code>。<code class="gatsby-code-text">ref</code> 的更新会发生在<code class="gatsby-code-text">componentDidMount</code> 或 <code class="gatsby-code-text">componentDidUpdate</code> 生命周期钩子之前。</p>\n<h4 id="为类组件添加-ref"><a href="#%E4%B8%BA%E7%B1%BB%E7%BB%84%E4%BB%B6%E6%B7%BB%E5%8A%A0-ref" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为类组件添加 Ref</h4>\n<p>如果我们想要包装上面的 <code class="gatsby-code-text">CustomTextInput</code> ，来模拟挂载之后立即被点击的话，我们可以使用 ref 来访问自定义输入，并手动调用它的 <code class="gatsby-code-text">focusTextInput</code> 方法：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">AutoFocusTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomTextInput</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>需要注意的是，这种方法仅对 <code class="gatsby-code-text">class</code> 声明的 <code class="gatsby-code-text">CustomTextInput</code> 有效：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="gatsby-highlight-code-line"><span class="token keyword">class</span> <span class="token class-name">CustomTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n</span>  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4 id="refs-与函数式组件"><a href="#refs-%E4%B8%8E%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refs 与函数式组件</h4>\n<p><strong>你不能在函数式组件上使用 <code class="gatsby-code-text">ref</code> 属性</strong>，因为它们没有实例：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="gatsby-highlight-code-line"><span class="token keyword">function</span> <span class="token function">MyFunctionalComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span>  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 这将 *不会* 工作！</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyFunctionalComponent</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>如果你想使用 <code class="gatsby-code-text">ref</code>，就像你想使用生命周期方法或者 state 一样，应该将其转换为 <code class="gatsby-code-text">class</code> 组件。</p>\n<p>但是，你可以在函数式组件内部使用 <code class="gatsby-code-text">ref</code>，只要它指向一个 DOM 元素或者 class 组件：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">CustomTextInput</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment">// 这里必须声明 textInput，这样 ref 回调才可以引用它</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token keyword">let</span> textInput <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    textInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n<span class="gatsby-highlight-code-line">        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> textInput <span class="token operator">=</span> input<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n        <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus the text input<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>  \n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="对父组件暴露-dom-节点"><a href="#%E5%AF%B9%E7%88%B6%E7%BB%84%E4%BB%B6%E6%9A%B4%E9%9C%B2-dom-%E8%8A%82%E7%82%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对父组件暴露 DOM 节点</h3>\n<p>在极少数情况下，你可能希望从父组件访问子节点的 DOM 节点。通常不建议这样做，因为它会破坏组件的封装，但偶尔也可用于触发焦点或测量子 DOM 节点的大小或位置。</p>\n<p>虽然你可以<a href="#adding-a-ref-to-a-class-component">向子组件添加 ref</a>，但这不是一个理想的解决方案，因为你只能获取组件实例而不是 DOM 节点。并且，它还在函数式组件上无效。</p>\n<p>如果你使用 React 16.3 或更高, 这种情况下我们推荐使用 <a href="/docs/forwarding-refs.html">ref 转发</a>。 <strong>Ref 转发使组件可以像暴露自己的 ref 一样暴露子组件的 ref</strong>。关于怎样对父组件暴露子组件的 DOM 节点，<a href="/docs/forwarding-refs.html#forwarding-refs-to-dom-components">在 ref 转发文档</a> 中有一个详细的例子。</p>\n<p>如果你使用 React 16.2 或更低，或者你需要比 ref 转发更高的灵活性，你可以使用 <a href="https://gist.github.com/gaearon/1a018a023347fe1c2476073330cc5509">这个替代方案</a> 将 ref 作为特殊名字的 prop 直接传递。</p>\n<p>可能的话，我们不建议暴露 DOM 节点，但有时候它会成为救命稻草。注意这些方案需要你在子组件中增加一些代码。如果你对子组件的实现没有控制权的话，你剩下的选择是使用 <a href="/docs/react-dom.html#finddomnode"><code class="gatsby-code-text">findDOMNode()</code></a>，但是不推荐。</p>\n<h3 id="回调-refs"><a href="#%E5%9B%9E%E8%B0%83-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>回调 Refs</h3>\n<p>React 也支持另一种设置 ref 的方式，称为“回调 ref”，更加细致地控制何时 ref 被设置和解除。</p>\n<p>不同于传递 <code class="gatsby-code-text">createRef()</code> 创建的 <code class="gatsby-code-text">ref</code> 属性，你会传递一个函数。这个函数接受 React 组件的实例或 HTML DOM 元素作为参数，以存储它们并使它们能被其他地方访问。</p>\n<p>下面的例子描述了一种通用的范例：使用 <code class="gatsby-code-text">ref</code> 回调函数，在实例的属性中存储对 DOM 节点的引用。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">CustomTextInput</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">setTextInputRef</span> <span class="token operator">=</span> element <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token keyword">this</span><span class="token punctuation">.</span>textInput <span class="token operator">=</span> element<span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">focusTextInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token comment">// 直接使用原生 API 使 text 输入框获得焦点</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 渲染后文本框自动获得焦点</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focusTextInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React</span>\n    <span class="token comment">// 实例上（比如 this.textInput）</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n<span class="gatsby-highlight-code-line">          <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>setTextInputRef<span class="token punctuation">}</span></span>\n</span>        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n          <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Focus the text input<span class="token punctuation">"</span></span>\n<span class="gatsby-highlight-code-line">          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>focusTextInput<span class="token punctuation">}</span></span>\n</span>        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>React 将在组件挂载时将 DOM 元素传入<code class="gatsby-code-text">ref</code> 回调函数并调用，当卸载时传入 <code class="gatsby-code-text">null</code> 并调用它。<code class="gatsby-code-text">ref</code> 回调函数会在 <code class="gatsby-code-text">componentDidMout</code> 和 <code class="gatsby-code-text">componentDidUpdate</code> 生命周期函数前被调用</p>\n<p>你可以在组件间传递回调形式的 refs，就像你可以传递通过 <code class="gatsby-code-text">React.createRef()</code> 创建的对象 refs 一样。</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">CustomTextInput</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomTextInput</span>\n<span class="gatsby-highlight-code-line">        <span class="token attr-name">inputRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>el <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputElement <span class="token operator">=</span> el<span class="token punctuation">}</span></span>\n</span>      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在上面的例子中，<code class="gatsby-code-text">Parent</code> 传递给它的 ref 回调函数作为 <code class="gatsby-code-text">inputRef</code> 传递给 <code class="gatsby-code-text">CustomTextInput</code>，然后 <code class="gatsby-code-text">CustomTextInput</code> 通过 <code class="gatsby-code-text">ref</code>属性将其传递给 <code class="gatsby-code-text">&lt;input&gt;</code>。最终，<code class="gatsby-code-text">Parent</code> 中的 <code class="gatsby-code-text">this.inputElement</code> 将被设置为与 <code class="gatsby-code-text">CustomTextIput</code> 中的 <code class="gatsby-code-text">&lt;input&gt;</code> 元素相对应的 DOM 节点</p>\n<h3 id="旧版-api：string-类型的-refs"><a href="#%E6%97%A7%E7%89%88-api%EF%BC%9Astring-%E7%B1%BB%E5%9E%8B%E7%9A%84-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>旧版 API：String 类型的 Refs</h3>\n<p>如果你之前使用过 React ，你可能了解过之前的API中的 string 类型的 ref 属性，比如 “textInput” ，你可以通过 this.refs.textInput 访问DOM节点。我们不建议使用它，因为 String 类型的 refs <a href="https://github.com/facebook/pull/8333#issuecomment-271648615">存在问题</a>。它已过时并<strong>可能会在未来的版本被移除</strong>。如果你目前还在使用 this.refs.textInput 这种方式访问 refs ，我们建议用回调函数的方式代替。</p>\n<h3 id="注意"><a href="#%E6%B3%A8%E6%84%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>注意</h3>\n<p>如果 ref 回调以内联函数的方式定义，在更新期间它会被调用两次，第一次参数是 null ，之后参数是 DOM 元素。这是因为在每次渲染中都会创建一个新的函数实例。因此，React 需要清理旧的 ref 并且设置新的。通过将 ref 的回调函数定义成类的绑定函数的方式可以避免上述问题，但是大多数情况下无关紧要。</p>',
frontmatter:{title:"Refs & DOM",next:null,prev:null},fields:{path:"docs/refs-and-the-dom.md",slug:"docs/refs-and-the-dom.html"}}},pathContext:{slug:"docs/refs-and-the-dom.html"}}}});
//# sourceMappingURL=path---docs-refs-and-the-dom-html-d85f10aa10ba7d56055d.js.map