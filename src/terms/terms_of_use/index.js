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
                                    <Typography align="justify"
                                                paragraph>These Terms of Use constitute a legally binding agreement made
                                        between
                                        you, whether personally or on behalf of an entity (“you”) and GnaEstudios
                                        ("Company," “we," “us," or “our”), concerning your access to and use of the
                                        cognimobile
                                        website as well as any other media form, media channel, mobile website or mobile
                                        application related, linked, or otherwise connected thereto (collectively, the
                                        “Site”).
                                        You
                                        have
                                        read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO
                                        NOT
                                        AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM
                                        USING
                                        THE
                                        SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</Typography>

                                    <Typography align="justify"
                                                paragraph>Supplemental terms and conditions or documents that may be
                                        posted
                                        on
                                        the Site from time to time are hereby expressly incorporated herein by
                                        reference. We
                                        reserve the right, in our sole discretion, to make changes or modifications to
                                        these
                                        Terms of Use at any time and for any reason. We will alert you about any changes
                                        by
                                        updating the “Last updated” date of these Terms of Use, and you waive any right
                                        to
                                        receive specific notice of each such change. Please ensure that you check the
                                        applicable
                                        Terms every time you use our Site so that you understand which Terms apply. You
                                        will
                                        be
                                        subject to, and will be deemed to have been made aware of and to have accepted,
                                        the
                                        changes in any revised Terms of Use by your continued use of the Site after the
                                        date
                                        such revised Terms of Use are posted.</Typography>

                                    <Typography align="justify"
                                                paragraph>The information provided on the Site is not intended for
                                        distribution
                                        to or use by any person or entity in any jurisdiction or country where such
                                        distribution
                                        or use would be contrary to law or regulation or which would subject us to any
                                        registration requirement within such jurisdiction or country. Accordingly, those
                                        persons
                                        who choose to access the Site from other locations do so on their own initiative
                                        and
                                        are
                                        solely responsible for compliance with local laws, if and to the extent local
                                        laws
                                        are
                                        applicable.</Typography>

                                    <Typography align="justify"
                                                paragraph>The Site is intended for users who are at least 18 years old.
                                        Persons
                                        under the age of 18 are not permitted to use or register for the
                                        Site.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="2">{t('terms_use_t2')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>Unless otherwise indicated, the Site is our proprietary
                                        property
                                        and
                                        all source code,</Typography>


                                    <Typography align="justify"
                                                paragraph>databases, functionality, software, website designs, audio,
                                        video,
                                        text, photographs, and graphics on the Site (collectively, the “Content”) and
                                        the
                                        trademarks, service marks, and logos contained therein (the “Marks”) are owned
                                        or
                                        controlled by us or licensed to us, and are protected by copyright and trademark
                                        laws
                                        and various other intellectual property rights and unfair competition laws of
                                        the
                                        United
                                        States, international copyright laws, and international conventions. The Content
                                        and
                                        the
                                        Marks are provided on the Site “AS IS” for your information and personal use
                                        only.
                                        Except as expressly provided in these Terms of Use, no part of the Site and no
                                        Content
                                        or Marks may be copied, reproduced, aggregated, republished, uploaded, posted,
                                        publicly
                                        displayed, encoded, translated, transmitted, distributed, sold, licensed, or
                                        otherwise
                                        exploited for any commercial purpose whatsoever, without our express prior
                                        written
                                        permission.</Typography>

                                    <Typography align="justify"
                                                paragraph>Provided that you are eligible to use the Site, you are
                                        granted a
                                        limited license to access and use the Site and to download or print a copy of
                                        any
                                        portion of the Content to which you have properly gained access solely for your
                                        personal, non-commercial use. We reserve all rights not expressly granted to you
                                        in
                                        and
                                        to the Site, the Content and the Marks.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="3">{t('terms_use_t3')}</Typography>
                                    </li>

                                    <Typography align="justify"
                                                paragraph>By using the Site, you represent and warrant that:
                                    </Typography>
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

                                    <Typography align="justify"
                                                paragraph>If you provide any information that is untrue, inaccurate, not
                                        current, or incomplete, we have the right to suspend or terminate your account
                                        and
                                        refuse any and all current or future use of the Site (or any portion
                                        thereof).</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="4">{t('terms_use_t4')}</Typography>
                                    </li>

                                    <Typography align="justify"
                                                paragraph>You may be required to register with the Site. You agree to
                                        keep
                                        your
                                        password confidential and will be responsible for all use of your account and
                                        password.
                                        We reserve the right to remove, reclaim, or change a username you select if we
                                        determine, in our sole discretion, that such username is inappropriate, obscene,
                                        or
                                        otherwise objectionable.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="5">{t('terms_use_t5')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>You may not access or use the Site for any purpose other than
                                        that
                                        for
                                        which we make the Site available. The Site may not be used in connection with
                                        any
                                        commercial endeavors except those that are specifically endorsed or approved by
                                        us.</Typography>

                                    <Typography align="justify"
                                                paragraph>As a user of the Site, you agree not to:</Typography>

                                    <Typography align="justify"
                                                paragraph>Systematically retrieve data or other content from the Site to
                                        create
                                        or compile, directly or indirectly, a collection, compilation, database, or
                                        directory
                                        without written permission from us.</Typography>

                                    <Typography align="justify"
                                                paragraph>Trick, defraud, or mislead us and other users, especially in
                                        any
                                        attempt to learn sensitive account information such as user
                                        passwords.</Typography>

                                    <Typography align="justify"
                                                paragraph>Circumvent, disable, or otherwise interfere with
                                        security-related
                                        features of the Site, including features that prevent or restrict the use or
                                        copying
                                        of
                                        any Content or enforce limitations on the use of the Site and/or the Content
                                        contained
                                        therein. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
                                        Site.</Typography>

                                    <Typography align="justify"
                                                paragraph>Use any information obtained from the Site in order to harass,
                                        abuse,
                                        or harm another person.</Typography>

                                    <Typography align="justify"
                                                paragraph>Make improper use of our support services or submit false
                                        reports
                                        of
                                        abuse or misconduct.</Typography>

                                    <Typography align="justify"
                                                paragraph>Use the Site in a manner inconsistent with any applicable laws
                                        or
                                        regulations. Engage in unauthorized framing of or linking to the
                                        Site.</Typography>

                                    <Typography align="justify"
                                                paragraph>Upload or transmit (or attempt to upload or to transmit)
                                        viruses,
                                        Trojan horses, or other material, including excessive use of capital letters and
                                        spamming (continuous posting of repetitive text), that interferes with any
                                        party’s
                                        uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts,
                                        alters,
                                        or
                                        interferes with the use, features, functions, operation, or maintenance of the
                                        Site.</Typography>

                                    <Typography align="justify"
                                                paragraph>Engage in any automated use of the system, such as using
                                        scripts
                                        to
                                        send comments or messages, or using any data mining, robots, or similar data
                                        gathering
                                        and extraction tools.</Typography>

                                    <Typography align="justify"
                                                paragraph>Delete the copyright or other proprietary rights notice from
                                        any
                                        Content. Attempt to impersonate another user or person or use the username of
                                        another
                                        user.</Typography>

                                    <Typography align="justify"
                                                paragraph>Upload or transmit (or attempt to upload or to transmit) any
                                        material
                                        that acts as a passive or active information collection or transmission
                                        mechanism,
                                        including without limitation, clear graphics interchange formats (“gifs”), 1×1
                                        pixels,
                                        web bugs, cookies, or other similar devices (sometimes referred to as “spyware”
                                        or
                                        “passive collection mechanisms” or “pcms”).</Typography>

                                    <Typography align="justify"
                                                paragraph>Interfere with, disrupt, or create an undue burden on the Site
                                        or
                                        the
                                        networks or services connected to the Site.</Typography>

                                    <Typography align="justify"
                                                paragraph>Harass, annoy, intimidate, or threaten any of our employees or
                                        agents
                                        engaged in providing any portion of the Site to you.</Typography>

                                    <Typography align="justify"
                                                paragraph>Attempt to bypass any measures of the Site designed to prevent
                                        or
                                        restrict access to the Site, or any portion of the Site.</Typography>


                                    <Typography align="justify"
                                                paragraph>Copy or adapt the Site’s software, including but not limited
                                        to
                                        Flash,
                                        PHP, HTML, JavaScript, or other code.</Typography>

                                    <Typography align="justify"
                                                paragraph>Except as permitted by applicable law, decipher, decompile,
                                        disassemble, or reverse engineer any of the software comprising or in any way
                                        making
                                        up
                                        a part of the Site.</Typography>

                                    <Typography align="justify"
                                                paragraph>Except as may be the result of standard search engine or
                                        Internet
                                        browser usage, use, launch, develop, or distribute any automated system,
                                        including
                                        without limitation, any spider, robot, cheat utility, scraper, or offline reader
                                        that
                                        accesses the Site, or using or launching any unauthorized script or other
                                        software.</Typography>

                                    <Typography align="justify"
                                                paragraph>Use a buying agent or purchasing agent to make purchases on
                                        the
                                        Site.
                                        Make any unauthorized use of the Site, including collecting usernames and/or
                                        email
                                        addresses of users by electronic or other means for the purpose of sending
                                        unsolicited
                                        email, or creating user accounts by automated means or under false
                                        pretenses.</Typography>

                                    <Typography align="justify"
                                                paragraph>Use the Site as part of any effort to compete with us or
                                        otherwise
                                        use
                                        the Site and/or the Content for any revenue-generating endeavor or commercial
                                        enterprise.</Typography>

                                    <Typography align="justify"
                                                paragraph>Sell or otherwise transfer your profile.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="6">{t('terms_use_t6')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>The Site does not offer users to submit or post content. We
                                        may
                                        provide you with the opportunity to create, submit, post, display, transmit,
                                        perform,
                                        publish, distribute, or broadcast content and materials to us or on the Site,
                                        including
                                        but not limited to text, writings, video, audio, photographs, graphics,
                                        comments,
                                        suggestions, or personal information or other material (collectively,
                                        "Contributions").
                                        Contributions may be viewable by other users of the Site and through third-party
                                        websites. As such, any Contributions you transmit may be treated in accordance
                                        with
                                        the
                                        Site Privacy Policy. When you create or make available any Contributions, you
                                        thereby
                                        represent and warrant that:</Typography>

                                    <Typography align="justify"
                                                paragraph>The creation, distribution, transmission, public display, or
                                        performance, and the accessing, downloading, or copying of your Contributions do
                                        not
                                        and
                                        will not infringe the proprietary rights, including but not limited to the
                                        copyright,
                                        patent, trademark, trade secret, or moral rights of any third
                                        party.</Typography>

                                    <Typography align="justify"
                                                paragraph>You are the creator and owner of or have the necessary
                                        licenses,
                                        rights, consents, releases, and permissions to use and to authorize us, the
                                        Site,
                                        and
                                        other users of the Site to use your Contributions in any manner contemplated by
                                        the
                                        Site
                                        and these Terms of Use.</Typography>

                                    <Typography align="justify"
                                                paragraph>You have the written consent, release, and/or permission of
                                        each
                                        and
                                        every identifiable individual person in your Contributions to use the name or
                                        likeness
                                        of each and every such identifiable individual person to enable inclusion and
                                        use of
                                        your Contributions in any manner contemplated by the Site and these Terms of
                                        Use.</Typography>

                                    <Typography align="justify"
                                                paragraph>Your Contributions are not false, inaccurate, or
                                        misleading.</Typography>

                                    <Typography align="justify"
                                                paragraph>Your Contributions are not unsolicited or unauthorized
                                        advertising,
                                        promotional materials, pyramid schemes, chain letters, spam, mass mailings, or
                                        other
                                        forms of solicitation.</Typography>

                                    <Typography align="justify"
                                                paragraph>Your Contributions are not obscene, lewd, lascivious, filthy,
                                        violent,
                                        harassing, libelous, slanderous, or otherwise objectionable (as determined by
                                        us).</Typography>

                                    <Typography align="justify"
                                                paragraph>Your Contributions do not ridicule, mock, disparage,
                                        intimidate,
                                        or
                                        abuse anyone. Your Contributions are not used to harass or threaten (in the
                                        legal
                                        sense
                                        of those terms) any other person and to promote violence against a specific
                                        person
                                        or
                                        class of people.</Typography>

                                    <Typography align="justify"
                                                paragraph>Your Contributions do not violate any applicable law,
                                        regulation,
                                        or
                                        rule.</Typography>

                                    <Typography align="justify"
                                                paragraph>Your Contributions do not violate the privacy or publicity
                                        rights
                                        of
                                        any third party. Your Contributions do not violate any applicable law concerning
                                        child
                                        pornography, or otherwise intended to protect the health or well-being of
                                        minors.
                                        Your
                                        Contributions do not include any offensive comments that are connected to race,
                                        national
                                        origin, gender, sexual preference, or physical handicap.</Typography>

                                    <Typography align="justify"
                                                paragraph>Your Contributions do not otherwise violate, or link to
                                        material
                                        that
                                        violates, any provision of these Terms of Use, or any applicable law or
                                        regulation.</Typography>

                                    <Typography align="justify"
                                                paragraph>Any use of the Site in violation of the foregoing violates
                                        these
                                        Terms
                                        of Use and may result in, among other things, termination or suspension of your
                                        rights
                                        to use the Site.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="7">{t('terms_use_t7')}</Typography>
                                    </li>

                                    <Typography align="justify"
                                                paragraph>You and the Site agree that we may access, store, process, and
                                        use
                                        any
                                        information and personal data that you provide following the terms of the
                                        Privacy
                                        Policy
                                        and your choices (including settings).</Typography>

                                    <Typography align="justify"
                                                paragraph>By submitting suggestions or other feedback regarding the
                                        Site,
                                        you
                                        agree that we can use and share such feedback for any purpose without
                                        compensation
                                        to
                                        you.</Typography>

                                    <Typography align="justify"
                                                paragraph>We do not assert any ownership over your Contributions. You
                                        retain
                                        full ownership of all of your Contributions and any intellectual property rights
                                        or
                                        other proprietary rights associated with your Contributions. We are not liable
                                        for
                                        any
                                        statements or representations in your Contributions provided by you in any area
                                        on
                                        the
                                        Site. You are solely responsible for your Contributions to the Site and you
                                        expressly
                                        agree to exonerate us from any and all responsibility and to refrain from any
                                        legal
                                        action against us regarding your Contributions.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="8">{t('terms_use_t8')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>Use License</Typography>


                                    <Typography align="justify"
                                                paragraph>If you access the Site via a mobile application, then we grant
                                        you
                                        a
                                        revocable, non- exclusive, non-transferable, limited right to install and use
                                        the
                                        mobile
                                        application on wireless electronic devices owned or controlled by you, and to
                                        access
                                        and
                                        use the mobile application on such devices strictly in accordance with the terms
                                        and
                                        conditions of this mobile application license contained in these Terms of Use.
                                        You
                                        shall
                                        not: (1) except as permitted by applicable law, decompile, reverse engineer,
                                        disassemble, attempt to derive the source code of, or decrypt the application;
                                        (2)
                                        make
                                        any modification, adaptation, improvement, enhancement, translation, or
                                        derivative
                                        work
                                        from the application; (3) violate any applicable laws, rules, or regulations in
                                        connection with your access or use of the application; (4) remove, alter, or
                                        obscure
                                        any
                                        proprietary notice (including any notice of copyright or trademark) posted by us
                                        or
                                        the
                                        licensors of the application; (5) use the application for any revenue generating
                                        endeavor, commercial enterprise, or other purpose for which it is not designed
                                        or
                                        intended; (6) make the application available over a network or other environment
                                        permitting access or use by multiple devices or users at the same time; (7) use
                                        the
                                        application for creating a product, service, or software that is, directly or
                                        indirectly, competitive with or in any way a substitute for the application; (8)
                                        use
                                        the
                                        application to send automated queries to any website or to send any unsolicited
                                        commercial e-mail; or (9) use any proprietary information or any of our
                                        interfaces
                                        or
                                        our other intellectual property in the design, development, manufacture,
                                        licensing,
                                        or
                                        distribution of any applications, accessories, or devices for use with the
                                        application.</Typography>

                                    <Typography align="justify"
                                                paragraph>Apple and Android Devices</Typography>

                                    <Typography align="justify"
                                                paragraph>The following terms apply when you use a mobile application
                                        obtained
                                        from either the Apple Store or Google Play (each an “App Distributor”) to access
                                        the
                                        Site: (1) the license granted to you for our mobile application is limited to a
                                        non-transferable license to use the application on a device that utilizes the
                                        Apple
                                        iOS
                                        or Android operating systems, as applicable, and in accordance with the usage
                                        rules
                                        set
                                        forth in the applicable App Distributor’s terms of service; (2) we are
                                        responsible
                                        for
                                        providing any maintenance and support services with respect to the mobile
                                        application as
                                        specified in the terms and conditions of this mobile application license
                                        contained
                                        in
                                        these Terms of Use or as otherwise required under applicable law, and you
                                        acknowledge
                                        that each App Distributor has no obligation whatsoever to furnish any
                                        maintenance
                                        and
                                        support services with respect to the mobile application; (3) in the event of any
                                        failure
                                        of the mobile application to conform to any applicable warranty, you may notify
                                        the
                                        applicable App Distributor, and the App Distributor, in accordance with its
                                        terms
                                        and
                                        policies, may refund the purchase price, if any, paid for the mobile
                                        application,
                                        and to
                                        the maximum extent permitted by applicable law, the App Distributor will have no
                                        other
                                        warranty obligation whatsoever with respect to the mobile application; (4) you
                                        represent
                                        and warrant that (i) you are not located in a country that is subject to a U.S.
                                        government embargo, or that has been designated by the U.S. government as a
                                        “terrorist
                                        supporting” country and (ii) you are not listed on any U.S. government list of
                                        prohibited or restricted parties; (5) you must comply with applicable
                                        third-party
                                        terms
                                        of agreement when using the mobile application, e.g., if you have a VoIP
                                        application,
                                        then you must not be in violation of their wireless data service agreement when
                                        using
                                        the mobile application; and (6) you acknowledge and agree that the App
                                        Distributors
                                        are
                                        third- party beneficiaries of the terms and conditions in this mobile
                                        application
                                        license contained in these Terms of Use, and that each App Distributor will have
                                        the
                                        right (and will be deemed to have accepted the right) to enforce the terms and
                                        conditions in this mobile application license contained in these Terms of Use
                                        against
                                        you as a third-party beneficiary thereof.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="9">{t('terms_use_t9')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>You acknowledge and agree that any questions, comments,
                                        suggestions,
                                        ideas, feedback, or other information regarding the Site ("Submissions")
                                        provided by
                                        you
                                        to us are non-confidential and shall become our sole property. We shall own
                                        exclusive
                                        rights, including all intellectual property rights, and shall be entitled to the
                                        unrestricted use and dissemination of these Submissions for any lawful purpose,
                                        commercial or otherwise, without acknowledgment or compensation to you. You
                                        hereby
                                        waive
                                        all moral rights to any such Submissions, and you hereby warrant that any such
                                        Submissions are original with you or that you have the right to submit such
                                        Submissions.
                                        You agree there shall be no recourse against us for any alleged or actual
                                        infringement
                                        or misappropriation of any proprietary right in your Submissions.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="10">{t('terms_use_t10')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>We reserve the right, but not the obligation, to: (1) monitor
                                        the
                                        Site
                                        for violations of these Terms of Use; (2) take appropriate legal action against
                                        anyone
                                        who, in our sole discretion, violates the law or these Terms of Use, including
                                        without
                                        limitation, reporting such user to law enforcement authorities; (3) in our sole
                                        discretion and without limitation, refuse, restrict access to, limit the
                                        availability
                                        of, or disable (to the extent technologically feasible) any of your
                                        Contributions or
                                        any
                                        portion thereof; (4) in our sole discretion and without limitation, notice, or
                                        liability, to remove from the Site or otherwise disable all files and content
                                        that
                                        are
                                        excessive in size or are in any way burdensome to our systems; and (5) otherwise
                                        manage
                                        the Site in a manner designed to protect our rights and property and to
                                        facilitate
                                        the
                                        proper functioning of the Site.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="11">{t('terms_use_t11')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>We care about data privacy and security. By using the Site,
                                        you
                                        agree
                                        to be bound by our Privacy Policy posted on the Site, which is incorporated into
                                        these
                                        Terms of Use. Please be advised the Site is hosted in Spain. If you access the
                                        Site
                                        from
                                        any other region of the world with laws or other requirements governing personal
                                        data
                                        collection, use, or disclosure that differ from applicable laws in Spain, then
                                        through
                                        your continued use of the Site, you are transferring your data to Spain, and you
                                        agree
                                        to have your data transferred to and processed in Spain.</Typography>


                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="12">{t('terms_use_t12')}</Typography>
                                    </li>

                                    <Typography align="justify"
                                                paragraph>These Terms of Use shall remain in full force and effect while
                                        you
                                        use
                                        the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE
                                        THE
                                        RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO
                                        AND
                                        USE
                                        OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
                                        REASON
                                        OR
                                        FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
                                        WARRANTY,
                                        OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR
                                        REGULATION.
                                        WE
                                        MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR
                                        ACCOUNT</Typography>

                                    <Typography align="justify"
                                                paragraph>AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME,
                                        WITHOUT
                                        WARNING, IN OUR SOLE DISCRETION.</Typography>

                                    <Typography align="justify"
                                                paragraph>If we terminate or suspend your account for any reason, you
                                        are
                                        prohibited from registering and creating a new account under your name, a fake
                                        or
                                        borrowed name, or the name of any third party, even if you may be acting on
                                        behalf
                                        of
                                        the third party. In addition to terminating or suspending your account, we
                                        reserve
                                        the
                                        right to take appropriate legal action, including without limitation pursuing
                                        civil,
                                        criminal, and injunctive redress.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="13">{t('terms_use_t13')}</Typography>
                                    </li>

                                    <Typography align="justify"
                                                paragraph>We reserve the right to change, modify, or remove the contents
                                        of
                                        the
                                        Site at any time or for any reason at our sole discretion without notice.
                                        However,
                                        we
                                        have no obligation to update any information on our Site. We also reserve the
                                        right
                                        to
                                        modify or discontinue all or part of the Site without notice at any time. We
                                        will
                                        not be
                                        liable to you or any third party for any modification, price change, suspension,
                                        or
                                        discontinuance of the Site.</Typography>

                                    <Typography align="justify"
                                                paragraph>We cannot guarantee the Site will be available at all times.
                                        We
                                        may
                                        experience hardware, software, or other problems or need to perform maintenance
                                        related
                                        to the Site, resulting in interruptions, delays, or errors. We reserve the right
                                        to
                                        change, revise, update, suspend, discontinue, or otherwise modify the Site at
                                        any
                                        time
                                        or for any reason without notice to you. You agree that we have no liability
                                        whatsoever
                                        for any loss, damage, or inconvenience caused by your inability to access or use
                                        the
                                        Site during any downtime or discontinuance of the Site. Nothing in these Terms
                                        of
                                        Use
                                        will be construed to obligate us to maintain and support the Site or to supply
                                        any
                                        corrections, updates, or releases in connection therewith.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="14">{t('terms_use_t14')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>These conditions are governed by and interpreted following the
                                        laws of
                                        Spain, and the use of the United Nations Convention of Contracts for the
                                        International
                                        Sale of Goods is expressly excluded. If your habitual residence is in the EU,
                                        and
                                        you
                                        are a consumer, you additionally possess the protection provided to you by
                                        obligatory
                                        provisions of the law of your country of residence. GnaEstudios and
                                        yourself
                                        both agree to submit to the non-exclusive jurisdiction of the courts of Spain,
                                        which
                                        means that you may make a claim to defend your consumer protection rights in
                                        regards
                                        to
                                        these Conditions of Use in Spain, or in the EU country in which you
                                        reside.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="15">{t('terms_use_t15')}</Typography>
                                    </li>

                                    <Typography align="justify"
                                                paragraph>The European Commission provides an online dispute resolution
                                        platform, which you can access here: https://ec.europa.eu/consumers/odr. If you
                                        would
                                        like to bring this subject to our attention, please contact us.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="16">{t('terms_use_t16')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>There may be information on the Site that contains
                                        typographical
                                        errors, inaccuracies, or omissions, including descriptions, pricing,
                                        availability,
                                        and
                                        various other information. We reserve the right to correct any errors,
                                        inaccuracies,
                                        or
                                        omissions and to change or update the information on the Site at any time,
                                        without
                                        prior
                                        notice.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="17">{t('terms_use_t17')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
                                        AGREE
                                        THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE
                                        FULLEST
                                        EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN
                                        CONNECTION
                                        WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                                        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                                        NON-INFRINGEMENT.
                                        WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF
                                        THE
                                        SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL
                                        ASSUME
                                        NO
                                        LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
                                        CONTENT
                                        AND
                                        MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
                                        RESULTING
                                        FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE
                                        OF
                                        OUR
                                        SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
                                        INFORMATION
                                        STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
                                        SITE,
                                        (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
                                        THROUGH
                                        THE SITE BY ANY THIRD PARTY, AND/OR (6)</Typography>


                                    <Typography align="justify"
                                                paragraph>ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR
                                        ANY
                                        LOSS
                                        OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                                        TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT,
                                        ENDORSE,
                                        GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                                        OFFERED
                                        BY
                                        A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
                                        MOBILE
                                        APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
                                        PARTY
                                        TO
                                        OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
                                        THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT
                                        OR
                                        SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
                                        JUDGMENT
                                        AND
                                        EXERCISE CAUTION WHERE APPROPRIATE.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="18">{t('terms_use_t18')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                                        LIABLE
                                        TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
                                        INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE,
                                        LOSS
                                        OF
                                        DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN
                                        ADVISED
                                        OF THE POSSIBILITY OF SUCH DAMAGES.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="19">{t('terms_use_t19')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>You agree to defend, indemnify, and hold us harmless,
                                        including
                                        our
                                        subsidiaries, affiliates, and all of our respective officers, agents, partners,
                                        and
                                        employees, from and against any loss, damage, liability, claim, or demand,
                                        including
                                        reasonable attorneys’ fees and expenses, made by any third party due to or
                                        arising
                                        out
                                        of:
                                    </Typography>

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

                                    <Typography align="justify"
                                                paragraph>We will maintain certain data that you transmit to the Site
                                        for
                                        the
                                        purpose of managing the performance of the Site, as well as data relating to
                                        your
                                        use of
                                        the
                                        Site. Although we perform regular routine backups of data, you are solely
                                        responsible
                                        for
                                        all data that you transmit or that relates to any activity you have undertaken
                                        using
                                        the
                                        Site. You agree that we shall have no liability to you for any loss or
                                        corruption of
                                        any
                                        such data, and you hereby waive any right of action against us arising from any
                                        such
                                        loss or
                                        corruption of such data.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="21">ELECTRONIC
                                        COMMUNICATIONS,
                                        TRANSACTIONS, AND
                                        SIGNATURES</Typography></li>

                                    <Typography align="justify"
                                                paragraph>Visiting the Site, sending us emails, and completing online
                                        forms
                                        constitute electronic communications. You consent to receive electronic
                                        communications,
                                        and
                                        you agree that all agreements, notices, disclosures, and other communications we
                                        provide
                                        to
                                        you electronically, via email and on the Site, satisfy any legal requirement
                                        that
                                        such
                                        communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC
                                        SIGNATURES,
                                        CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
                                        POLICIES,
                                        AND
                                        RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You
                                        hereby</Typography>

                                    <Typography align="justify"
                                                paragraph>waive any rights or requirements under any statutes,
                                        regulations,
                                        rules,
                                        ordinances, or other laws in any jurisdiction which require an original
                                        signature or
                                        delivery or retention of non-electronic records, or to payments or the granting
                                        of
                                        credits
                                        by any means other than electronic means.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}}
                                                    id="22">{t('terms_use_t22')}</Typography></li>

                                    <Typography align="justify"
                                                paragraph>These Terms of Use and any policies or operating rules posted
                                        by
                                        us on
                                        the
                                        Site or in respect to the Site constitute the entire agreement and understanding
                                        between
                                        you
                                        and us. Our failure to exercise or enforce any right or provision of these Terms
                                        of
                                        Use
                                        shall not operate as a waiver of such right or provision. These Terms of Use
                                        operate
                                        to
                                        the
                                        fullest extent permissible by law. We may assign any or all of our rights and
                                        obligations to
                                        others at any time. We shall not be responsible or liable for any loss, damage,
                                        delay,
                                        or
                                        failure to act caused by any cause beyond our reasonable control. If any
                                        provision
                                        or
                                        part
                                        of a provision of these Terms of Use is determined to be unlawful, void, or
                                        unenforceable,
                                        that provision or part of the provision is deemed severable from these Terms of
                                        Use
                                        and
                                        does
                                        not affect the validity and enforceability of any remaining provisions. There is
                                        no
                                        joint
                                        venture, partnership, employment or agency relationship created between you and
                                        us
                                        as a
                                        result of these Terms of Use or use of the Site. You agree that these Terms of
                                        Use
                                        will
                                        not
                                        be construed against us by virtue of having drafted them. You hereby waive any
                                        and
                                        all
                                        defenses you may have based on the electronic form of these Terms of Use and the
                                        lack of
                                        signing by the parties hereto to execute these Terms of Use.</Typography>

                                    <li><Typography variant="h4" align="left" sx={{mb: 2}} id="23">{t('terms_use_t23')}</Typography></li>
                                    <Typography align="justify"
                                                paragraph>In order to resolve a complaint regarding the Site or to
                                        receive
                                        further information regarding use of the Site, please contact us
                                        at:</Typography>
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
