/* global Logger */

const token = PropertiesService.getPropertry('API_TOKEN');
Logger.log(token);

// eslint-disable-next-line no-unused-vars
function timeLog() {
    Logger.log(new Date())
  }