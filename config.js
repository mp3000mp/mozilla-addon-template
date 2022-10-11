module.exports = {
    verbose: true,
    build: {
        overwriteDest: true,
    },
    run: {
        firefox: 'nightly',
    },
    ignoreFiles: [
        'package-lock.json',
    ]
}
