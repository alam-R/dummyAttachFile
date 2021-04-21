export default function dummyAttachFile(subject, sizeBytes = 1024, fileName = 'whatever', fileType = '') {

    const arrBuffer = new ArrayBuffer(sizeBytes)
    const el = subject[0]
    const testFile = new File([arrBuffer], fileName, {type: fileType})
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(testFile)
    el.files = dataTransfer.files
    el.dispatchEvent(new Event('change', { bubbles: true }))
    
}