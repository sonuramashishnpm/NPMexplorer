const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const formId = 'YOUR_FORM_ID'; // Replace with your Netlify form ID
  const accessToken = 'YOUR_NETLIFY_ACCESS_TOKEN'; // Replace with your Netlify API token

  try {
    const response = await fetch(`https://api.netlify.com/api/v1/forms/${formId}/submissions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch submissions' }),
    };
  }
};