module.exports = {
  getRequest(location, callback) {
    fetch(location)
      .then(function(response) {
        return response.json();
      })
      .then(callback)
      .catch(function(error) {
        console.error(error);
      });
  }
};
