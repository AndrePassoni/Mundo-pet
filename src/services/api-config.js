export const apiConfig = {
    baseURL: window.location.hostname === "localhost" 
        ? "http://localhost:3333" 
        : "/api",
}