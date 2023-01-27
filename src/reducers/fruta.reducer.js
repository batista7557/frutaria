import { actionTypes } from "../constants/frutas"

const INITIAL_STATE = {
    frutas: []
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, { ...action.payload }] }
        case actionTypes.REMOVER_FRUTA:
            return { frutas: state.frutas.filter(x => x.id !== action.payload.id) }
        default:
            return state
    }
}

export { reducers }