import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {FormControl, InputLabel, Link, MenuItem, Select} from "@mui/material";
import {useTranslation} from "react-i18next";
import themeDark from "../themes/themeDark"
import {DarkMode, Info, LightMode, Translate} from "@mui/icons-material";
import Content from "./Content";
import {ProductsIcon} from "../components/ProductsIcon";
import {useDispatch, useSelector} from "react-redux";
import {dark, light, selectTheme} from "../store/reducer/themeReducer";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = React.useState('es');
    const themeUsed = useSelector(selectTheme);
    const dispatch = useDispatch();

    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value
        setLanguage(e.target.value);
        i18n.changeLanguage(languageValue);
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" className={open?"App-header-open":"App-header"} sx={{left:0,width: {xl: 65, lg: 65, sm: 65, xs: 56}}} open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem key={t('altLogo')} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Link color="inherit" href="#" underline="none" aria-label={t('home')}>
                                    <img src={"logo.svg"} alt={t('altLogo')} style={{width:24, height:24}} loading="lazy"/>
                                </Link>
                            </ListItemIcon>
                            <ListItemText primary={t('gnaestudios')} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={t('products')} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Link color="inherit" href="#products" underline="none" aria-label={t('products')}>
                                    <ProductsIcon data-testid="ProductsIcon" style={{width:24, height:24}} props={{
                                        ariaHidden : "true",
                                    }}/>
                                </Link>
                            </ListItemIcon>
                            <ListItemText primary={t('products')} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={t('about')} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >

                                <Link color="inherit" href="#about" underline="none" aria-label={t('about')}>
                                    <Info/>
                                </Link>


                            </ListItemIcon>
                            <ListItemText primary={t('about')} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={t('language')} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}

                                onClick={() => {
                                    if(!open) {
                                        let keys = Object.keys(i18n.options.resources);
                                        let i = 0;
                                        let goOn = true;
                                        for (; i < keys.length && goOn; i++) {
                                            let lang = keys[i];
                                            goOn = lang !== language;
                                        }
                                        let nextIndex = i % keys.length;
                                        setLanguage(keys[nextIndex]);
                                        i18n.changeLanguage(keys[nextIndex]);

                                    }
                                }}
                            >
                                <Translate/>
                            </ListItemIcon>
                            {open?<FormControl>
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
                            </FormControl>:null}
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={t('theme')} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                            onClick={() => {
                                if (themeUsed === themeDark) {
                                    dispatch(light());
                                } else {
                                    dispatch(dark());
                                }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {themeUsed === themeDark? <LightMode/>:<DarkMode/>}
                            </ListItemIcon>
                            <ListItemText primary={t('theme')} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Content/>
        </Box>
    );
}