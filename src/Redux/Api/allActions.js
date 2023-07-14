import apiInstance from "./index";

const apiAllActions = (datos) => {
  return  apiInstance.get('/api/TestService',datos)

  .then(res => { 
    return res.data;
    
  }).catch(error => {
    console.error(error.response);
    throw error.response
  });
}

export default apiAllActions;