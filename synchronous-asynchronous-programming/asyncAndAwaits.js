///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 'This is asynchronous data';
        resolve(data);
      }, 1000);
    });
  }
  
  async function fetchAndLogData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchAndLogData();
  