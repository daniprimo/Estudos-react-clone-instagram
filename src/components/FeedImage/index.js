import React, { useState, useEffect } from 'react';
import [Small, Original] from './style'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'


const AnimatedOriginal = Animated.createdAnimatedComponente(Original);


export default function LazyImage({ smallSource,
     source.
      shouldLoad = false,
       espectRatio = 1, }) {

        const opacity = new Animated.Value(0);

        const [load, setLoad] = useState(false);


        useEffect(() => {
            if(shouldLoad){
                setTimeout(() => {
                    setLoaded(true);
                },1000);
            }
        }, [shouldLoad]);


        function handleAnimate() {
            Animated.timing(opacity, {
                duration: 500,
                toValue: 1,
                useNativeDriver: true,
            }).start();
        }


        return (
            <Small source={smallSource} aspect={aspectRaio} resizeMode="contain" bluRadius={3}>

            {loaded &&
                (<AnimatedOriginal
                    style={{opacity}}
                    onLoadEnd={handleAnimate}
                    source={source}
                    aspect={aspectRatio}
                    resizeMode="contain"
                />)}
            </Small>
            );
}

LazyImage.propTypes = {
    smallSource: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    shouldLoad: PropTypes.bool,
    aspectRatio: PropTypes.number,
};


LazyImage.defaultProps = {
    shouldLoad: false,
    aspectRatio: 1,
};
