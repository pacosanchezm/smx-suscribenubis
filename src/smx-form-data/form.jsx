import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";

import 'bootstrap/dist/css/bootstrap.min.css'

/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input, Checkbox, Link } from "@theme-ui/components"
import { Container, Col, Row } from 'react-bootstrap'

 import Dropbox from "react-select"
// import {filtro2} from "./select"



let App

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------


const DropboxFiltro1= {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? null : null
  }),
  control: (base, state) => ({
    ...base,
    background: "lightgrey",
    fontFamily: "Arial",
    fontSize: 12
  }),
  menu: base => ({
    ...base,
    fontFamily: "Arial"
  }),

  singleValue: base => ({
    ...base,
    color: "slategrey"
  }),

  valueContainer: (base, state) => ({
    ...base,
    background: "lightgrey",
    color: "red"
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "lightYellow",
    maxWidth: "100px"
  })
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------





const Body = props => {
  const Estilo = useThemeUI().theme.styles
  const [Loading, setLoading] = props.useContextLocal.Loading.DataMain
  const [LoadingSecc, setLoadingSecc] = props.useContextLocal.Loading.DataMain

  const [Registro, setRegistro] = props.useContext.Registro

  const Images = props.useContext.Images

  const [Detalle, setDetalle] = props.useContext.Detalle;
  const [Editado, setEditado] = props.useContext.Editado;
  const [Aceptado, setAceptado] = props.useContext.Aceptado;

  const {useChangeArray, useChangeBooleanArray, useChangeBoolean} = props.useAcciones



// ----------------------------------

useEffect(() => {
 // props.useAcciones.getPage({id:props.pageid})
}, [])




const ColorBoton = function(props) {
  if(Detalle.Nombre && Detalle.Telefono && Detalle.Email){

    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
        if(Aceptado){
          return "#B7CE3F"
        }
      } 
    }    
  }
};

const EnableBoton = function(props) {

  // if(LoadingSecc) {return false}

  if(Detalle.Nombre && Detalle.Telefono && Detalle.Email){
    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
          if(Aceptado){
            return false
          }

      } 
    }      
  } 

  return true
  
};


const ModuloSimple  = () => {
  // console.log({Images})
   return (
     <div>
       <Flex sx={{ width: "100%" }}>
         <Box
           //bg="primary"
           sx={{
             fontWeight: "normal",
             fontSize: 1,
             color: "text",
             fontFamily: "body",
             width: "100%"
           }}
         >
 

          <Flex sx={{ width: "100%" }}>
              <Row>
                <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Recibimos tus datos, en breve nos comunicaremos contigo. ??Gracias por contactarnos!"}</Text>
              </Row>
          </Flex>

          <Box css={{ height: 21 }} />

          <Row>
            <Text sx={Estilo.msecc2}>{"Nobis"}</Text>
            <Text sx={Estilo.msecc1}>{"Juntos vamos a lograr tus objetivos"}</Text>

          </Row>












         </Box>
       </Flex>
     </div>
   )
 }
 
 // ----------------------------------
 


 const ModuloEdit  = () => {
  //console.log(props)
    return (


    <Container 
      style={{ maxWidth: "987px"}}
    >


    <Container fluid>


    <Image sx={{ height: 222,  }} src="https://nobis.mx/wp-content/uploads/2022/03/home-page-imagenes-nuevas-edicioncvsdjda-1-1536x864.jpg"/>



      <Row>
      <Col xs={2}> </Col>

        <Col xs={8}> <Text sx={Estilo.p2s} style={{color: "gray"}}>{"??Te gustar??a recibir sin costo y sin ning??n compromiso tu sesi??n de consultor??a con unos de nuestros expertos fiscalistas?"}</Text></Col>

                {/* <Col xs={2}><Image src="https://smxblogs.com/empresando/wp-content/empresando/red/whatslogo1.png"/> </Col>
                <Col xs={2}> </Col> */}

      </Row>
          <Row>
        <Text sx={Estilo.msecc2}>{"Reg??strate y conoce c??mo podemos ayudarte"}</Text>
      </Row>
      <Box css={{ height: 21 }} />



      <Container fluid>


        <Row>
          {/* <Col xs={4}><Image src="https://smxblogs.com/empresando/wp-content/empresando/red/his1.jpg"/> </Col>
          <Col xs={4}><Image src="https://smxblogs.com/empresando/wp-content/empresando/red/info1.jpg"/> </Col>
          <Col xs={4}><Image src="https://smxblogs.com/empresando/wp-content/empresando/red/his2.jpg"/> </Col> */}

        

        </Row>

      </Container>

      <Box css={{ height: 21 }} />



      <Row>
        <Text sx={Estilo.msecc2}>{"??Hagamos equipo para lograr mejores resultados!"}</Text>
      </Row>
    
    
    </Container>





      <Box sx={{ height: 13,  }} />

      <Row>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Tus datos de contacto"}</Text>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Nombre completo</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Nombre", setDetalle)}/> </Col>
        </Row>

        {/* <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Apellidos</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Apellido", setDetalle)}/> </Col>
        </Row> */}

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Tel??fono</Text> <Text sx={Estilo.d2s} >(Whatsapp)</Text>  </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Telefono", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Email</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Email", setDetalle)}/> </Col>
        </Row>



        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Estado</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Categoria"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.Estado, label: Detalle.Estado}}
              options={props.useContext.Estados[0]}
              onChange={async e => { setDetalle({ ...Detalle, "Estado": e.value }) }} 
            />
          </Col>
        </Row>










      </Container>



