module.exports = {
    title: 'Plaza documentation',
    dest: 'public',  // Destination directory for the build step
    head: [  // Favicon
        ['link', { rel: 'icon', href: '/assetts/img/logo.png' }]
    ],
    themeConfig: {
        sidebar: [
            ['/tutorials/quickstart.md', 'Quickstart'],
            '/developers/how-to-build-a-bridge.md',
            '/developers/bridge-communication-protocol.md',
        ]
    },
    themeConfig: {
        logo: '/assets/img/logo.png'
    }
}
