本示例结构：
1.入口 index
2.组件 App

cnpm install -g create-react-app

create-react-app my-app

cd my-app/

npm start


入口函数：
调用ReactDOM来做渲染
ReactDOM.render(<App />, document.getElementById('root'));

App组件：
自定义组件继承Component
render() {
    return (
        JSX语言书写组件
    );
}