{/* 

      <Box sx={{ height: 13,  }} />

      <Row>
        <Col xs={9} style={{textAlign: "left"}}>
          <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Etapa de tu emprendimiento"}</Text> <Text sx={Estilo.d2s} >(opcional)</Text>
        </Col>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia1", setDetalle)}
          >
            <Row>
                <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia1}/> </Col>
               <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s} >Estoy desarrollando la idea de negocio</Text> </Col>
            </Row>
          </Button>
        </Row>



        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia3", setDetalle)}
          >
            <Row>
            <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia3}/> </Col>
              <Col xs={8} style={{textAlign: "left"}} > <Text sx={Estilo.d2s}>En operaci??n (ya vendo productos y/o servicios)</Text> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "Referencia4", setDetalle)}
          >
            <Row>
            <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.Referencia4}/> </Col>
              <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s}>No tengo una idea concreta</Text> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Row>
            <Col xs={3} style={{textAlign: "left", paddingLeft: "50px"}}> <Text sx={Estilo.d2s}>Otro</Text> </Col>
            <Col xs={8} style={{textAlign: "left"}}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Referencia5", setDetalle)}/> </Col>
          </Row>
        </Row>

      </Container> */}

      <Box sx={{ height: 13,  }} />




      <Row>
        <Col xs={9} style={{textAlign: "left"}}>
          <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Datos de tu empresa"}</Text> <Text sx={Estilo.d2s} >(opcional)</Text>
        </Col>

      </Row>



      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Nombre</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Titulo", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Sitio Web / Redes</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Web", setDetalle)}/> </Col>
        </Row>


        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Empleados</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Categoria"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.Empleados, label: Detalle.Empleados}}
              options={props.useContext.Empleados[0]}
              onChange={async e => { setDetalle({ ...Detalle, "Empleados": e.value }) }} 
            />
          </Col>
        </Row>


      </Container>





      <Box sx={{ height: 13,  }} />

























      <Col xs={9} style={{textAlign: "left"}}>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Cu??ntanos sobre ti"}</Text> <Text sx={Estilo.d2s} >(opcional)</Text>
      </Col>





      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

<Col xs={9} style={{textAlign: "left"}}>

<Text sx={{...Estilo.d2s, textAlign: "left"}} >(si tienes alguna pregunta para el experto la puedes escribir aqu??)</Text>
</Col>




        <Row style={{marginBottom: "10px"}}>

          <Col xs={12}> 
            <Textarea
              // sx={Estilo.input1}
              {...useChangeArray(Detalle, "Descripcion", setDetalle)}
              rows={5}
            />          
          </Col>
        </Row>

      </Container>

      <Box css={{ height: 21 }} />


      <Container fluid>
        <Row style={{marginBottom: "10px"}}>
        
          <Col xs={3} > 
            <Button
                sx={{width: "100%", bg: "transparent"}}
                {...useChangeBoolean(Aceptado, setAceptado)}
            >
             <Checkbox checked={Aceptado} />


             
            </Button>
          </Col>

          <Col xs={8} style={{textAlign: "left"}}> 
            <Text pt={"3px"} sx={Estilo.d2s}>Acepto el </Text>
            <Link sx={Estilo.h3}  href='https://nobis.mx/aviso-de-privacidad' target='_blank'>
              {" Aviso de Privacidad"}
            </Link>
          </Col>

        </Row>

      </Container>


      <Box css={{ height: 8 }} />


      <Container fluid 
      >
        <Row style={{marginBottom: "10px"}}>
        <Col xs={2}/> 

          <Col xs={8}> 
            <Button sx={{ width: "100%", height: "34px" }}
              width={1}
              bg={ColorBoton()}
              disabled={EnableBoton()}
              onClick={async () => {
                setLoadingSecc(true)
                  await props.useAcciones.InfoAdd()
                setLoadingSecc(false)
              }}
            >
              <Text sx={Estilo.mbtn1}>
                Registrarme
                {LoadingSecc ? <Spinner size={17} ml={0} /> : <div/>}
              </Text>

            </Button>
          </Col>

        </Row>

      </Container>

      <Box css={{ height: 34 }} />


</Container>


    )
  }




 
 try {

  return (
    <div>
      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>
          {(props.CompStatus.form()===1) ? ModuloEdit() : <div/>}
          {(props.CompStatus.form()===2) ? ModuloSimple() : <div/>}

          </div>
      }

    </div>
  )
  
} catch (e) {
  console.error(e);
}
}

// ---------------------------------------------------------------------
// -----------------------------------------------------------------------

export default (App = props => {
return (
  <Row className="justify-content-md-center">
    <Body {...props} />
  </Row>

);
});

// -----------------------------------------------------------------------


