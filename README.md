# dummyAttachFile
Tiny cypress command to upload fast large files to an HTML input type="file".
The file that will be uploaded is empty. Multiple attribute is not supported {yet}.

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
cy.get('input').dummyAttachFile(<bytes>, <filename>, <filetype>)

// <bytes>    Number or String | Optional | Default value: 1024
// Number expressed in bytes
// Valid String Format: d+K, d+M eg. 666K, 500M etc.
// Current file limit: 1GB
// <filename> String | Optional | Default value: 'whatever.txt'
// <filetype> String | Optional | Default value: 'text/plain'

```
