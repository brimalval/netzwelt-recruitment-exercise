import { TerritoryResponse, UserResponse, ErrorResponse } from "./types";
export default class ApiHelper {
    private static readonly BASE_URL: string =
        "https://netzwelt-devtest.azurewebsites.net/";

    static getBaseURL(): string {
        return ApiHelper.BASE_URL;
    }

    static async getTerritories(): Promise<TerritoryResponse> {
        const response = await fetch(ApiHelper.BASE_URL + "Territories/All");
        const data = await response.json();
        return data;
    }

    static async validateUser(
        username: string,
        password: string
    ): Promise<UserResponse | ErrorResponse> {
        const response = await fetch(ApiHelper.BASE_URL + "Account/Signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await response.json();
        return data;
    }
}
