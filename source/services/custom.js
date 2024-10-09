import { apiUrl, headers } from "./constants";

export default {
	login: async function (data = []) {
		const response = await fetch(`${apiUrl}/login`, { method: "POST", headers, body: JSON.stringify(data) });
		return await response.json();
	}
};
