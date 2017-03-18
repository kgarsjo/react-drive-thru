import React from 'react';

function getBrowserAppExtension(isProduction) {
    return (isProduction) ? '.min.js' : '.js';
}

export default function Index(props) {
    return (
        <html>
            <body>
                <div id="main"></div>
                <script src={'/js/app' + getBrowserAppExtension(props.production)}></script>
            </body>
        </html>
    );
}
