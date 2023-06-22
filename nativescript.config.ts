import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "org.nativescript.rivedemo",
  appPath: "src",
  appResourcesPath: "App_Resources",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none",
  },
  ios: {
    SPMPackages: [
      {
        name: "RiveRuntime",
        libs: ["RiveRuntime"],
        repositoryURL: "https://github.com/rive-app/rive-ios.git",
        version: "3.1.8",
      },
    ],
  },
} as NativeScriptConfig;
