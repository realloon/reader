import { marked } from 'marked'

const button = document.querySelector('button')!
const article = document.querySelector('article')!

button.addEventListener('click', async () => {
  const text = await navigator.clipboard.readText()
  if (text.trim() == '') return

  article.innerHTML = await marked(text)
  button.classList.add('hover')
})
