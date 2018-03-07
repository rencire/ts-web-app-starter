import app from "./app";

if (module.hot) {
  module.hot.accept("./app.ts", () => {
    console.log("Accepting updated module");
    console.log(app.start());
  });
}

console.log(app.start());
