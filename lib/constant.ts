export const API_ENDPOINT = "http://localhost:4000";

export const APP_NAME = "WESTSIDE";

export const NEXT_PUBLIC_APP_DOMAIN_NAME =
	process.env.NODE_ENV == "production" ? process.env.NEXT_PUBLIC_MY_DOMAIN_NAME || "gembrs.com" : "localhost:3000";

export const APP_HOME_PAGE = `${
	process.env.NODE_ENV == "production" ? "https" : "http"
}://${NEXT_PUBLIC_APP_DOMAIN_NAME}`;
