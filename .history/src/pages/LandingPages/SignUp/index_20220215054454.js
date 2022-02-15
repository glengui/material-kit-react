/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//  import MuiLink from "@mui/material/Link";

// @mui icons
/* import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google"; */

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//  import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/castrol/BG.png";
// import { green } from "@mui/material/colors";

function FormSimple() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <>
      <DefaultNavbar routes={routes} primary />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <Container>
                <Grid
                  container
                  item
                  justifyContent="center"
                  xs={10}
                  lg={7}
                  mx="auto"
                  textAlign="center"
                >
                  <MKBox
                    variant="gradient"
                    bgColor="success"
                    borderRadius="lg"
                    coloredShadow="primary"
                    mx={2}
                    mt={-3}
                    p={2}
                    mb={1}
                    textAlign="center"
                  >
                    <MKTypography variant="h3" mb={2} color="white">
                      Registro
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
                  <MKBox width="100%" component="form" method="post" autocomplete="off">
                    <MKBox p={3}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <MKInput variant="standard" label="Nombre" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <MKInput variant="standard" label="Apellido" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                          <MKInput
                            variant="standard"
                            type="email"
                            label="Correo Electronico"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <MKInput variant="standard" label="CUIT" fullWidth />
                        </Grid>
                        <Grid item xs={12} alignItems="center" ml={-1}>
                          <Switch checked={checked} onChange={handleChecked} />
                          <MKTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                            ml={-1}
                            sx={{ cursor: "pointer", userSelect: "none" }}
                            onClick={handleChecked}
                          >
                            &nbsp;&nbsp;He leido y acepto los&nbsp;
                          </MKTypography>
                          <MKTypography
                            component="a"
                            href="#"
                            variant="button"
                            fontWeight="regular"
                            color="primary"
                          >
                            Terminos y condiciones
                          </MKTypography>
                        </Grid>
                      </Grid>
                      <Grid container item justifyContent="center" xs={12} my={2}>
                        <MKButton type="submit" variant="gradient" color="primary" fullWidth>
                          Registrarse
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Container>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default FormSimple;
