function fetchData(): Promise<string> {
    // Write your code here
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data retrieved")
        }, 1000)
    })}

    function processData(data: string): Promise<string> {
    // Write your code here
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data + " and processed")
        }, 2000)
    })}

    const newPromise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data retrieved" + " and processed");
        }, 2000);
        });
    }

function displayData(data: string) {
    // Write your code here
    console.log(data)
}

// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));