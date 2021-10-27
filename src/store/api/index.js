export const loadData = async (dispatch, action, url) => {
  dispatch(action.loadingStart())
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error`)
    }

    const text = await response.text()
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(text, "text/xml")
    const data = xmlDoc.getElementsByTagName("item")
    dispatch(action.loadingSuccess(Array.from(data)))
  } catch (error) {
    dispatch(action.loadingError(error.message))
  }
}
