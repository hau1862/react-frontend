import { apiUrl, headers } from "./constants";
import customService from "./custom";

const itemNames = ["create", "read", "update", "delete"];
const itemMethods = ["POST", "GET", "PATCH", "DELETE"];
const serviceNames = ["account", "category", "collection", "product"];
const routeNames = ["accounts", "categories", "collections", "products"];

function setupService(name) {
	return itemNames.reduce(function (accumulator, itemName, index) {
		accumulator[itemName] = async function (data = []) {
			const response = await fetch(`${apiUrl}/${name}`, { method: itemMethods[index], headers, body: JSON.stringify(data) });
			return await response.json();
		};
		return accumulator;
	}, {});
}

// prettier-ignore
export default serviceNames.reduce(function (accumulator, serviceName, index) {
	accumulator[`${serviceName}Service`] = setupService(routeNames[index]);
	return accumulator;
}, { customService });
