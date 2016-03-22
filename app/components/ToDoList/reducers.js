import { VisibilityFilters } from './actions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todo: []
}

function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, 
            {
                todos: [
                    ...state.todos, 
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
        case COMPLETE_TODO:
            return Object.assign({}, state, 
            {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, state, 
                        {
                            completed: true
                        })
                    }
                    return todo;   
                })
            });
        default:
            return state;
    }
}

function toDoApp(state = initialState, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, 
            {
                visibilityFilter: action.filter
            });
        case ADD_TODO:
        case COMPLETE_TODO:
            return Object.assign({}, state, 
            {
                todos: todos(state.todos, action)
            });
        default:
            return state;
    }
}