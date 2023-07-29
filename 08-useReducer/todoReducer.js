export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add':
            //throw new Error('Action.type = add no esta implementada');
            return [...initialState, action.payload]
            break;
        default:
            return initialState;
            break;
    }

}