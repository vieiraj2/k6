// Import the HTTP Request and Check modules
import { check } from "k6";
import http from "k6/http";

export default function () {
  // Define URL and payload
  const url = "https://test-api.k6.io/auth/basic/login/";
  const payload = JSON.stringify({
    username: "test_case",
    password: "1234",
  });

  // Define the headers
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Send a POST request to k6 test API and save the response as a variable
  // Public endpoint, HTTP basic-auth login
  const response = http.post(url, payload, params);

  // Check if the response status code was 200
  check(response, { "response code was 200": (response) => response.status == 200 });
}
