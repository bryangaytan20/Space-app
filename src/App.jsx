import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import CampoBusqueda from "./components/CampoTexto"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/FigureEstilizada"
import Galeria from "./components/Galeria"
import { useEffect, useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Cargando from "./components/Cargando"

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

  //const [estado, setEstado] = useState({});

  const [consulta, setConsulta] = useState('')

  const [fotosDeGaleria, setFotosDeGaleria] = useState([])
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
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }


  
  useEffect(() => {
    const getData = async () =>{
      const res = await fetch('http://localhost:3000/fotos')
      const data = await res.json()
      setFotosDeGaleria([...data])
    }
    setTimeout(()=>getData(),5000)
  }, [])




  return (
    <>
      <FondoGradiente>
        <GlobalStyle />
        <AppContainer>
          <Cabecera setConsulta={setConsulta} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner backgroundImage={"../assets/banner.png"} texto={"La galería más completa de fotos del espacio"} />
              {
                fotosDeGaleria.length == 0 ?
                  <Cargando></Cargando> :
                  <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                    fotos={fotosDeGaleria}
                    alAlternarFavorito={alAlternarFavorito}
                    consulta={consulta}
                  />
              }
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} alCerrar={() => setFotoSeleccionada(null)} alAlternarFavorito={alAlternarFavorito} />
      </FondoGradiente>
    </>
  )
}

export default App
