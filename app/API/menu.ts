import { API } from "@/app/api";


export const getMenu = async (firstCategory: number):Promise<any> => {
	try {
		const res = await fetch(API.topPage.find, {
			method: "POST",
			headers: new Headers({'content-type': 'application/json'}),
			body: JSON.stringify({
				firstCategory,
			}),
		});
		return res.json();
	} catch (error) {
		console.log(error);
	}
};