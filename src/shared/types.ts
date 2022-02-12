export type Territory = {
	id: string;
	name: string;
	parent: string | null;
}

// Transfer these interfaces back to ApiHelper once CORS is allowed
export interface TerritoryResponse {
    data: Territory[];
}