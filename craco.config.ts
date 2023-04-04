const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@png': path.resolve(__dirname, 'src/assets/png'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/index.css')
    }
  }
};

export {};
