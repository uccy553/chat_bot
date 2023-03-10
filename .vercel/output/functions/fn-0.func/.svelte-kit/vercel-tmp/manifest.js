export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.de7ef168.js","imports":["_app/immutable/entry/start.de7ef168.js","_app/immutable/chunks/index.c5da838d.js","_app/immutable/chunks/singletons.39ba3253.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.cfaf0289.js","imports":["_app/immutable/entry/app.cfaf0289.js","_app/immutable/chunks/index.c5da838d.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
