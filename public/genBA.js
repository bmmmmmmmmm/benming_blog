window.onload = () => {
  try {
    const BAMap = new Map([
      ['koubenming.com', ['豫ICP备2021020491号-1']],
      ['www.koubenming.com', ['豫ICP备2021020491号-1']],
      ['kbm.ink', ['豫ICP备2021020491号-2']],
      ['www.kbm.ink', ['豫ICP备2021020491号-2']],
      ['kou.ink', ['豫ICP备2021020491号-3']],
      ['www.kou.ink', ['豫ICP备2021020491号-3']],
      ['bester.kou.ink', ['豫ICP备2021020491号-3']],
      // ['bester.cc', ['豫ICP备2021020491号-4']],
      // ['www.bester.cc', ['豫ICP备2021020491号-4']],
    ])
    const BA = document.createElement('p')
    BA.innerHTML = BAMap.get(window.location.host) ?? '豫ICP备2021020491号';
    document.getElementById('ICP_BA').appendChild(BA)
  } catch (err) {
    console.error(err)
  }
}
