import Page from "./js/components/Page"
import store from "./js/bll/store"

const renderPage = (store) => {
  const root = document.querySelector('body')
  root.append(Page(store))
}
renderPage(store)

