// The API layer which handles the actual syncing of Todos  with the server
import $ from 'jquery';

const BASE_URL = '/api/properties/';

const PropertyApi = {
  
  getAll: function(success, failure) {
    $.ajax({
      url: BASE_URL,
      type: 'GET',
      dataType: 'json',
      success: function(res) {
        success(res.data);
      },
      error: function(xhr, status, error) {
        failure(error);
      }
    });
  }
};

export default PropertyApi;
