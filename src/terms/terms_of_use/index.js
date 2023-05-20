import React from "react";


import {useDispatch, useSelector} from 'react-redux'
import {dark, light, selectTheme} from "../../store/reducer/themeReducer";
import {
    AppBar,
    Box,
    Container,
    Link,
    ThemeProvider,
    Typography
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {ArrowBack, DarkMode, LightMode} from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import {useTranslation} from "react-i18next";
import themeDark from "../../themes/themeDark";

function TermsOfUse() {
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
                            <Container>
                                <Typography variant="h3" align="center">TERMS OF USE</Typography>
                                <Typography variant="h6" align="center">Last updated May 3, 2023</Typography>
                                <Typography variant="h5" align="center">TABLE OF CONTENTS</Typography>
                                <ol>
                                    <li><Link href="#1" >{t('terms_use_t1')}</Link></li>
                                    <li><Link href="#2" >{t('terms_use_t2')}</Link></li>
                                    <li><Link href="#3" >{t('terms_use_t3')}</Link></li>
                                    <li><Link href="#4" >{t('terms_use_t4')}</Link></li>
                                    <li><Link href="#5" >{t('terms_use_t5')}</Link></li>
                                    <li><Link href="#6" >{t('terms_use_t6')}</Link></li>
                                    <li><Link href="#7" >{t('terms_use_t7')}</Link></li>
                                    <li><Link href="#8" >{t('terms_use_t8')}</Link></li>
                                    <li><Link href="#9" >{t('terms_use_t9')}</Link></li>
                                    <li><Link href="#10">{t('terms_use_t10')}</Link></li>
                                    <li><Link href="#11">{t('terms_use_t11')}</Link></li>
                                    <li><Link href="#12">{t('terms_use_t12')}</Link></li>
                                    <li><Link href="#13">{t('terms_use_t13')}</Link></li>
                                    <li><Link href="#14">{t('terms_use_t14')}</Link></li>
                                    <li><Link href="#15">{t('terms_use_t15')}</Link></li>
                                    <li><Link href="#16">{t('terms_use_t16')}</Link></li>
                                    <li><Link href="#17">{t('terms_use_t17')}</Link></li>
                                    <li><Link href="#18">{t('terms_use_t18')}</Link></li>
                                    <li><Link href="#19">{t('terms_use_t19')}</Link></li>
                                    <li><Link href="#20">{t('terms_use_t20')}</Link></li>
                                    <li><Link href="#21">{t('terms_use_t21')}</Link></li>
                                    <li><Link href="#22">{t('terms_use_t22')}</Link></li>
                                    <li><Link href="#23">{t('terms_use_t23')}</Link></li>
                                </ol>

                                <ol className={"list"}>
                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="1">{t('terms_use_t1')}</Typography>
                                    </li>
                                    <Typography align="justify" paragraph>{t('terms_of_use_p0')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p1')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p2')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p3')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="2">{t('terms_use_t2')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p4')}</Typography>


                                    <Typography align="justify" paragraph>{t('terms_of_use_p5')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p6')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="3">{t('terms_use_t3')}</Typography>
                                    </li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p7')}</Typography>
                                    <ol className={"normal"}>
                                        <li> all registration information you submit will be true, accurate, current,
                                            and complete;
                                        </li>
                                        <li> you will maintain the accuracy of such information and promptly update such
                                            registration information as necessary;
                                        </li>
                                        <li> you have the legal capacity and you agree to comply with these Terms of
                                            Use;
                                        </li>
                                        <li> you are not a minor in the jurisdiction in which you reside;</li>
                                        <li> you will not access the Site through automated or non-human means, whether
                                            through a bot, script, or otherwise;
                                        </li>
                                        <li> you will not use the Site for any illegal or unauthorized purpose; and</li>
                                        <li> your use of the Site will not violate any applicable law or regulation.
                                        </li>
                                    </ol>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p8')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="4">{t('terms_use_t4')}</Typography>
                                    </li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p9')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="5">{t('terms_use_t5')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p10')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p11')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p12')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p13')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p14')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p15')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p16')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p17')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p18')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p19')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p20')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p21')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p22')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p23')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p24')}</Typography>


                                    <Typography align="justify" paragraph>{t('terms_of_use_p25')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p26')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p27')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p28')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p29')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p30')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="6">{t('terms_use_t6')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p31')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p32')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p33')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p34')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p35')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p36')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p37')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p38')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p39')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p40')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p41')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p42')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="7">{t('terms_use_t7')}</Typography>
                                    </li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p43')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p44')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p45')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="8">{t('terms_use_t8')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p46')}</Typography>


                                    <Typography align="justify" paragraph>{t('terms_of_use_p47')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p48')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p49')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="9">{t('terms_use_t9')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p50')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="10">{t('terms_use_t10')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p51')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="11">{t('terms_use_t11')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p52')}</Typography>


                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="12">{t('terms_use_t12')}</Typography>
                                    </li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p53')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p54')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p55')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="13">{t('terms_use_t13')}</Typography>
                                    </li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p56')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p57')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="14">{t('terms_use_t14')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p58')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="15">{t('terms_use_t15')}</Typography>
                                    </li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p59')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="16">{t('terms_use_t16')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p60')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="17">{t('terms_use_t17')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p61')}</Typography>


                                    <Typography align="justify" paragraph>{t('terms_of_use_p62')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="18">{t('terms_use_t18')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p63')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="19">{t('terms_use_t19')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p64')}</Typography>

                                    <ol className={"normal"}>
                                        <li> use of the Site;

                                        </li>
                                        <li> breach of these Terms of Use;</li>
                                        <li> any breach of your representations and warranties set
                                            forth in these Terms of Use;
                                        </li>
                                        <li> your violation of the rights of a third party, including
                                            but not limited to intellectual property rights; or
                                        </li>
                                        <li> any overt harmful act toward any
                                            other user of the Site with whom you connected via the Site. Notwithstanding
                                            the
                                            foregoing,
                                            we reserve the right, at your expense, to assume the exclusive defense and
                                            control of any
                                            matter for which you are required to indemnify us, and you agree to
                                            cooperate,
                                            at your
                                            expense, with our defense of such claims. We will use reasonable efforts to
                                            notify you of
                                            any such claim, action, or proceeding which is subject to this
                                            indemnification
                                            upon becoming
                                            aware of it.
                                        </li>
                                    </ol>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="20">{t('terms_use_t20')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p65')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="21">ELECTRONIC
                                        COMMUNICATIONS,
                                        TRANSACTIONS, AND
                                        SIGNATURES</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p66')}</Typography>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p67')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="22">{t('terms_use_t22')}</Typography></li>

                                    <Typography align="justify" paragraph>{t('terms_of_use_p68')}</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="23">{t('terms_use_t23')}</Typography></li>
                                    <Typography align="justify" paragraph>{t('terms_of_use_p69')}</Typography>
                                    <Typography>hola@gnaestudios.com</Typography>
                                </ol>
                            </Container>
                        </section>
                    </main>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default TermsOfUse;
