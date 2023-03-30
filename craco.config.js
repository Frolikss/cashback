const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@store': path.resolve(__dirname, 'src/store.ts'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@png': path.resolve(__dirname, 'src/assets/png'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@styles': path.resolve(__dirname, 'src/index.css')
    }
  }
};
