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


async function getProdModelInfo() {
    let url = ENDPOINT + "/prod-model-info";
    let resp = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    });
    return resp.json();
}


async function getSandboxResults(nest, subsample, maxDepth, learnRate, gamma, regAlpha, regLambda) {

    let data = {
        "model_type": "sandbox",
        "year": "2022",
        "n_estimators": nest,
        "subsample": subsample,
        "max_depth": maxDepth,
        "learning_rate": learnRate,
        "gamma": gamma,
        "reg_alpha": regAlpha,
        "reg_lambda": regLambda  
    }

    let url = ENDPOINT + "/create-xgb-model";
    let resp = await fetch(url, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(data),
        mode: 'cors'
    });
    return resp.json();
}


async function getPrediction(data) {

    let url = ENDPOINT + "/xgb-model-predict";
    let resp = await fetch(url, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(data),
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
    getPlayerData,
    getProdModelInfo,
    getSandboxResults,
    getPrediction
};