import { loadingError, loadingStart, loadingSuccess } from "./actions"

const ARTICLES_URL = "https://sweb.ru/export/turbojournal/"

export const getArticles =
  () =>
  async (dispatch, _, { loadData }) => {
    await loadData(
      dispatch,
      { loadingError, loadingStart, loadingSuccess },
      ARTICLES_URL,
    )
  }
