# Simple Digital Clock

## Html Source Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" type="text/css">
    <title>Digital Clock</title>
</head>
<body>
    <div class="center">
        <div id="banner"><span>Your local time</span></div>
        <div id="clock"></div>
    </div>

    <script src="./script.js"></script>
</body>
</html>
```

## Javascipt Source Code
```js
const clock = document.querySelector('#clock');



setInterval( () => {
    let time = new Date();
    let actalTime = time.toLocaleTimeString();
    clock.innerHTML = actalTime;
}, 1000)
```
