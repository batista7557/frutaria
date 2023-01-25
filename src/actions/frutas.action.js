import { actionTypes } from '../constants/frutas'

const actions = {
    adicionar: fruta => ({
        type: actionTypes.ADICIONAR_FRUTA,
        payload: fruta
    }),
    remover: fruta => ({
        type: actionTypes.REMOVER_FRUTA,
        payload: fruta
    })
}

export { actions }