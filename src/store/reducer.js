//Component reducer

// initial state of the app
const dataInicial = {
    user:'',
    correo:'',
};

const OBTENER_NOMBRE = 'OBTENER_NOMBRE'
const OBTENER_EMAIL = 'OBTENER_EMAIL'

//it returns the new state
const useReducer=(state = dataInicial, action)=>{
   switch(action.type){
        case'AGREGAR_NOMBRE':
            console.log(action.nombre);
            return {...state, user:action.nombre}
        case 'AGREGAR_EMAIL':

            console.log(action.correo)
            return {...state, correo:action.correo}
        default:
            return state;
   }
    
    
}

export default useReducer;
