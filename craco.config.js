const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/App.jsx'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@auth': path.resolve(__dirname, 'src/modules/auth'),
      '@users': path.resolve(__dirname, 'src/modules/users'),
      '@currentUser': path.resolve(__dirname, 'src/modules/currentUser'),
      '@fields': path.resolve(__dirname, 'src/constants/fields'),
      '@form': path.resolve(__dirname, 'src/components/form'),
      '@store': path.resolve(__dirname, 'src/store.ts'),
      '@svg': path.resolve(__dirname, 'src/assets/svg'),
      '@png': path.resolve(__dirname, 'src/assets/png'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/index.css')
    }
  }
};
