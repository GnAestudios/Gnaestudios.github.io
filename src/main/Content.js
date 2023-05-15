import React from "react";
import {
    Typography,
    Container,
    Grid,
    Link,
    Box,
    Stack,
} from "@mui/material";
import {
    Email,
} from "@mui/icons-material";


import {Fade, Slide} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";

import TimelineContent from "@mui/lab/TimelineContent";

import {ImageListItem} from '@mui/material';
import {Background} from "../components/Background";
import {CustomDivider} from "../components/Divider"
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {selectTheme} from "../store/reducer/themeReducer";


function Content() {
    const themeUsed = useSelector(selectTheme);
    const {t} = useTranslation();

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <main>
                <section>
                    <Fade in={true} timeout={1500}>
                        <Container>
                            <Background
                                style={{position: 'absolute', zIndex: -1, fill: themeUsed.palette.secondary.main}}/>
                            <Stack direction={{xs: 'column', sm: 'row'}}
                                   spacing={{xs: 1, sm: 2, md: 10}}>
                                <Stack direction='column'
                                       sx={{
                                           ml: {xl: '10vh', lg: '10vh', sm: '10vh', xs: '0'}
                                       }} spacing={{xs: 1, sm: 2, md: 4}}>
                                    <Typography variant="h3" align="left" gutterBottom

                                                style={{paddingTop: '5vh', marginBottom: '2vh'}}>
                                        {t('motto')}
                                    </Typography>
                                    <CustomDivider

                                        style={{
                                            marginTop: '1vh',
                                            width: 100,
                                            fill: themeUsed.palette.primary.main
                                        }}/>
                                    <Typography
                                        variant="h6"
                                        align="left"
                                        color="textSecondary"
                                        paragraph


                                    >
                                        {t('companyDescription')}
                                    </Typography>
                                </Stack>
                                <ImageListItem style={{width: '300%'}} sx={{display: {xl: 'block', xs: 'none'}}}>
                                    <img src={"mockup.png"} alt={t('altMockup')} loading="lazy"/>
                                </ImageListItem>
                            </Stack>
                        </Container>
                    </Fade>
                </section>
                <section id={"products"}>
                    <Fade in={true} timeout={1500}>

                        <Container maxWidth="md" sx={{mt: {xl: '15vh', xs: '5vh'},pl: {xs: 0},pr: {xs: 0}}}>
                            <Typography variant="h4" align="center">
                                {t('products')}
                            </Typography>
                            <Container align="center">
                                <CustomDivider
                                    style={{
                                        marginLeft: '6.5vh',
                                        marginTop: '2vh',
                                        width: 100,
                                        fill: themeUsed.palette.primary.main
                                    }}/>
                            </Container>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1550}>
                                            <Stack spacing={2}>
                                                <Container style={{
                                                    marginRight: 0,
                                                    paddingRight: 0,
                                                    paddingLeft: 0
                                                }} maxWidth={false} align="right"
                                                           sx={{
                                                               mt: 0,
                                                               width: {xl: '25%', lg: '25%', sm: '25%', xs: '40%'}
                                                           }}>
                                                    <img src={"/apps/digiley.svg"} alt={t('digiley_alt')}
                                                         loading="lazy"/>
                                                </Container>
                                                <Typography sx={{
                                                    mt: 0,
                                                    mr: {xl: 25, lg: 25, sm: 25, xs: 0},
                                                    mb: {xl: 35, lg: 35, sm: 35, xs: 0}
                                                }}>2023</Typography>
                                            </Stack>
                                        </Slide>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1650}>
                                        <TimelineContent>{t('digiley')}</TimelineContent>
                                    </Slide>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1700}>
                                            <Stack spacing={2}>
                                                <Container style={{
                                                    marginRight: 0,
                                                    paddingRight: 0,
                                                    paddingLeft: 0
                                                }} maxWidth={false} align="right"
                                                           sx={{
                                                               mt: 0,
                                                               width: {xl: '25%', lg: '25%', sm: '25%', xs: '40%'}
                                                           }}>
                                                    <img src={"/apps/lopj.svg"} alt={t('lopj_alt')}
                                                         loading="lazy"/>
                                                </Container>
                                                <Typography sx={{
                                                    mt: 0,
                                                    mr: {xl: 25, lg: 25, sm: 25, xs: 0},
                                                    mb: {xl: 35, lg: 35, sm: 35, xs: 0}
                                                }}>2018</Typography>
                                            </Stack>
                                        </Slide>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1750}>
                                        <TimelineContent>{t('lopj')}</TimelineContent>
                                    </Slide>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1950}>
                                            <Stack spacing={2}>
                                                <Container style={{
                                                    marginRight: 0,
                                                    paddingRight: 0,
                                                    paddingLeft: 0
                                                }} maxWidth={false} align="right"
                                                           sx={{
                                                               mt: 0,
                                                               width: {xl: '25%', lg: '25%', sm: '25%', xs: '40%'}
                                                           }}>
                                                    <img src={"/apps/penal.svg"} alt={t('penal_alt')}
                                                         loading="lazy"/>
                                                </Container>
                                                <Typography  sx={{
                                                    mt: 0,
                                                    mr: {xl: 25, lg: 25, sm: 25, xs: 0},
                                                    mb: {xl: 35, lg: 35, sm: 35, xs: 0}
                                                }}>2017</Typography>
                                            </Stack>
                                        </Slide>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={2000}>
                                        <TimelineContent>{t('penal')}</TimelineContent>
                                    </Slide>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={2100}>
                                            <Stack spacing={2}>
                                                <Container style={{
                                                    marginRight: 0,
                                                    paddingRight: 0,
                                                    paddingLeft: 0
                                                }} maxWidth={false} align="right"
                                                           sx={{
                                                               mt: 0,
                                                               width: {xl: '25%', lg: '25%', sm: '25%', xs: '40%'}
                                                           }}>
                                                    <img src={"/apps/civil.svg"} alt={t('civil_alt')}
                                                         loading="lazy"/>
                                                </Container>
                                                <Typography sx={{
                                                    mt: 0,
                                                    mr: {xl: 25, lg: 25, sm: 25, xs: 0},
                                                    mb: {xl: 35, lg: 35, sm: 35, xs: 0}
                                                }}>2017</Typography>
                                            </Stack>
                                        </Slide>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={2150}>
                                        <TimelineContent>{t('civil')}</TimelineContent>
                                    </Slide>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={2250}>
                                            <Stack spacing={2}>
                                                <Container style={{
                                                    marginRight: 0,
                                                    paddingRight: 0,
                                                    paddingLeft: 0
                                                }} maxWidth={false} align="right"
                                                           sx={{
                                                               mt: 0,
                                                               width: {xl: '25%', lg: '25%', sm: '25%', xs: '40%'}
                                                           }}>
                                                    <img src={"/apps/cons.svg"} alt={t('cons_alt')}
                                                         loading="lazy"/>
                                                </Container>
                                                <Typography sx={{
                                                    mt: 0,
                                                    mr: {xl: 25, lg: 25, sm: 25, xs: 0},
                                                    mb: {xl: 35, lg: 35, sm: 35, xs: 0}
                                                }}>2017</Typography>
                                            </Stack>
                                        </Slide>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={2300}>
                                        <TimelineContent>{t('cons')}</TimelineContent>
                                    </Slide>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="text.secondary">
                                        <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={2400}>
                                            <Stack spacing={2}>
                                                <Container style={{
                                                    marginRight: 0,
                                                    paddingRight: 0,
                                                    paddingLeft: 0
                                                }} maxWidth={false} align="right"
                                                           sx={{
                                                               mt: 0,
                                                               width: {xl: '25%', lg: '25%', sm: '25%', xs: '40%'}
                                                           }}>
                                                    <img src={"/apps/lecrim.svg"}
                                                         alt={t('lecrim_alt')}
                                                         loading="lazy"/>
                                                </Container>
                                                <Typography sx={{
                                                    mt: 0,
                                                    mr: {xl: 25, lg: 25, sm: 25, xs: 0},
                                                    mb: {xl: 35, lg: 35, sm: 35, xs: 0}
                                                }}>2017</Typography>
                                            </Stack>
                                        </Slide>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={2450}>
                                        <TimelineContent>{t('lecrim')}</TimelineContent>
                                    </Slide>
                                </TimelineItem>
                            </Timeline>
                        </Container>
                    </Fade>
                </section>
                <section id={"about"}>
                    <Fade in={true} timeout={1500}>
                        <Container maxWidth="md">
                            <Typography variant="h4" align="center">
                                {t('about')}
                            </Typography>
                            <Container align="center">
                                <CustomDivider
                                    style={{
                                        marginLeft: '6.5vh',
                                        marginTop: '2vh',
                                        width: 100,
                                        fill: themeUsed.palette.primary.main
                                    }}/>
                            </Container>
                            <Typography paragraph>
                                {t('p1About')}
                            </Typography>
                            <Typography paragraph>
                                {t('p2About')}
                            </Typography>
                        </Container>
                    </Fade>
                </section>
            </main>
            <footer>
                <Container maxWidth="md" sx={{mb: 10, mt: 10}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                {t('contact')}
                            </Typography>
                            <Stack direction='row' spacing={2}>
                                <Email/>
                                <Typography variant="body1">info@gnaestudios.com</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                {t('terms')}
                            </Typography>
                            <Stack direction='column' spacing={2}>
                                <Link href="/privacy_policy">{t('privacy')}</Link>
                                <Link href="/terms_and_conditions">{t('termsUse')}</Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </Box>
    )
}

export default Content;
