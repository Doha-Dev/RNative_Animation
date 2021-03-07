/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Easing, Animated, StyleSheet, View, Text, Button } from 'react-native';
 
class AnimOne extends Component {
    constructor() {
        super();
        this.state = {
            mySquare: new Animated.Value(1),
        }
    }

    runAnimation = () => {
        Animated.timing(this.state.mySquare, {    // spring, timing
            toValue: 0,
            duration: 2000,
            delay: 1000,
            // easing: Easing.elastic(3), // bounce, elastic
        }).start();
    }

    render () {
        return (
            <View>
                <Animated.View
                    // style={this.state.mySquare.getLayout()}
                    style={{
                        opacity: this.state.mySquare
                        // left: this.mySquare.x,
                        // top: this.mySquare.y,
                    }}
                >
                    <View style={styles.square}>
                    </View>
                </Animated.View>

                <Button
                    title="Animation Start"
                    onPress={this.runAnimation}
                />
            </View>
            
            
        )
    }
}
 
const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
    },
});

export default AnimOne;
