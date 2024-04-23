<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rampy</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Rozładowywanie Ramp</h1>
  </header>
  <main>
    <div id="ramps-container"></div>
    <div id="controls">
      <select id="ramp-select">
        <optgroup label="Rampy">
          <option value="1">Rampa 1</option>
          <option value="2">Rampa 2</option>
          <option value="3">Rampa 3</option>
          <!-- Dodaj więcej opcji dla ramp 4-15 -->
        </optgroup>
        <optgroup label="Surowiec i produkcja">
          <option value="17">Rampa 17</option>
          <option value="18">Rampa 18</option>
          <option value="19">Rampa 19</option>
          <!-- Dodaj więcej opcji dla ramp 20-30 -->
        </optgroup>
      </select>
      <button id="add-ramp-btn">Dodaj rampę</button>
    </div>
  </main>
  <script src="script.js"></script>
</body>
</html>
