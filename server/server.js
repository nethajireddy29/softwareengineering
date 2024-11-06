const http = require('http');
const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));
const server = http.createServer((req, res) => {
  let filePath = '';

  if (req.url === '/') {
    filePath = path.join(__dirname, 'home.html');
  } else if (req.url === '/products') {
    filePath = path.join(__dirname, 'products.html');
    res.send(`
      <table>
        <th>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>price</th>
          </tr>
        </th>
        <tb>
          ${products.map(product => `
            <tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.description}</td>
              <td>${product.price}</td>
            </tr>
          `)}
        </tb>
      </table>
    `);
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });

});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at port 3000`);
});
