function trackClick(label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-SEU-ID-AQUI/SEU-LABEL',
            'event_category': 'WhatsApp',
            'event_label': label
        });
    }
}