/**
 * Instagram Clone - React Native Application
 * 
 * This code has been written by Aman Chaturvedi
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * Author: Aman Chaturvedi
 * Email: aman.allacc@gmail.com
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
