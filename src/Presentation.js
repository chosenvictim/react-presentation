import React, { Component } from 'react';

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    MarkDown,
    Quote,
    Slide,
    Spectacle,
    Text
} from 'spectacle';

// Import preloader from util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme({
    primary: '#00FDC8'
});

export default class Presentation extends Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="black">Introduction to ReactJS</Heading>
                        <Heading size={1} fit caps>By Shekhar Kumar</Heading>
                        <Heading size={1} fit caps textColor="black">This Presentation is also made using React</Heading>
                        <Text textSize="1.5em" margin="20px 0" bold>Hit right arrow to begin!</Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}