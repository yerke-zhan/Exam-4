
let button = document.getElementById('btn');

button.addEventListener('click', fetchData);

async function fetchData() {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7')
    if (!response.ok) {
      throw new Error('Деректер алу мүмкін болмады')
    }else{
        console.log('Деректер алынуда...')
    }
    const data = await response.json()

    console.log(data)

    let random = Math.floor(Math.random() * data.record.tasks.length);
    console.log(random)
    console.log(data.record.tasks[random].title)
    
    let task = data.record.tasks[random].title;
    let text = document.getElementById('text');
    text.innerHTML = task;

    
  } catch (error) {
    console.log(error)
  }
}