import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';

import Logo from '../../assets/logo.png';

import { Container } from './styles';

export default function Header() {
    return (
        <View style={Container.insta}>
            <Image source={Logo} />
        </View>
    );
}
