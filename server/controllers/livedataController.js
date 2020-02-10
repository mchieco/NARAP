const express = require("express");
const axios = require('axios');
const qs = require('query-string');
module.exports = {
    async getData() {
        const response = await axios.post('https://redcap.vanderbilt.edu/api/',
        qs.stringify({
          token: 'A4FD20E1552AD49113B0998FA226EF9E', // gave the values directly for testing
          content: 'record',
          format: 'json',
          fields: 'fake_data_flag, ask_age, age, verbal_consent_permission',
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
      return response.data;
    }
}