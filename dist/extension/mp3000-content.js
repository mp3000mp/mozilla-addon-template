console.log('Extension MP3000 loaded (content)')

function getPicture(node) {
    if (node.tagName === 'IMG') {
        return node
    }

    const pictures = node.getElementsByTagName('img')
    if (pictures.length === 0) {
        return null
    }
    if (pictures.length > 1) {
        console.log('error: several img')
        return null
    }

    return pictures[0]
}

document.addEventListener('click', (event) => {
    if (!event.ctrlKey) {
        return
    }

    const picture = getPicture(event.target)
    if (picture === null) {
        return
    }

    const {origin,pathname} = window.location
    let path = picture.getAttribute('src')
    if (path.substr(0, 2) === './') {
        const arr = pathname.split('/')
        arr.pop()
        path = origin+arr.join('/')+path.substr(1)
    }
    if (path.substr(0, 1) === '/') {
        path = origin+path
    }
    browser.runtime.sendMessage({path})
})
