import { apiUrl, headers } from "./constants";

export default {
	login: async function (data = [], conditions = {}) {
		const response = await fetch(`${apiUrl}/login`, { method: "POST", headers, body: JSON.stringify({ data, conditions }) });
		return await response.json();
	}
};
