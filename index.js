const redux = require('redux')
const reduxLogger = require('redux-logger');

const createStore  = redux.legacy_createStore; 
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

//Creating action
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First Redux action'
    }
}

function buyIcecream(){
    return{
        type:BUY_ICE_CREAM,
        info:'Second Redux action'
    }
}

//creating Reducers
// const initialState = {
//     numofCakes :10,
//     numoficeCreams:20
// }

const initialCakeState = {
    numofCakes :10
}

const initialicecreamState = {
    numoficeCreams:20
}

// const reducer=(state = initialState,action)=>{
//     switch(action.type)
//     {
//         case BUY_CAKE:return{
//             ...state,
//             numofCakes : state.numofCakes-1
//         }
//         case BUY_ICE_CREAM:return{
//             ...state,
//             numoficeCreams : state.numoficeCreams-1
//         }
//         default: return state;
//     }

// }

const cakeReducer=(state = initialCakeState,action)=>{
    switch(action.type)
    {
        case BUY_CAKE:return{
            ...state,
            numofCakes : state.numofCakes-1
        }
        default: return state;
    }

}

const iceCreamReducer=(state = initialicecreamState,action)=>{
    switch(action.type)
    {
        case BUY_ICE_CREAM:return{
            ...state,
            numoficeCreams : state.numoficeCreams-1
        }
        default: return state;
    }

}

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream :iceCreamReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));
//Allows access to state via getState()
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()


