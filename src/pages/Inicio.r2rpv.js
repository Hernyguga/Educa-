// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // <!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mi App de Botones</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
    }
    .boton {
        width: 150px;
        height: 80px;
        margin: 10px;
        font-size: 18px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .boton:hover {
        background-color: #0056b3;
    }
</style>
</head>
<body>

<h1>Mi App de Botones</h1>

<div class="container">
    <button class="boton">Botón 1</button>
    <button class="boton">Botón 2</button>
    <button class="boton">Botón 3</button>
    <button class="boton">Botón 4</button>
    <button class="boton">Botón 5</button>
    <button class="boton">Botón 6</button>
    <button class="boton">Botón 7</button>
    <button class="boton">Botón 8</button>
</div>

</body>
</html>

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
