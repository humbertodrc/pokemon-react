// este es el archivo por default de esta carpeta, que va a contener una funcion generica para hacer las llamadas a la api.

export default async function apiCall({
    url,
    method = "get",
    body,
    headers,
}) {
    try {
        const response = await fetch(url, { method, body, headers });
        return response.json();

    } catch (error) {

        Promise.reject(error)

    }
}