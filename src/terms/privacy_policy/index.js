import React from "react";


import {useDispatch, useSelector} from 'react-redux'
import {dark, light, selectTheme} from "../../store/reducer/themeReducer";
import {
    AppBar,
    Box,
    Container,
    Link,
    Typography,
    ThemeProvider,
    InputLabel,
    Select,
    MenuItem,
    FormControl
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {ArrowBack, DarkMode, LightMode} from "@mui/icons-material";
import {useTranslation} from "react-i18next";
import themeDark from "../../themes/themeDark";
import CssBaseline from "@mui/material/CssBaseline";

function PrivacyPolicy() {
    const themeUsed = useSelector(selectTheme);
    const [language, setLanguage] = React.useState('es');
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();

    const changeLanguageHandler = (e) =>{
        const languageValue = e.target.value
        setLanguage(e.target.value);
        i18n.changeLanguage(languageValue);
    }
    return (
        <ThemeProvider theme={themeUsed}>
            <CssBaseline/>

            <Container>
                <AppBar position="fixed" className={"App-header"} sx={{
                    left: 0,
                    width: {xl: 65, lg: 65, sm: 65, xs: 56}
                }}>
                    <Toolbar>
                        <IconButton color="inherit"
                                    aria-label=""
                                    edge="start"
                                    sx={{
                                        marginRight: 5,
                                    }}
                        >
                            <Link href="/" underline="none" color="inherit"><ArrowBack/></Link>

                        </IconButton>
                    </Toolbar>
                    <IconButton color="inherit"
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'initial',
                                    px: 2.5,
                                }}
                                onClick={() =>{
                                    if (themeUsed === themeDark) {
                                        dispatch(light());
                                    } else {
                                        dispatch(dark());
                                    }
                                }}
                    >
                        {themeUsed === themeDark ? <LightMode color="inherit"/> : <DarkMode color="inherit"/>}

                    </IconButton>
                </AppBar>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <main>
                        <section>
                            <FormControl>
                                <InputLabel id="language_input">{t('language')}</InputLabel>
                                <Select
                                    labelId="language_input_label"
                                    id="language_input_label_select"
                                    value={language}
                                    onChange={changeLanguageHandler}
                                    autoWidth
                                    label={t('language')}
                                >
                                    <MenuItem value={"es"}>Español</MenuItem>
                                    <MenuItem value={"en"}>English</MenuItem>
                                </Select>
                            </FormControl>
                            <Container>
                                <Typography variant="h3" align="center">PRIVACY NOTICE</Typography>
                                <Typography variant="h6" align="center">Last updated May 3, 2023</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p0')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p1')}</Typography>

                                <Typography variant="h3" align="center">SUMMARY OF KEY POINTS</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p2')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p3')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p4')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p5')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p6')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p7')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p8')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p9')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p10')}</Typography>

                                <Typography align="justify" paragraph>{t('privacy_policy_p11')}</Typography>
                                <Typography variant="h5" align="center">TABLE OF CONTENTS</Typography>

                                <ol>
                                    <li><Link href="#1">{t('terms_policy_t1')}</Link></li>
                                    <li><Link href="#2">{t('terms_policy_t2')}</Link></li>
                                    <li><Link href="#3">{t('terms_policy_t3')}</Link></li>
                                    <li><Link href="#4">{t('terms_policy_t4')}</Link></li>
                                    <li><Link href="#5">{t('terms_policy_t5')}</Link></li>
                                    <li><Link href="#6">{t('terms_policy_t6')}</Link></li>
                                    <li><Link href="#7">{t('terms_policy_t7')}</Link></li>
                                    <li><Link href="#8">{t('terms_policy_t8')}</Link></li>
                                    <li><Link href="#9">{t('terms_policy_t9')}</Link></li>
                                    <li><Link href="#10">{t('terms_policy_t10')}</Link></li>
                                    <li><Link href="#11">{t('terms_policy_t11')}</Link></li>
                                    <li><Link href="#12">{t('terms_policy_t12')}</Link></li>
                                    <li><Link href="#13">{t('terms_policy_t13')}</Link></li>
                                    <li><Link href="#14">{t('terms_policy_t14')}</Link></li>
                                </ol>

                                <ol className={"list"}>
                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="1">{t('terms_policy_t1')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p12')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p13')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p14')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p15')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p16')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p17')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p18')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p19')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p20')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="2">{t('terms_policy_t2')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p21')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p22')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="3">WHEN AND WITH WHOM DO
                                            WE
                                            SHARE YOUR PERSONAL INFORMATION?</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p23')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p24')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p25')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p26')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p27')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="4">{t('terms_policy_t4')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p28')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p29')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="5">{t('terms_policy_t5')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p30')}</Typography>


                                    <Typography align="justify" paragraph>{t('privacy_policy_p31')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p32')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="6">{t('terms_policy_t6')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p33')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p34')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p35')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p36')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="7">{t('terms_policy_t7')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p37')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p38')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p39')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="8">{t('terms_policy_t8')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p40')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p41')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="9">{t('terms_policy_t9')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p42')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p43')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p44')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p45')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p46')}</Typography>


                                    <Typography align="justify" paragraph>{t('privacy_policy_p47')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p48')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p49')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="10">{t('terms_policy_t10')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p50')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="11">{t('terms_policy_t11')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p51')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p52')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p53')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="12">{t('terms_policy_t12')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p54')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p55')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="13">{t('terms_policy_t13')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p56')}</Typography>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p57')}</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="14">{t('terms_policy_t14')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('privacy_policy_p58')}</Typography>

                                </ol>
                            </Container>
                        </section>
                    </main>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default PrivacyPolicy;
