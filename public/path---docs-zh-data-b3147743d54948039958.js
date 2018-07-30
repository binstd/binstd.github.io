webpackJsonp([0x9af93032c55d],{878:function(t,e){t.exports={data:{currentPage:{html:"<h1>连线数据</h1>\n<p>到目前为止,我们创建了孤立的无状态组件 - Storybook很棒,但作用不大,除非我们在应用程序中为他们提供一些数据. </p>\n<p>本教程不关注构建应用程序的细节,因此我们不会在此处深入研究这些细节. 但我们将花点时间研究一下 与容器组件 连接数据 的常见模式. </p>\n<h2>容器组件</h2>\n<p>我们的<code>TaskList</code>目前编写的组件是\"表现性的\" (见<a href=\"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0\">这篇博文</a>) 因为它不会与 其自身实现之外 的任何内容交谈. 为了获取数据,我们需要一个\"容器\". </p>\n<p>这个例子使用<a href=\"https://redux.js.org/\">Redux</a>,最流行的React库,用于存储数据,为我们的应用程序构建一个简单的数据模型. 但是,此处使用的模式同样适用于其他数据管理库<a href=\"https://www.apollographql.com/client/\">阿波罗</a>和<a href=\"https://mobx.js.org/\">MobX</a>. </p>\n<p>首先,我们将构建一个简单的Redux存储,它在一个<code>src/lib/redux.js</code>中定义改变任务状态的操作 (故意保持简单) : </p>\n<pre><code class=\"language-javascript\">// 一个简单的 redux store/actions/reducer 实现。\n// 一个真正的应用程序将更复杂，并分为不同的文件.\nimport { createStore } from 'redux';\n\n// 这些行为是可能发生的store变化的“名称”\nexport const actions = {\n  ARCHIVE_TASK: 'ARCHIVE_TASK',\n  PIN_TASK: 'PIN_TASK',\n};\n\n// 动作创建者是将动作与 要求的数据捆绑在一起的方式\nexport const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });\nexport const pinTask = id => ({ type: actions.PIN_TASK, id });\n\n// 我们所有的Reducer都只是改变了一个任务的状态。\nfunction taskStateReducer(taskState) {\n  return (state, action) => {\n    return {\n      ...state,\n      tasks: state.tasks.map(\n        task => (task.id === action.id ? { ...task, state: taskState } : task)\n      ),\n    };\n  };\n}\n\n// reducer描述了 Store 中每个 action 如何改变内容\n\nexport const reducer = (state, action) => {\n  switch (action.type) {\n    case actions.ARCHIVE_TASK:\n      return taskStateReducer('TASK_ARCHIVED')(state, action);\n    case actions.PIN_TASK:\n      return taskStateReducer('TASK_PINNED')(state, action);\n    default:\n      return state;\n  }\n};\n\n// 应用加载时我们Store 的初始状态。\n\n// 通常你会从服务器上获取它\nconst defaultTasks = [\n  { id: '1', title: 'Something', state: 'TASK_INBOX' },\n  { id: '2', title: 'Something more', state: 'TASK_INBOX' },\n  { id: '3', title: 'Something else', state: 'TASK_INBOX' },\n  { id: '4', title: 'Something again', state: 'TASK_INBOX' },\n];\n\n// 我们导出构造的 redux store\nexport default createStore(reducer, { tasks: defaultTasks });\n</code></pre>\n<p>然后我们将更新默认导出<code>TaskList</code>组件连接到Redux存储,并呈现我们感兴趣的任务: </p>\n<pre><code class=\"language-javascript\">import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport Task from './Task';\nimport { connect } from 'react-redux';\nimport { archiveTask, pinTask } from '../lib/redux';\n\nexport function PureTaskList({ loading, tasks, onPinTask, onArchiveTask }) {\n  /* 以前的 TaskList 实现 */\n}\n\nPureTaskList.propTypes = {\n  loading: PropTypes.bool,\n  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,\n  onPinTask: PropTypes.func.isRequired,\n  onArchiveTask: PropTypes.func.isRequired,\n};\n\nPureTaskList.defaultProps = {\n  loading: false,\n};\n\nexport default connect(\n  ({ tasks }) => ({\n    tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),\n  }),\n  dispatch => ({\n    onArchiveTask: id => dispatch(archiveTask(id)),\n    onPinTask: id => dispatch(pinTask(id)),\n  })\n)(PureTaskList);\n</code></pre>\n<p>在这个阶段,我们的 Storybook测试将停止工作,因为<code>TaskList</code>现在是一个容器,不再需要任何 props,而是连接到 Store 并设置<code>PureTaskList</code>包裹组件的props. </p>\n<p>但是,我们可以通过简单地渲染<code>PureTaskList</code>来轻松解决这个问题 - 我们的 Storybook故事中的表现部分: </p>\n<pre><code class=\"language-javascript\">import React from 'react';\nimport { storiesOf } from '@storybook/react';\n\nimport { PureTaskList } from './TaskList';\nimport { task, actions } from './Task.stories';\n\nexport const defaultTasks = [\n  { ...task, id: '1', title: 'Task 1' },\n  { ...task, id: '2', title: 'Task 2' },\n  { ...task, id: '3', title: 'Task 3' },\n  { ...task, id: '4', title: 'Task 4' },\n  { ...task, id: '5', title: 'Task 5' },\n  { ...task, id: '6', title: 'Task 6' },\n];\n\nexport const withPinnedTasks = [\n  ...defaultTasks.slice(0, 5),\n  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },\n];\n\nstoriesOf('TaskList', module)\n  .addDecorator(story => &#x3C;div style={{ padding: '3rem' }}>{story()}&#x3C;/div>)\n  .add('default', () => &#x3C;PureTaskList tasks={defaultTasks} {...actions} />)\n  .add('withPinnedTasks', () => &#x3C;PureTaskList tasks={withPinnedTasks} {...actions} />)\n  .add('loading', () => &#x3C;PureTaskList loading tasks={[]} {...actions} />)\n  .add('empty', () => &#x3C;PureTaskList tasks={[]} {...actions} />);\n</code></pre>\n<video autoPlay muted playsInline loop>\n  <source\n    src=\"/finished-tasklist-states.mp4\"\n    type=\"video/mp4\"\n  />\n</video>\n<p>同样,我们需要使用<code>PureTaskList</code>在我们的Jest测试中: </p>\n<pre><code class=\"language-js\">import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { PureTaskList } from './TaskList';\nimport { withPinnedTasks } from './TaskList.stories';\n\nit('renders pinned tasks at the start of the list', () => {\n  const div = document.createElement('div');\n  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };\n  ReactDOM.render(&#x3C;PureTaskList tasks={withPinnedTasks} {...events} />, div);\n\n  // 我们期望首先渲染标题为“任务6（固定）”的任务，而不是最后\n  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value=\"Task 6 (pinned)\"]');\n  expect(lastTaskInput).not.toBe(null);\n\n  ReactDOM.unmountComponentAtNode(div);\n});\n</code></pre>",frontmatter:{title:"接连data",description:"了解如何将数据连接到UI组件",commit:"dd04879"},fields:{slug:"/docs/zh/data/",chapter:"data",framework:"docs",language:"zh"}},site:{siteMetadata:{title:"binstd-区块链云服务平台",toc:["get-started","simple-component","composite-component","data","screen","test","deploy","conclusion","contribute"],languages:["en","zh"],githubUrl:"https://github.com/hichroma/learnstorybook.com",codeGithubUrl:"https://github.com/hichroma/learnstorybook-code",siteUrl:"https://binstd.com"}},pages:{edges:[{node:{frontmatter:{tocTitle:"合成组件",title:"组装复合组件",description:"使用更简单的组件 组装复合组件"},fields:{slug:"/docs/zh/composite-component/",chapter:"composite-component"}}},{node:{frontmatter:{tocTitle:null,title:"总结",description:"把所有的知识汇总以下，学习更多的 storybook 技巧"},fields:{slug:"/docs/zh/conclusion/",chapter:"conclusion"}}},{node:{frontmatter:{tocTitle:null,title:"帮助我们",description:"帮助 我们与世界分享 Storybook "},fields:{slug:"/docs/zh/contribute/",chapter:"contribute"}}},{node:{frontmatter:{tocTitle:"Data",title:"接连data",description:"了解如何将数据连接到UI组件"},fields:{slug:"/docs/zh/data/",chapter:"data"}}},{node:{frontmatter:{tocTitle:"发布",title:"发布 Storybook",description:"使用 GitHub 和 Netlify 发布 Storybook网站 "},fields:{slug:"/docs/zh/deploy/",chapter:"deploy"}}},{node:{frontmatter:{tocTitle:"从头开始",title:"开始吧",description:"在你的开发环境下, 设置 React Storybook "},fields:{slug:"/docs/zh/get-started/",chapter:"get-started"}}},{node:{frontmatter:{tocTitle:"页面",title:"构建一个页面",description:"用组件构建一个页面"},fields:{slug:"/docs/zh/screen/",chapter:"screen"}}},{node:{frontmatter:{tocTitle:"简单 组件",title:"构建一个简单的组件",description:"单独构建一个简单的组件"},fields:{slug:"/docs/zh/simple-component/",chapter:"simple-component"}}},{node:{frontmatter:{tocTitle:null,title:"测试",description:"了解测试UI组件的方法"},fields:{slug:"/docs/zh/test/",chapter:"test"}}}]}},pathContext:{slug:"/docs/zh/data/",framework:"docs",language:"zh",chapter:"data"}}}});
//# sourceMappingURL=path---docs-zh-data-b3147743d54948039958.js.map