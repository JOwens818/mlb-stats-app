//const ENDPOINT = "http://localhost:5001/api";
const ENDPOINT = 'https://mlb-app.i8hi6t844mu.us-south.codeengine.appdomain.cloud/api';

function handleErrors(resp) {
    if (!resp.ok) {
        throw Error(resp.statusText);
    }
    return resp;
}


async function getHistogramData(field) {
    let url = ENDPOINT + "/charts/histogram?field=" + field;
    return await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
}


async function getHistogramStats(field) {
    let url = ENDPOINT + "/charts/histogram-stats?field=" + field;
    return await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
}


async function getScatterData(field) {
    let url = ENDPOINT + "/charts/scatter?field=" + field;
    return await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
}


async function getPredictedStatsAll() {
    let url = ENDPOINT + "/predicted-stats-all";
    return await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
}

async function getRadarData(playerID) {
    let url = ENDPOINT + "/charts/radar?playerid=" + playerID;
    return await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
}


async function getLineData(playerID) {
    let url = ENDPOINT + "/charts/line?playerid=" + playerID;
    return await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
}


async function getPlayerData(playerID) {
    let url = ENDPOINT + "/player-stats?playerid=" + playerID;
    return await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
}


async function getProdModelInfo() {
    let url = ENDPOINT + "/prod-model-info";
    return await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
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
    return await fetch(url, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(data),
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
}


async function getPrediction(data) {

    let url = ENDPOINT + "/xgb-model-predict";
    return await fetch(url, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'}),
        body: JSON.stringify(data),
        mode: 'cors'
    })
    .then(handleErrors)
    .then(resp => resp.json())
    .catch(error => { 
        let msg = {"errorMsg": error};
        console.error(msg);
        return msg;
    });
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