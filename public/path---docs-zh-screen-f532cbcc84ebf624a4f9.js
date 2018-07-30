webpackJsonp([0xea3faf481911],{881:function(e,o){e.exports={data:{currentPage:{html:'<h1>构建一个页面</h1>\n<p>我们专注于从下到上构建UI; 从小做起并增加复杂性. 这样做使我们能够独立开发每个组件,找出其数据需求,并在 Storybook 中使用它. 所有这些都无需 启动服务器或构建出页面!</p>\n<p>在本章中,我们通过组合页面中的组件,并在 Storybook中开发该页面 来继续提高复杂性. </p>\n<h2>嵌套的容器组件</h2>\n<p>由于我们的应用程序非常简单,我们将构建的页面非常简单,只需简单地包装<code>TaskList</code>组件 (通过Redux提供自己的数据) 在某些布局中并拉出redux中顶层<code>error</code>的字段 (假设我们在连接到 服务器时遇到问题,我们将设置该字段) . 创建<code>InboxScreen.js</code>在你的<code>components</code>夹: </p>\n<pre><code class="language-javascript">import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport { connect } from \'react-redux\';\n\nimport TaskList from \'./TaskList\';\n\nexport function PureInboxScreen({ error }) {\n  if (error) {\n    return (\n      &#x3C;div className="page lists-show">\n        &#x3C;div className="wrapper-message">\n          &#x3C;span className="icon-face-sad" />\n          &#x3C;div className="title-message">Oh no!&#x3C;/div>\n          &#x3C;div className="subtitle-message">Something went wrong&#x3C;/div>\n        &#x3C;/div>\n      &#x3C;/div>\n    );\n  }\n\n  return (\n    &#x3C;div className="page lists-show">\n      &#x3C;nav>\n        &#x3C;h1 className="title-page">\n          &#x3C;span className="title-wrapper">Taskbox&#x3C;/span>\n        &#x3C;/h1>\n      &#x3C;/nav>\n      &#x3C;TaskList />\n    &#x3C;/div>\n  );\n}\n\nPureInboxScreen.propTypes = {\n  error: PropTypes.string,\n};\n\nPureInboxScreen.defaultProps = {\n  error: null,\n};\n\nexport default connect(({ error }) => ({ error }))(PureInboxScreen);\n</code></pre>\n<p>我们也改变了<code>App</code>,用于渲染的组件<code>InboxScreen</code> (最终我们会使用路由器来选择正确的页面,但不要在此担心) : </p>\n<pre><code class="language-javascript">import React, { Component } from \'react\';\nimport { Provider } from \'react-redux\';\nimport store from \'./lib/redux\';\n\nimport InboxScreen from \'./components/InboxScreen\';\n\nclass App extends Component {\n  render() {\n    return (\n      &#x3C;Provider store={store}>\n        &#x3C;InboxScreen />\n      &#x3C;/Provider>\n    );\n  }\n}\n\nexport default App;\n</code></pre>\n<p>然而,事情变得有趣的是在 Storybook中渲染故事. </p>\n<p>正如我们之前看到的那样<code>TaskList</code>组件是一个 <strong>容器</strong>, 这使得<code>PureTaskList</code>表示组件. 根据定义,容器组件不能简单地单独呈现; 他们希望通过一些上下文或连接到服务. 这意味着要在Storybook中呈现容器,我们必须模拟 (即提供假装版本) 它所需的上下文或服务. </p>\n<p>放置<code>TaskList</code>进入 Storybook,我们能够通过简单地渲染<code>PureTaskList</code>,并避开容器来避开这个问题. 我们会渲染<code>PureInboxScreen</code>并在 Storybook中做类似的事情. </p>\n<p>但是,对于<code>PureInboxScreen</code>我们有一个问题,因为虽然<code>PureInboxScreen</code>本身是表现性的,它的孩子,<code>TaskList</code>, 不是. 从某种意义上说<code>PureInboxScreen</code>被"容器"污染了. 所以,当我们设置我们的故事<code>InboxScreen.stories.js</code>: </p>\n<pre><code class="language-javascript">import React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\n\nimport { PureInboxScreen } from \'./InboxScreen\';\n\nstoriesOf(\'InboxScreen\', module)\n  .add(\'default\', () => &#x3C;PureInboxScreen />)\n  .add(\'error\', () => &#x3C;PureInboxScreen error="Something" />);\n</code></pre>\n<p>我们看到了虽然如此<code>error</code>故事工作得很好,我们<code>default</code>故事有一个问题,因为<code>TaskList</code>没有要连接的Redux Store . (在尝试测试时,您也会遇到类似的问题<code>PureInboxScreen</code>用单元测试) . </p>\n<p><img src="/broken-inboxscreen.png" alt="Broken inbox"></p>\n<p>避免此问题的一种方法是,永远不要在应用程序中的任何位置呈现容器组件,除非在最高级别,而是将所有要求的数据 传递到 组件层次结构中. </p>\n<p>但是,开发人员 <strong>将</strong> 不可避免地需要在组件层次结构中,进一步渲染容器. 如果我们想要在 Storybook中渲染大部分或全部应用程序 (我们这样做!) ,我们需要一个解决此问题的方法. </p>\n<div class="aside">\n另外，在层次结构中 传递数据 是合法的方法，尤其是在使用 <a href="http://graphql.org/">GraphQL</a>. 这就是我们的建设 <a href="https://chromaticqa.com">Chromatic</a> 伴随着670多个故事.\n</div>\n<h2>用装饰器提供上下文</h2>\n<p>好消息是 Redux Store  很容易提供给 一个<code>InboxScreen</code>故事! 我们可以使用 Redux Store 的模拟版本 提供给到装饰器中: </p>\n<pre><code class="language-javascript">import React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { Provider } from \'react-redux\';\n\nimport { PureInboxScreen } from \'./InboxScreen\';\nimport { defaultTasks } from \'./TaskList.stories\';\n\n// A super-simple mock of a redux store\nconst store = {\n  getState: () => {\n    return {\n      tasks: defaultTasks,\n    };\n  },\n  subscribe: () => 0,\n  dispatch: action(\'dispatch\'),\n};\n\nstoriesOf(\'InboxScreen\', module)\n  .addDecorator(story => &#x3C;Provider store={store}>{story()}&#x3C;/Provider>)\n  .add(\'default\', () => &#x3C;PureInboxScreen />)\n  .add(\'error\', () => &#x3C;PureInboxScreen error="Something" />);\n</code></pre>\n<p>存在类似的方法来为其他数据库提供模拟的上下文,例如<a href="https://www.npmjs.com/package/apollo-storybook-decorator">阿波罗</a>,<a href="https://github.com/orta/react-storybooks-relay-container">Relay</a>和别的. </p>\n<p>在Storybook中 循环浏览状态 可以轻松测试我们是否已正确完成此操作: </p>\n<video autoPlay muted playsInline loop >\n  <source\n    src="/finished-inboxscreen-states.mp4"\n    type="video/mp4"\n  />\n</video>\n<h2>组件驱动开发</h2>\n<p>我们从底部开始<code>Task</code>,然后进展到<code>TaskList</code>,现在我们在这里使用全屏UI. 我们的<code>InboxScreen</code>容纳嵌套的容器组件,并包括随附的故事. </p>\n<video autoPlay muted playsInline loop style="width:480px; height:auto; margin: 0 auto;">\n  <source\n    src="/component-driven-development-optimized.mp4"\n    type="video/mp4"\n  />\n</video>\n<p><a href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"><strong>组件驱动开发</strong></a>允许您在向上移动组件层次结构时,逐渐扩展复杂性. 其中的好处包括 更集中的开发过程 以及 所有可能的UI排列 的覆盖范围. 简而言之,CDD 可帮助您构建 更高质量和更复杂 的用户界面. </p>\n<p>我们还没有完成 - 在构建UI时,工作不会结束. 我们还需要确保它随着时间的推移保持持久. </p>',frontmatter:{title:"构建一个页面",description:"用组件构建一个页面",commit:"9ead5d8"},fields:{slug:"/docs/zh/screen/",chapter:"screen",framework:"docs",language:"zh"}},site:{siteMetadata:{title:"binstd-区块链云服务平台",toc:["get-started","simple-component","composite-component","data","screen","test","deploy","conclusion","contribute"],languages:["en","zh"],githubUrl:"https://github.com/hichroma/learnstorybook.com",codeGithubUrl:"https://github.com/hichroma/learnstorybook-code",siteUrl:"https://binstd.com"}},pages:{edges:[{node:{frontmatter:{tocTitle:"合成组件",title:"组装复合组件",description:"使用更简单的组件 组装复合组件"},fields:{slug:"/docs/zh/composite-component/",chapter:"composite-component"}}},{node:{frontmatter:{tocTitle:null,title:"总结",description:"把所有的知识汇总以下，学习更多的 storybook 技巧"},fields:{slug:"/docs/zh/conclusion/",chapter:"conclusion"}}},{node:{frontmatter:{tocTitle:null,title:"帮助我们",description:"帮助 我们与世界分享 Storybook "},fields:{slug:"/docs/zh/contribute/",chapter:"contribute"}}},{node:{frontmatter:{tocTitle:"Data",title:"接连data",description:"了解如何将数据连接到UI组件"},fields:{slug:"/docs/zh/data/",chapter:"data"}}},{node:{frontmatter:{tocTitle:"发布",title:"发布 Storybook",description:"使用 GitHub 和 Netlify 发布 Storybook网站 "},fields:{slug:"/docs/zh/deploy/",chapter:"deploy"}}},{node:{frontmatter:{tocTitle:"从头开始",title:"开始吧",description:"在你的开发环境下, 设置 React Storybook "},fields:{slug:"/docs/zh/get-started/",chapter:"get-started"}}},{node:{frontmatter:{tocTitle:"页面",title:"构建一个页面",description:"用组件构建一个页面"},fields:{slug:"/docs/zh/screen/",chapter:"screen"}}},{node:{frontmatter:{tocTitle:"简单 组件",title:"构建一个简单的组件",description:"单独构建一个简单的组件"},fields:{slug:"/docs/zh/simple-component/",chapter:"simple-component"}}},{node:{frontmatter:{tocTitle:null,title:"测试",description:"了解测试UI组件的方法"},fields:{slug:"/docs/zh/test/",chapter:"test"}}}]}},pathContext:{slug:"/docs/zh/screen/",framework:"docs",language:"zh",chapter:"screen"}}}});
//# sourceMappingURL=path---docs-zh-screen-f532cbcc84ebf624a4f9.js.map