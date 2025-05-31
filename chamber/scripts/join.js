//para obtener y mostrar los datos del formulario join.html
const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Name ${myInfo.get('first')} ${myInfo.get('last')} </p>
<p>Organizational title ${myInfo.get('ordinance')} ${myInfo.get('date')} in the ${myInfo.get('location')}</p>
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Your email is: ${myInfo.get('email')}`



//js para los botones que dan mas informacion sobre las membrecias 

