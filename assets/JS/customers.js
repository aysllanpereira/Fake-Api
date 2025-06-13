

function customers() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    // const mainDiv = document.createElement('div');
    // mainDiv.classList.add('clients')
    store.customers.forEach(item => {
        // console.log(item);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <p>Cliente: <strong>${item.name}</strong></p>
            <p>Idade: <strong>${item.age} anos</strong></p>
        `
        content.appendChild(div);
        // content.appendChild(mainDiv)
    })
}

customers();