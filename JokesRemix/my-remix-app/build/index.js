var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PRM7WO5H.css";

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/root.tsx
var links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({ title: "Studio Ghibli", description: "A description" });
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, error.message, /* @__PURE__ */ React.createElement(import_react2.Scripts, null)));
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/films/$filmId.tsx
var filmId_exports = {};
__export(filmId_exports, {
  action: () => action,
  default: () => Film,
  loader: () => loader,
  meta: () => meta2
});
var import_node = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/api/comments.ts
async function getComments(filmId) {
  return (await fetch(`http://localhost:3002/comments?filmId=${filmId}`)).json();
}
async function addComment(comment) {
  return (await fetch("http://localhost:3002/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json"
    }
  })).json();
}

// app/api/films.ts
async function getFilms(title) {
  return (await (await fetch("https://ghibliapi.herokuapp.com/films")).json()).filter((film) => title ? film.title.toLowerCase().includes(title.toLowerCase()) : !0);
}
async function getFilmbyID(filmId) {
  let film = await (await fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)).json(), comments = await getComments(filmId), characters = await Promise.all(film.people.filter((url) => url !== "https://ghibliapi.herokuapp.com/people/").map((url) => fetch(url).then((response2) => response2.json())));
  return __spreadProps(__spreadValues({}, film), { comments, characters });
}
async function getFilmCharacters(characterId) {
  let response = await fetch(`https://ghibliapi.herokuapp.com/people/${characterId}`);
  if (!response.ok)
    throw response;
  return response.json();
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/films/$filmId.tsx
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/components/FilmBanner.tsx
var import_react3 = require("@remix-run/react");
function FilmBanner({ film }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-96 overflow-hidden relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full flex flex-col absolute justify-between items-start"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/films",
    className: "text-white p-5 text-2xl hover:underline"
  }, "Go Back"), /* @__PURE__ */ React.createElement("div", {
    className: "bg-slate-700/60 p-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-6xl font-bold text-white"
  }, film.title))), /* @__PURE__ */ React.createElement("img", {
    src: film.movie_banner,
    className: "w-full h-auto",
    style: { marginTop: -100 }
  })));
}

// app/components/CharacterList.tsx
var import_react4 = require("@remix-run/react");
function CharacterList({ characters }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 max-w-md ml-10"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl"
  }, "Characters"), /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-col space-y-3 my-3"
  }, characters == null ? void 0 : characters.map((character) => /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react4.NavLink, {
    to: "characters/" + character.id,
    prefetch: "intent",
    className: ({ isActive }) => `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${isActive ? "bg-slate-300 text-black font-bold border-2" : "text-blue-500 "} `
  }, character.name)))));
}

