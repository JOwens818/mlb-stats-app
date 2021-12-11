const ENDPOINT = "http://localhost:5001/api/";


async function getHistogramData(field) {
    let url = ENDPOINT + "histogram?field=" + field;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}

export { getHistogramData };