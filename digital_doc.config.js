module.exports = {
    apps: [{
        name: "digital-doc-group",
        script: "./src/index.js",
        watch: true,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }]
}