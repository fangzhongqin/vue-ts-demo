module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        libraryName: "@didi/kata-ui",
        styleLibraryName: "theme-default"
      }
    ]
    // [
    //   "component",
    //   {
    //     libraryName: "element-ui",
    //     styleLibraryName: "theme-chalk"
    //   }
    // ]
  ]
};
