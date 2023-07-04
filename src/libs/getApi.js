export async function getApi(url, props) {
  const req = await fetch(url, props)
  const res = await req.json()
  return res
}