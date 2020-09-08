var prk = '2eacfe7e800ebe75cc24d06c724427883c87c047f1716fe3363601c0919e14a4'
function ecHexSign (data, privateKey) {
  if (privateKey) {
    prk = privateKey
  }
  data = cwv.Buffer.Buffer.from(data, 'utf8')
  return cwv.KeyPair.genFromPrikey(prk).ecHexSign(data)
}
function genPubkey (privateKey) {
  prk = privateKey || prk
  return cwv.KeyPair.genFromPrikey(prk).hexPubkey
}
cwv.ecHexSign = ecHexSign
cwv.genPubkey = genPubkey
