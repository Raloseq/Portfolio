const path = require('path');

module.exports = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, './js/nav.js'),
            path.resolve(__dirname, './js/typing.js'),
            path.resolve(__dirname, './js/about.js'),
            path.resolve(__dirname, './js/skills.js'),
            path.resolve(__dirname, './js/projects.js'),
            path.resolve(__dirname, './js/contact.js')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist')
    }
}