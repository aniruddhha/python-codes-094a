class Configuration {
    constructor(url = 'localhost', port = 9090) {
        this.url = url
        this.port = port
    }

    connect() {
        console.log(`Connecting to ${this.url} and ${this.port}`)
    }
}

const cfg = new Configuration()
cfg.connect()

class NwConfiguration extends Configuration {

    scan() {

    }
}

const nwCfg = new NwConfiguration()
nwCfg.connect()
nwCfg.scan()