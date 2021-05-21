export default function dummyAttachFile(subject, sizeBytes = 1024, fileName = 'whatever.txt', fileType = 'text/plain') {

    // if arguments do not respect their type
    // convert them to defaults
    if (typeof sizeBytes !== 'number') {
        sizeBytes = 1024
    }
    if (typeof fileName !== 'string') {
        fileName = 'whatever.txt'
    }
    if (typeof fileType !== 'string') {
        fileType = 'text/plain'
    }

    const arrBuffer = new ArrayBuffer(sizeBytes)
    const el = subject[0]
    const testFile = new File([arrBuffer], fileName, {type: fileType})
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(testFile)
    el.files = dataTransfer.files
    el.dispatchEvent(new Event('change', { bubbles: true }))
    
}