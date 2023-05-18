import React from "react";


import {useDispatch, useSelector} from 'react-redux'
import {dark, light, selectTheme} from "../../store/reducer/themeReducer";
import {AppBar, Box, Container, Link, Typography, ThemeProvider} from "@mui/material";
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

    const changeLanguageHandler = (e) => {
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
                                onClick={() => {
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
                                <Typography variant="h3" align="center">PRIVACY NOTICE</Typography>
                                <Typography variant="h6" align="center">Last updated May 3, 2023</Typography>

                                <Typography align="justify" paragraph>This privacy notice for ("Company," "we," "us," or
                                    "our"), describes how and why we might collect, store, use, and/or share ("process")
                                    your information when you use our services ("Services"), such as when
                                    you:</Typography>

                                <Typography align="justify" paragraph>Questions or concerns? Reading this privacy notice
                                    will help you understand your privacy rights and choices. If you do not agree with
                                    our
                                    policies and practices, please do not use our Services. If you still have any
                                    questions
                                    or concerns, please contact us at .</Typography>

                                <Typography variant="h3" align="center">SUMMARY OF KEY POINTS</Typography>

                                <Typography align="justify" paragraph>This summary provides key points from our privacy
                                    notice, but you can find out more details about any of these topics by clicking the
                                    link
                                    following each key point or by using our table of contents below to find the section
                                    you
                                    are looking for.</Typography>

                                <Typography align="justify" paragraph>What personal information do we process? When you
                                    visit, use, or navigate our Services, we may process personal information depending
                                    on
                                    how you interact with</Typography>

                                <Typography align="justify" paragraph>and the Services, the choices you make, and the
                                    products and features you use. Learn more about personal information you disclose to
                                    us.</Typography>

                                <Typography align="justify" paragraph>Do we process any sensitive personal information?
                                    We
                                    do not process sensitive personal information.</Typography>

                                <Typography align="justify" paragraph>Do we receive any information from third parties?
                                    We
                                    may receive information from public databases, marketing partners, social media
                                    platforms, and other outside sources. Learn more about information collected from
                                    other
                                    sources.</Typography>

                                <Typography align="justify" paragraph>How do we process your information? We process
                                    your
                                    information to provide, improve, and administer our Services, communicate with you,
                                    for
                                    security and fraud prevention, and to comply with law. We may also process your
                                    information for other purposes with your consent. We process your information only
                                    when
                                    we have a valid legal reason to do so. Learn more about how we process your
                                    information.</Typography>

                                <Typography align="justify" paragraph>In what situations and with which parties do we
                                    share
                                    personal information? We may share information in specific situations and with
                                    specific
                                    third parties. Learn more about when and with whom we share your personal
                                    information.</Typography>

                                <Typography align="justify" paragraph>What are your rights? Depending on where you are
                                    located geographically, the applicable privacy law may mean you have certain rights
                                    regarding your personal information. Learn more about your privacy
                                    rights.</Typography>

                                <Typography align="justify" paragraph>How do you exercise your rights? The easiest way
                                    to
                                    exercise your rights is by submitting a data subject access request, or by
                                    contacting
                                    us. We will consider and act upon any request in accordance with applicable data
                                    protection laws.</Typography>

                                <Typography align="justify" paragraph>Want to learn more about what does with any
                                    information we collect? Review the privacy notice in full.</Typography>
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

                                    <Typography align="justify" paragraph>Personal information you disclose to
                                        us</Typography>

                                    <Typography align="justify" paragraph>In Short: We collect personal information that
                                        you
                                        provide to us.</Typography>

                                    <Typography align="justify" paragraph>We collect personal information that you
                                        voluntarily provide to us when you register on the Services, express an interest
                                        in
                                        obtaining information about us or our products and Services, when you
                                        participate in
                                        activities on the Services, or otherwise when you contact us.</Typography>

                                    <Typography align="justify" paragraph>Sensitive Information. We do not process
                                        sensitive
                                        information.</Typography>

                                    <Typography align="justify" paragraph>All personal information that you provide to
                                        us
                                        must be true, complete, and accurate, and you must notify us of any changes to
                                        such
                                        personal information.</Typography>

                                    <Typography align="justify" paragraph>Information automatically
                                        collected</Typography>

                                    <Typography align="justify" paragraph>In Short: Some information — such as your
                                        Internet
                                        Protocol (IP) address and/or browser and device characteristics — is collected
                                        automatically when you visit our Services.</Typography>

                                    <Typography align="justify" paragraph>We automatically collect certain information
                                        when
                                        you visit, use, or navigate the Services. This information does not reveal your
                                        specific identity (like your name or contact information) but may include device
                                        and
                                        usage information, such as your IP address, browser and device characteristics,
                                        operating system, language preferences, referring URLs, device name, country,
                                        location, information about how and when you use our Services, and other
                                        technical
                                        information. This information is primarily needed to maintain the security and
                                        operation of our Services, and for our internal analytics and reporting
                                        purposes.</Typography>

                                    <Typography align="justify" paragraph>Like many businesses, we also collect
                                        information
                                        through cookies and similar technologies.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="2">{t('terms_policy_t2')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: We process your information to
                                        provide,
                                        improve, and administer our Services, communicate with you, for security and
                                        fraud
                                        prevention, and to comply with law. We may also process your information for
                                        other
                                        purposes with your consent.</Typography>

                                    <Typography align="justify" paragraph>We process your personal information for a
                                        variety
                                        of reasons, depending on how you interact with our Services,
                                        including:</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="3">WHEN AND WITH WHOM DO
                                            WE
                                            SHARE YOUR PERSONAL INFORMATION?</Typography></li>

                                    <Typography align="justify" paragraph>In Short: We may share information in specific
                                        situations described in this section and/or with the following third
                                        parties.</Typography>

                                    <Typography align="justify" paragraph>We may need to share your personal information
                                        in
                                        the following situations:</Typography>

                                    <Typography align="justify" paragraph>Business Transfers. We may share or transfer
                                        your
                                        information in connection with, or during negotiations of, any merger, sale of
                                        company assets, financing, or acquisition of all or a portion of our business to
                                        another company.</Typography>

                                    <Typography align="justify" paragraph>Affiliates. We may share your information with
                                        our
                                        affiliates, in which case we will require those affiliates to honor this privacy
                                        notice. Affiliates include our parent company and any subsidiaries, joint
                                        venture
                                        partners, or other companies that we control or that are under common control
                                        with
                                        us.</Typography>

                                    <Typography align="justify" paragraph>Business Partners. We may share your
                                        information
                                        with our business partners to offer you certain products, services, or
                                        promotions.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="4">{t('terms_policy_t4')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: We may use cookies and other
                                        tracking
                                        technologies to collect and store your information.</Typography>

                                    <Typography align="justify" paragraph>We may use cookies and similar tracking
                                        technologies (like web beacons and pixels) to access or store information.
                                        Specific
                                        information about how we use such technologies and how you can refuse certain
                                        cookies is set out in our Cookie Notice.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="5">{t('terms_policy_t5')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: If you choose to register or log in
                                        to
                                        our Services using a social media account, we may have access to certain
                                        information
                                        about you.</Typography>


                                    <Typography align="justify" paragraph>Our Services offer you the ability to register
                                        and log
                                        in using your third-party social media account details (like your Facebook or
                                        Twitter
                                        logins). Where you choose to do this, we will receive certain profile
                                        information about
                                        you from your social media provider. The profile information we receive may vary
                                        depending on the social media provider concerned, but will often include your
                                        name,
                                        email address, friends list, and profile picture, as well as other information
                                        you
                                        choose to make public on such a social media platform.</Typography>

                                    <Typography align="justify" paragraph>We will use the information we receive only
                                        for the
                                        purposes that are described in this privacy notice or that are otherwise made
                                        clear to
                                        you on the relevant Services. Please note that we do not control, and are not
                                        responsible for, other uses of your personal information by your third-party
                                        social
                                        media provider. We recommend that you review their privacy notice to understand
                                        how they
                                        collect, use, and share your personal information, and how you can set your
                                        privacy
                                        preferences on their sites and apps.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="6">{t('terms_policy_t6')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: We may transfer, store, and process
                                        your
                                        information in countries other than your own.</Typography>

                                    <Typography align="justify" paragraph>Our servers are located in. If you are
                                        accessing our
                                        Services from outside, please be aware that your information may be transferred
                                        to,
                                        stored, and processed by us in our facilities and by those third parties with
                                        whom we
                                        may share your personal information (see "WHEN AND WITH WHOM DO WE SHARE YOUR
                                        PERSONAL</Typography>

                                    <Typography align="justify" paragraph>INFORMATION?" above), in and other
                                        countries.</Typography>

                                    <Typography align="justify" paragraph>If you are a resident in the European Economic
                                        Area
                                        (EEA) or United Kingdom (UK), then these countries may not necessarily have data
                                        protection laws or other similar laws as comprehensive as those in your country.
                                        However, we will take all necessary measures to protect your personal
                                        information in
                                        accordance with this privacy notice and applicable law.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="7">{t('terms_policy_t7')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: We keep your information for as long
                                        as
                                        necessary to fulfill the purposes outlined in this privacy notice unless
                                        otherwise
                                        required by law.</Typography>

                                    <Typography align="justify" paragraph>We will only keep your personal information
                                        for as
                                        long as it is necessary for the purposes set out in this privacy notice, unless
                                        a longer
                                        retention period is required or permitted by law (such as tax, accounting, or
                                        other
                                        legal requirements).</Typography>

                                    <Typography align="justify" paragraph>When we have no ongoing legitimate business
                                        need to
                                        process your personal information, we will either delete or anonymize such
                                        information,
                                        or, if this is not possible (for example, because your personal information has
                                        been
                                        stored in backup archives), then we will securely store your personal
                                        information and
                                        isolate it from any further processing until deletion is possible.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="8">{t('terms_policy_t8')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: We do not knowingly collect data
                                        from or
                                        market to children under 18 years of age.</Typography>

                                    <Typography align="justify" paragraph>We do not knowingly solicit data from or
                                        market to
                                        children under 18 years of age. By using the Services, you represent that you
                                        are at
                                        least 18 or that you are the parent or guardian of such a minor and consent to
                                        such
                                        minor dependent’s use of the Services. If we learn that personal information
                                        from users
                                        less than 18 years of age has been collected, we will deactivate the account and
                                        take
                                        reasonable measures to promptly delete such data from our records. If you become
                                        aware
                                        of any data we may have collected from children under age 18, please contact us
                                        at
                                        .</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="9">{t('terms_policy_t9')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: You may review, change, or terminate
                                        your
                                        account at any time.</Typography>

                                    <Typography align="justify" paragraph>If you are located in the EEA or UK and you
                                        believe we
                                        are unlawfully processing your personal information, you also have the right to
                                        complain
                                        to your Member State data protection authority or UK data protection
                                        authority.</Typography>

                                    <Typography align="justify" paragraph>If you are located in Switzerland, you may
                                        contact the
                                        Federal Data Protection and Information Commissioner.</Typography>

                                    <Typography align="justify" paragraph>Withdrawing your consent: If we are relying on
                                        your
                                        consent to process your personal information, which may be express and/or
                                        implied
                                        consent depending on the applicable law, you have the right to withdraw your
                                        consent at
                                        any time. You can withdraw your consent at any time by contacting us by using
                                        the
                                        contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
                                        NOTICE?"
                                        below.</Typography>

                                    <Typography align="justify" paragraph>However, please note that this will not affect
                                        the
                                        lawfulness of the processing before its withdrawal nor, when applicable law
                                        allows, will
                                        it affect the processing of your personal information conducted in reliance on
                                        lawful
                                        processing grounds other than consent.</Typography>


                                    <Typography align="justify" paragraph>Account Information</Typography>

                                    <Typography align="justify" paragraph>If you would at any time like to review or
                                        change the
                                        information in your account or terminate your account, you can:</Typography>

                                    <Typography align="justify" paragraph>Upon your request to terminate your account,
                                        we will
                                        deactivate or delete your account and information from our active databases.
                                        However, we may
                                        retain some information in our files to prevent fraud, troubleshoot problems,
                                        assist with
                                        any investigations, enforce our legal terms and/or comply with applicable legal
                                        requirements.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="10">{t('terms_policy_t10')}</Typography></li>

                                    <Typography align="justify" paragraph>Most web browsers and some mobile operating
                                        systems and
                                        mobile applications include a Do-Not-Track ("DNT") feature or setting you can
                                        activate to
                                        signal your privacy preference not to have data about your online browsing
                                        activities
                                        monitored and collected. At this stage no uniform technology standard for
                                        recognizing and
                                        implementing DNT signals has been finalized. As such, we do not currently
                                        respond to DNT
                                        browser signals or any other mechanism that automatically communicates your
                                        choice not to be
                                        tracked online. If a standard for online tracking is adopted that we must follow
                                        in the
                                        future, we will inform you about that practice in a revised version of this
                                        privacy
                                        notice.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="11">{t('terms_policy_t11')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: Yes, if you are a resident of
                                        California, you
                                        are granted specific rights regarding access to your personal
                                        information.</Typography>

                                    <Typography align="justify" paragraph>California Civil Code Section 1798.83, also
                                        known as the
                                        "Shine The Light" law, permits our users who are California residents to request
                                        and obtain
                                        from us, once a year and free of charge, information about categories of
                                        personal
                                        information (if any) we disclosed to third parties for direct marketing purposes
                                        and the
                                        names and addresses of all third parties with which we shared personal
                                        information in the
                                        immediately preceding calendar year. If you are a California resident and would
                                        like to make
                                        such a request, please submit your request in writing to us using the contact
                                        information
                                        provided below.</Typography>

                                    <Typography align="justify" paragraph>If you are under 18 years of age, reside in
                                        California,
                                        and have a registered account with Services, you have the right to request
                                        removal of
                                        unwanted data that you publicly post on the Services. To request removal of such
                                        data,
                                        please contact us using the contact information provided below and include the
                                        email address
                                        associated with your account and a statement that you reside in California. We
                                        will make
                                        sure the data is not publicly displayed on the Services, but please be aware
                                        that the data
                                        may not be completely or comprehensively removed from all our systems (e.g.,
                                        backups,
                                        etc.).</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="12">{t('terms_policy_t12')}</Typography></li>

                                    <Typography align="justify" paragraph>In Short: Yes, we will update this notice as
                                        necessary to
                                        stay compliant with relevant laws.</Typography>

                                    <Typography align="justify" paragraph>We may update this privacy notice from time to
                                        time. The
                                        updated version will be indicated by an updated "Revised" date and the updated
                                        version will
                                        be effective as soon as it is accessible. If we make material changes to this
                                        privacy
                                        notice, we may notify you either by prominently posting a notice of such changes
                                        or by
                                        directly sending you a notification. We encourage you to review this privacy
                                        notice
                                        frequently to be informed of how we are protecting your
                                        information.</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="13">{t('terms_policy_t13')}</Typography></li>

                                    <Typography align="justify" paragraph>If you have questions or comments about this
                                        notice, you
                                        may email us at</Typography>

                                    <Typography align="justify" paragraph>or by post to:</Typography>

                                    <li>
                                        <Typography variant="h4" align="left" sx={{mb: 2}} id="14">{t('terms_policy_t14')}</Typography></li>

                                    <Typography align="justify" paragraph>Based on the applicable laws of your country,
                                        you may have
                                        the right to request access to the personal information we collect from you,
                                        change that
                                        information, or delete it. To request to review, update, or delete your personal
                                        information, please fill out and submit a data subject access
                                        request.</Typography>

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
