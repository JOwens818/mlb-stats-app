const ENDPOINT = "http://localhost:5001/api";


async function getHistogramData(field) {
    let url = ENDPOINT + "/charts/histogram?field=" + field;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getHistogramStats(field) {
    let url = ENDPOINT + "/charts/histogram-stats?field=" + field;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getScatterData(field) {
    let url = ENDPOINT + "/charts/scatter?field=" + field;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getPredictedStatsAll() {
    let url = ENDPOINT + "/predicted-stats-all";
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}

async function getRadarData(playerID) {
    let url = ENDPOINT + "/charts/radar?playerid=" + playerID;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getLineData(playerID) {
    let url = ENDPOINT + "/charts/line?playerid=" + playerID;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getPlayerData(playerID) {
    let url = ENDPOINT + "/player-stats?playerid=" + playerID;
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}



export { 
    getHistogramData, 
    getHistogramStats, 
    getScatterData, 
    getPredictedStatsAll, 
    getRadarData,
    getLineData,
    getPlayerData
};