# How to use
Load the script first
```html
<script src="https://yonle.github.io/Poltergeist.js/Poltergeist.js"></script>
```
Tell to script which element should be triggered
```javascript
Poltergeist("a");
// This will listen to all `a` element.
// To listen to single element only, Do this:
Poltergeist(document.getElementById("element"));
```

### To listening to another Event than `click`:
```javascript
Poltergeist("a", "focus");
```

# Community
- [Discord](https://dsc.gg/yonle)
- [Telegram](https://t.me/yonlecoder)
