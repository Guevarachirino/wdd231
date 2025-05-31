//para obtener y mostrar los datos del formulario join.html
const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Name ${myInfo.get('first')} ${myInfo.get('last')} </p>
<p>Organizational title: ${myInfo.get('organizational-title')} </p>
<p>Your email is: ${myInfo.get('email')}
<p>Your Phone: ${myInfo.get('phone')}</p>
<p>Organization: ${myInfo.get('organization')}</p>
<p>Business Description: ${myInfo.get('textarea')}</p>
<p>Membership Level: ${myInfo.get('membership')}</p>
<p>Current Data: ${myInfo.get('form_timestamp')}</p>
`



//js para los botones que dan mas informacion sobre las membrecias 

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    }
]