import { DataJson } from "../../../app.js";

const urlSplit = window.location.href.split('?')
const id =  Number(urlSplit[urlSplit.length - 1])
const getInfo = new DataJson('html')

const data = async (id) => {
  const getData = await getInfo.dataPage()
  const data = getData[id]

  document.querySelector('.box-1 h1').innerHTML = data.title
  document.querySelector('.box-1 h3').innerHTML = data.subtitle
  document.querySelector('.box-2').innerHTML = data.article
}

data(id)
