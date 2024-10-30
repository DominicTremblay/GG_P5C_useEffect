export const CHARGER_DONNEES = 'CHARGER_DONNEES'
export const CHANGER_STATUT_LOADING = 'CHANGER_STATUT_LOADING'

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case CHARGER_DONNEES:
      return {
        ...state,
        films: action.payload,
      }
    case CHANGER_STATUT_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    default:
      throw new Error(`Action: ${action.type} inconnue`)
  }
}
export default dataReducer
