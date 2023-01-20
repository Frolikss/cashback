const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@modules/login': path.resolve(__dirname, 'src/modules/login'),
      '@fields': path.resolve(__dirname, 'src/constants/fields')
    }
  }
};
