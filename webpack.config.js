const path = require("path");

module.exports = function (env, argsObject) {
	return {
		entry: "./index.jsx",
		output: {
			path: path.resolve(__dirname, argsObject.mode || "bundle"),
			filename: "index.js"
		},
		target: ["web"],
		devServer: {
			static: { directory: "public" },
			port: 5000,
			open: true,
			historyApiFallback: true
		},
		resolve: {
			modules: ["node_modules", "source", "style"],
			extensions: [".js", ".jsx", ".css", ".scss"],
			alias: {
				source: path.resolve(__dirname, "source"),
				style: path.resolve(__dirname, "style")
			}
		},
		stats: {
			errorDetails: true
		},
		module: {
			rules: [
				{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
				{ test: /\.(css|scss)$/, use: ["style-loader", "css-loader"] },
				{ test: /\.(png|jpeg|jpg|bmp|svg|gif)$/, use: ["file-loader"] }
			]
		},
		plugins: []
	};
};
