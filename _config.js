var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://darkroom:darkroom@cluster0.bdbrc.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://darkroom:darkroom@cluster0.bdbrc.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://darkroom:darkroom@cluster0.bdbrc.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;