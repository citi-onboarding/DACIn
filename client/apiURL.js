const host = process.env.NODE_ENV === "production";

export default { 
    url: host ? "http://localhost:3001" : "dacin-onepage"
}