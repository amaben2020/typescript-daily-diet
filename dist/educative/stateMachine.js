"use strict";
//@ts-nocheck
function reducer(prevState, action) {
    switch (prevState.type) {
        case 'loading':
            switch (action.type) {
                case 'dataFetchingSucceeded':
                    return { type: 'withData', data: action.data };
                case 'dataFetchingCancelled':
                    return { type: 'empty' };
                case 'dataFetchingFailed':
                    return { type: 'error', errorMessage: action.errorMessage };
                case 'dataRequested':
                    return prevState;
            }
        case 'empty':
        case 'error':
        case 'withData':
            switch (action.type) {
                case 'dataRequested':
                    return { type: 'loading' };
                case 'dataFetchingCancelled':
                case 'dataFetchingFailed':
                case 'dataFetchingSucceeded':
                    return prevState;
            }
    }
}
//# sourceMappingURL=stateMachine.js.map