// app/components/CommentsList.tsx
var import_react5 = require("@remix-run/react"), import_react6 = require("react");
function CommentsList({ filmId, comments }) {
  let transition = (0, import_react5.useTransition)(), actionData = (0, import_react5.useActionData)(), isAdding = transition.state === "submitting" && transition.submission.formData.get("_action") === "create", formRef = import_react6.useRef, inputStyle = (fieldName) => `border border-slate-400 rounded py-2 px-3 inline-block w-full ${(actionData == null ? void 0 : actionData.errors[fieldName]) ? " border-red-500" : ""}`;
  return console.log(comments), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl mb-2"
  }, "Community Comments"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-4 my-3 max-w-3xl"
  }, comments.map((comment) => /* @__PURE__ */ React.createElement("div", {
    key: comment.id,
    className: "p-4 rounded border border-slate-400 max-w-3xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-700 font-bold text-xl mb-2"
  }, comment.name, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "delete",
    className: "bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-2 float-right"
  }, "X")), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: comment.id
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700"
  }, comment.message))), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 rounded border border-slate-400"
  }, /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post",
    action: `/films/${filmId}`
  }, /* @__PURE__ */ React.createElement("fieldset", {
    disabled: transition.state === "submitting"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "inline-block my-2"
  }, "Name:"), /* @__PURE__ */ React.createElement("input", {
    name: "name",
    type: "text",
    className: inputStyle("name")
  }), (actionData == null ? void 0 : actionData.errors.name) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData.errors.name), /* @__PURE__ */ React.createElement("label", {
    className: "inline-block my-2"
  }, "Message:"), /* @__PURE__ */ React.createElement("textarea", {
    name: "message",
    className: inputStyle("message")
  }), (actionData == null ? void 0 : actionData.errors.message) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData.errors.message), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
  }, transition.state === "submitting" ? "Adding..." : "Add comment"))))));
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/films/$filmId.tsx
var action = async ({ request, params }) => {
  (0, import_tiny_invariant.default)(params.filmId, "expected params.filmId");
  let body = await request.formData();
  console.log("body", Object.fromEntries(body));
  let comment = {
    name: body.get("name"),
    message: body.get("message"),
    filmId: params.filmId
  }, errors = { name: "", message: "" };
  if (comment.name || (errors.name = "Please provide your name"), comment.message || (errors.message = "Please provide a comment"), errors.name || errors.message) {
    let values = Object.fromEntries(body);
    return { errors, values };
  }
  return await addComment(comment), (0, import_node.redirect)(`/films/${params.filmId}`);
}, meta2 = ({ data }) => ({ title: data.title, description: data.description }), loader = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.filmId, "expected params.filmId");
  let film = await getFilmbyID(params.filmId);
  return console.log("fetching film", film.title), film;
};
function Film() {
  let film = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FilmBanner, {
    film
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-10"
  }, /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, film.description)), /* @__PURE__ */ React.createElement("div", {
    className: "flex py-5 space-x-5"
  }, /* @__PURE__ */ React.createElement(CharacterList, {
    characters: film.characters
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_react7.Outlet, null), /* @__PURE__ */ React.createElement(CommentsList, {
    filmId: film.id,
    comments: film.comments || []
  }))));
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/films/$filmId/characters.$charactersId.tsx
var characters_charactersId_exports = {};
__export(characters_charactersId_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Character,
  loader: () => loader2
});
var import_react8 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var loader2 = async ({ params }) => ((0, import_tiny_invariant2.default)(params.charactersId, "expected params.characterId"), getFilmCharacters(params.charactersId));
function Character() {
  let characterDetails = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl mb-2"
  }, "Character Details"), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 rounded shadow-lg border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-700 font-bold text-xl mb-2"
  }, characterDetails.name), /* @__PURE__ */ React.createElement("ul", {
    className: "py-2"
  }, /* @__PURE__ */ React.createElement("li", null, "Gender: ", characterDetails.gender), /* @__PURE__ */ React.createElement("li", null, "Age: ", characterDetails.age), /* @__PURE__ */ React.createElement("li", null, "Eye Color: ", characterDetails.eye_color), /* @__PURE__ */ React.createElement("li", null, "Hair Color: ", characterDetails.hair_color))));
}
function CatchBoundary() {
  let caught = (0, import_react8.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ React.createElement("div", {
      className: "mb-3"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "text-3xl mb-2"
    }, "Details"), /* @__PURE__ */ React.createElement("div", {
      className: "p-4 rounded shadow-lg border bg-orange-200 border-orange-600"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "text-gray-700 font-bold text-xl mb-2"
    }, caught.statusText), /* @__PURE__ */ React.createElement("p", null, caught.status, " ", caught.statusText)));
  throw new Error("Unkown error");
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl mb-2"
  }, "Details"), /* @__PURE__ */ React.createElement("div", {
    className: "p-4 rounded shadow-lg border bg-rose-200 border-rose-600"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-700 font-bold text-xl mb-2"
  }, "Uh oh... Sorry something went wrong!"), /* @__PURE__ */ React.createElement("p", null, error == null ? void 0 : error.message)));
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/films/index.tsx
var films_exports = {};
__export(films_exports, {
  default: () => FilmsIndex,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");
var loader3 = async ({ request }) => {
  let title = new URL(request.url).searchParams.get("title");
  return getFilms(title);
};
function FilmsIndex() {
  let films = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-16 font-sans"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-bold text-center"
  }, "Studio Ghibli Films"), /* @__PURE__ */ React.createElement(import_react9.Form, {
    reloadDocument: !0,
    method: "get",
    className: "py-5"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "font-bold"
  }, "Search", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    placeholder: "Type a title...",
    className: "border-2 rounded py-2 px-3"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
  }, "Search")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-4"
  }, films.map((film) => /* @__PURE__ */ React.createElement(import_react9.Link, {
    title: film.title,
    key: film.id,
    to: film.id,
    className: "hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer",
    prefetch: "intent"
  }, /* @__PURE__ */ React.createElement("div", null, film.title), /* @__PURE__ */ React.createElement("img", {
    src: film.image,
    alt: film.title
  })))));
}
var meta3 = () => ({ title: "Films | Studio Ghibli", description: "List of films" }), links2 = () => [{ rel: "stylesheet", href: "styles" }];

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute
});
var import_react10 = require("@remix-run/react");
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl mb-2 ml-10"
  }, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer",
    className: "text-3xl mb-2  ml-20"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer",
    className: "text-3xl mb-2 ml-20"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    className: "text-3xl mb-2  ml-20",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react10.Link, {
    to: "/films",
    className: "text-3xl mb-2  ml-20 focus:outline-none focus:ring focus:ring-blue-300 hover:bg-blue-600 active:bg-blue-300",
    target: "_blank",
    rel: "noreferrer"
  }, "Films")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react10.Link, {
    to: "/jokes",
    className: "text-3xl mb-2  ml-20 focus:outline-none focus:ring focus:ring-blue-300 hover:bg-violet-600 active:bg-violet-300",
    target: "_blank",
    rel: "noreferrer"
  }, "Jokes"))));
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute
});
var import_react11 = require("@remix-run/react");
function JokesRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "J\u{1F92A}KES"), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react11.Outlet, null)));
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/jokes/$jokes.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokeRoute
});
function JokeRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, "Why don't you find hippopotamuses hiding in trees? They're really good at it."));
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/jokes/index.tsx
var jokes_exports3 = {};
__export(jokes_exports3, {
  default: () => JokesIndexRoute
});
function JokesIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "super"
  }, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, "I was wondering why the frisbee was getting bigger, then it hit me."));
}

