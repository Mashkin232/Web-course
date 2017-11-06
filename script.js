function makeNote(note_obj){
  let note=document.createElement('div')
  note.classList.add('notes')
  note.classList.add(note_obj.color)

  let text=document.createElement('div')
  text.classList.add('text')

  let header=document.createElement('h1')
  header.textContent=note_obj.title

  let content=document.createElement('p')
  content.textContent=note_obj.content

  let action=document.createElement('a')
  action.classList.add('action')
  action.classList.add(note_obj.color)
  action.textContent="Actions"

  let image=document.createElement('img')
  image.classList.add('image')
  for (let im in note_obj.image){
    image.src=note_obj.image
  }

  note.appendChild(image)
  note.appendChild(text)
  text.appendChild(header)
  text.appendChild(content)
  note.appendChild(action)

  return note
}

let note_container=document.querySelector('body')

let block=document.createElement('div')
block.classList.add('block')

let group_prior=document.createElement('div')
group_prior.classList.add('group_prior')

let group_normal=document.createElement('div')
group_normal.classList.add('group_normal')

let prior=document.createElement('h1')
prior.textContent="Приоритетные";

let norm=document.createElement('h1')
norm.textContent="Обычные";

note_container.appendChild(block)
block.appendChild(group_prior)
block.appendChild(group_normal)
group_prior.appendChild(prior)
group_normal.appendChild(norm)

for (let note of data){
  if (note.group==='priority'){
    group_prior.appendChild(makeNote(note))
  }
  else {
    group_normal.appendChild(makeNote(note))
  }
}
