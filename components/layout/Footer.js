import React from 'react';
import classes from './Footer.module.scss';
import Image  from 'next/image';
import Logo from "../../images/logo-preview.png";
import Text from '../text/Text';

function Footer() {
return (
    <footer className={classes.footer}>
        <Image src={Logo} alt='Logo' width="350"/>
        <Text>Find the perfect meal recipe</Text>
        <Text className={classes.copyright}>
            Nayi Recipes, 2023 All rgiht reserved.
        </Text>
    </footer>
    
)
}
export default Footer;