// route:/Users/lagruni/Downloads/TestProjects/JokesRemix/my-remix-app/app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  default: () => NewJokeRoute
});
function NewJokeRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Content: ", /* @__PURE__ */ React.createElement("textarea", {
    name: "content"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f1571380", entry: { module: "/build/entry.client-5O66PRWU.js", imports: ["/build/_shared/chunk-3YJP6BQ7.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TERSH4SU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/films/$filmId": { id: "routes/films/$filmId", parentId: "root", path: "films/:filmId", index: void 0, caseSensitive: void 0, module: "/build/routes/films/$filmId-DCP5ZSO2.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/films/$filmId/characters.$charactersId": { id: "routes/films/$filmId/characters.$charactersId", parentId: "routes/films/$filmId", path: "characters/:charactersId", index: void 0, caseSensitive: void 0, module: "/build/routes/films/$filmId/characters.$charactersId-Q53ZV2DL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/films/index": { id: "routes/films/index", parentId: "root", path: "films", index: !0, caseSensitive: void 0, module: "/build/routes/films/index-ILLI6627.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-OI3EVANB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-CYQNY47F.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$jokes": { id: "routes/jokes/$jokes", parentId: "routes/jokes", path: ":jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$jokes-QSZNBKA7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-GVXLQ5PI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-RH5IH3RJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F1571380.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/films/$filmId": {
    id: "routes/films/$filmId",
    parentId: "root",
    path: "films/:filmId",
    index: void 0,
    caseSensitive: void 0,
    module: filmId_exports
  },
  "routes/films/$filmId/characters.$charactersId": {
    id: "routes/films/$filmId/characters.$charactersId",
    parentId: "routes/films/$filmId",
    path: "characters/:charactersId",
    index: void 0,
    caseSensitive: void 0,
    module: characters_charactersId_exports
  },
  "routes/films/index": {
    id: "routes/films/index",
    parentId: "root",
    path: "films",
    index: !0,
    caseSensitive: void 0,
    module: films_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokes": {
    id: "routes/jokes/$jokes",
    parentId: "routes/jokes",
    path: ":jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: jokes_exports3
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
