// Added declaration to allow importing css files via `css modules`
// https://stackoverflow.com/questions/40382842/cant-import-css-scss-modules-typescript-says-cannot-find-module#41946697
declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}
