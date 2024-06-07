// const element=React.createElement('h1',{},);
// const root=ReactDOM.createRoot(document.getElementById('cse'));
// root.render(element);


// const element=React.createElement('div',
//         {id:'A'},
//     React.createElement('div',
//         {id:'Ac'},
//     React.createElement('div',{},'First child 221')  
// )
// );


// const heading = React.createElement('h3', { id: 'parent' }, [
//     React.createElement('h2', { id: 'child' },[
//             React.createElement('h1', {}, 'my name is uttam yadav !!'),
//             React.createElement('h3', {}, 'my name is uttam yadav !!'),
// ]),

//     React.createElement('h2', { id: 'child1' },

//         [React.createElement('h1', {}, 'my name is uttam yadav !!'),
//         React.createElement('h3', {}, 'my name is uttam yadav !!'),
//         ]),
//     ]);
// const root = ReactDOM.createRoot(document.getElementById('cse'));
// root.render(heading);
// const nam=React.createElement('div',{id:parent},[
//     React.createElement('div',{id:'child1'},
//         [
//             React.createElement('h1',{},'child1 a'),
//             React.createElement('h1',{},'child1 b'),
//         ]
//     ),
//     React.createElement('div',{id:'child2'},
//         [
//             React.createElement('h1',{},'child2 a'),
//             React.createElement('h1',{},'child2 b'),
//         ]
//     ),
// ]);


// const root = ReactDOM.createRoot(document.getElementById('cse'));
// root.render(nam);

const element=React.createElement('h1',{},"hello abhishek");
const rooot=ReactDOM.createRoot(document.getElementById('cse'));
rooot.render(element);