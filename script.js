const observerForInitialLoad = new MutationObserver((mutations) => {
  mutations.forEach((mutationRecord) => {
    ;[...mutationRecord.addedNodes].forEach((node) => {
      if (node.nodeName === 'BODY') {
        node.classList.add('MY_EXTENSION_BLUE')
      }
    })
  })
})

observerForInitialLoad.observe(document, {
  childList: true,
  subtree: true,
})
