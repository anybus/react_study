学习了Redux的基本使用
自己总结了以下redux的过程

使用函数createStore创建store数据点。
创建Reducer。它要改变的组件，它获取state和action，生成新的state。
用subscribe监听每次修改情况。
dispatch执行，reducer(currentState,action)处理当前dispatch后的传入的action.type并返回给currentState处理后的state，
通过currentListeners.forEach(v=>v())执行监听函数，并最后返回当前 action状态。