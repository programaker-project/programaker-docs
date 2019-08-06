module.exports = {
    title: 'Plaza documentation',
    dest: 'public',  // Destination directory for the build step
    head: [  // Favicon
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        sidebar: [
            ['/tutorials/quickstart.md', 'Quickstart'],
            '/developers/bridge-communication-protocol.md',
        ],
        logo: '/assets/img/logo.png'
    },
}
