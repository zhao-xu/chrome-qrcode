qrcode.callback = function(text) {
    if (text == 'error decoding QR Code') {
        alert('无法解析二维码图片')
    } else {
        prompt('', text);
    }
};

function onClickHandler(info, tab) {
    if (info.menuItemId == 'decode') {
        qrcode.decode(info.srcUrl);
    }
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id:'decode',
        title:chrome.i18n.getMessage('decode'),
        contexts:['image']
    })
});
