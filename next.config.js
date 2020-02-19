module.exports = {
  webpack(config, { isServer }) {
    config.resolve.modules.push(__dirname);
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
};
