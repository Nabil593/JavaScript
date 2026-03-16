const local = () => {
    const number = Math.ceil(Math.random()*100);
    localStorage.setItem('number', number);
}