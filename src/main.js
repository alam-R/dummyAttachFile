export default function dummyAttachFile(subject, sizeBytes = 1024, fileName = 'whatever.txt', fileType = 'text/plain') {

    // if bytes do not respect the FILE_LIMIT
    // force it to FILE_LIMIT
    const FILE_LIMIT = 1047527424

    // if arguments do not respect their type
    // convert them to defaults

    if (typeof sizeBytes !== 'number') {
        if (typeof sizeBytes === 'string') {
        const re = /^\d+[MK]{1}$/
        if (re.test(sizeBytes)) {
            const MB = sizeBytes.charAt(sizeBytes.length-1)
            const parsed = parseInt(sizeBytes.substring(0, sizeBytes.length-1), 10)
            // is it possible isNaN to be true??
            // since regexp has handled the format?
            if (isNaN(parsed)){
            sizeBytes = 1024
            }
            else {
            // 'K' Kilobytes case
            sizeBytes = parsed*1024
            // 'M' Megabytes case
            if ( MB === 'M') {
                sizeBytes *= 1024
            }

            }
        } else {
            sizeBytes = 1024
        }
        }
        else {
        sizeBytes = 1024
        }
    }

    if (sizeBytes > FILE_LIMIT) {
        sizeBytes = FILE_LIMIT
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