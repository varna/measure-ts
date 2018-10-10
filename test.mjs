import formatUnit from './'

(() => {
  const res = formatUnit('area')(654321)(['ft2', 'ac', 'mi2'])
  console.log(res)
})();