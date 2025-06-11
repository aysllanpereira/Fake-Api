

function customers() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('clients')
    store.customers.forEach(item => {
        // console.log(item);
        const div = document.createElement('div');
        div.classList.add('divContent');
        div.innerHTML = `
            <p>Identificador: ${item.id}</p>
            <p>Cliente: ${item.name}</p>
            <p>Idade: ${item.age}</p>
        `
        mainDiv.appendChild(div);
        content.appendChild(mainDiv)
    })
}

customers();