import { API } from "@/app/api";
import { MenuItem } from "../interfaces/menu.interface";

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const res = await fetch(API.topPage.find, {
		method: "POST",
		headers: new Headers({ "content-type": "application/json" }),
		body: JSON.stringify({
			firstCategory,
		}),
		next: { revalidate: 10 },
	});

	return res.json();
}
