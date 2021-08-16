export const capitalizeWord = (str) => {
    return typeof str === "string" && str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
} 