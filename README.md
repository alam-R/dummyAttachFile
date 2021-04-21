# dummyAttachFile
Tiny cypress command to upload fast large files to an input


# Installation
```bash
npm i dummyattachfile
```

Add it to `cypress/support/commands.js`:

```javascript
import 'dummyattachfile';
```

# Use

```javascript
<inputtypefile>.dummyAttachFile(<bytes>, <filename>, <filetype>)
// Defaults: 1024 bytes, 'whatever', ''
```
