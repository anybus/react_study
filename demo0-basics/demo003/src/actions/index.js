let nextTodoId = 0

function addTodo(text) {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text
    }
}

function setVisibilityFilter(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}


function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}


const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export {addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters}