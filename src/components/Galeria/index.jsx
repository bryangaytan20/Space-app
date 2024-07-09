import Titulo from "../Titulo"
import Tag from "./Tags"
import Populares from "./Populares"
import styled from "styled-components"

const GaleriaContainer = styled.div`
    display: flex;

`

const SeccionFluida = styled.section`
    flex-grow:1;
`


const Galeria = ({fotos = []}) => {
    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    {fotos.map(foto=>{
                        return <p key={foto.id}>{foto.path}</p>
                    })}
                </SeccionFluida>
                <Populares/>
            </GaleriaContainer>
        </>

    )
}

export default Galeria