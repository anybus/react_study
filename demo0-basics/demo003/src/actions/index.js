let nextTodoId = 0;

export const addTodo = text => ({
    type: 'add_todo',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'set_visibility_filter',
    filter
});

export const toggleTodo = id => ({
    type: 'toggle_todo',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}