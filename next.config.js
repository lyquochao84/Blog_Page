const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    // Development Phase for testing 
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'kevinly0609',
                mongodb_password: 'Kevin0609',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site-dev',
            },
        };
    }

    // Production Phase for the real user
    return {
        env: {
            mongodb_username: 'kevinly0609',
            mongodb_password: 'Kevin0609',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site',
        },
    };
};

