const datos = [
    {
        id: 1,
        title: 'Iron Man',
        year: 2008,
    },
    {
        id: 2,
        title: 'Spiderman HomeComing',
        year: 2008,
    },
    {
        id: 1,
        title: 'Iron Man II',
        year: 2008,
    },
    {
        id: 1,
        title: 'Iron Man III',
        year: 2008,
    }
]

const getDatos = (dataArray) => {
    return new Promise((resolve, reject) => {
        if (dataArray.length == 0) {
            reject(new Error('No existen datos'));
        }
        setTimeout(function () {
            resolve(dataArray);
        }, 1500);
    });
}

async function fetchingData() {
    try {
        const datosFetched = await getDatos(datos);
        console.log(datosFetched);
    } catch (error) {
        console.log(error.message);
    }
}

fetchingData();