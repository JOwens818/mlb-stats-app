const ENDPOINT = "http://localhost:5001/api/";


async function getHistogramData(field) {
    let url = ENDPOINT + "histogram?field=" + field;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getHistogramStats(field) {
    let url = ENDPOINT + "histogram-stats?field=" + field;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getScatterData(field) {
    let url = ENDPOINT + "scatter?field=" + field;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getPredictedStatsAll() {
    let url = ENDPOINT + "predicted-stats-all";
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}



export { getHistogramData, getHistogramStats, getScatterData, getPredictedStatsAll };