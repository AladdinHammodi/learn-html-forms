const https = require("https");

exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: success({ params: event.queryStringParameters }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

const html = String.raw;

function success({ params }) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
        <h1>
          ${params.name
            ? `Congrats ${params.name}!`
            : "Missing the <code>name</code> parameter"}
        </h1>
        <p>You sent:</p>
        <pre>${JSON.stringify(params, null, 2)}</pre>
      </body>
    </html>
  `;
}

// class HttpError extends Error {
//   constructor(msg, statusCode) {
//     super(msg);
//     this.statusCode = statusCode;
//   }
// }

// function fetch(url) {
//   return new Promise((resolve, reject) => {
//     https
//       .get(url, response => {
//         let data = "";

//         response.on("data", chunk => {
//           data += chunk;
//         });

//         response.on("end", () => {
//           if (response.statusCode !== 200) {
//             return reject(new HttpError("HTTP error", response.statusCode));
//           }
//           resolve(JSON.parse(data));
//         });
//       })
//       .on("error", error => {
//         reject(error);
//       });
//   });
// }

function missing({ params }) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
        <h1>Missing the <code>name</code> parameter</h1>
        <p>You sent:</p>
        <pre>${JSON.stringify(params, null, 2)}</pre>
      </body>
    </html>
  `;
}

// function pokemon({ name, id, sprites }) {
//   return html`
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//         <title>Document</title>
//       </head>
//       <body>
//         <h1>${name} #${id}</h1>
//         <img src="${sprites.front_default}" alt="" />
//       </body>
//     </html>
//   `;
// }

// function notFound({ name }) {
//   return html`
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//         <title>Document</title>
//       </head>
//       <body>
//         <h1>Couldn't find "${name}"</h1>
//         <p>Is it definitely a real pokémon?</p>
//       </body>
//     </html>
//   `;
// }
