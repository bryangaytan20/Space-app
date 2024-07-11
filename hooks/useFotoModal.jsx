import { useContext } from "react"
import { GlobalContext } from "../src/context/GlobalContext"

 function useFotoModal (){

    const {state, dispatch} = useContext(GlobalContext);
    
    const abirModal = (foto) =>{
      
      dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: foto })}

    }

    const cerrarModal = () => {

      dispatch({ type: 'SET_FOTO_SELECCIONADA', payload: null })}

    }

    const fotoSeleccionada = state.fotoSeleccionada

    const estaAbiertoModal = state.modalAbierto

    return { fotoSeleccionada, estaAbiertoModal, abirModal, cerrarModal }

 }

 export default useFotoModal