import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import CampoBusqueda from "./components/CampoTexto"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/FigureEstilizada"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FondoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%,
    #154580 96.76%);
    width: 100%;
    min-height:100vh;
 `

const AppContainer = styled.div`
  width:1440px;
  max-width:100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ContenidoGaleria = styled.section`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
`


const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita
      })
    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.
          favorita
      }
    }))
  }

  return (
    <>
      <FondoGradiente>
        <GlobalStyle />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner backgroundImage={"../assets/banner.png"} texto={"La galería más completa de fotos del espacio"} />
              <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)} fotos={fotosDeGaleria} alAlternarFavorito={alAlternarFavorito} />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} alCerrar={() => setFotoSeleccionada(null)} alAlternarFavorito={alAlternarFavorito} />
      </FondoGradiente>
    </>
  )
}

export default App
