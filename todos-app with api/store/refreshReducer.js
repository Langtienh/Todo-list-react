const init = {
    state: false,
    counter: 0
};

const refreshReducer = (state = init, action) => {
    switch (action.type) {
        case "refresh":
            return {
                ...state,
                state: !state.state
            };
        case 'add':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'sub':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'set':
            return {
                ...state,
                counter: action.counter
            };

        default:
            return state;
    }
};

export default refreshReducer;
