const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@http': path.resolve(__dirname, 'src/http'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@fields': path.resolve(__dirname, 'src/components/Form/fieldsData')
    }
  }
};
