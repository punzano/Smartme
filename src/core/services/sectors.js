const onResponseError = (response) => {
    console.log('error: ', response.error.error_code);

    return Promise.reject(response.error);
};

const handleResponse = (response) => (
    response.json().then(jsonResponse => {
        const data = jsonResponse.data;
        
        if (jsonResponse.code !== 200) {
            onResponseError(jsonResponse);
        }
        
        return data;
    })
);

const getSectors = () => {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('https://devapi.smartmeanalytics.com/api/ranking/list/sector', requestOptions)
        .then(handleResponse)
};

const getRanking = (idSector) => {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`https://devapi.smartmeanalytics.com/api/ranking/show/1/${idSector}`, requestOptions)
        .then(handleResponse)
};

export {
    getSectors,
    getRanking
};
