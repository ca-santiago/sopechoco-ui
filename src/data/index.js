
export const Topins = [
    { title: 'Salpicón' },
    { title: 'Salchicha' },
    { title: 'Chicharron' },
    { title: 'Chicharron prensado' },
    { title: 'Bistec', extraPrice: 10 },
    { title: 'Nopales' },
    { title: 'Cochinita' },
    { title: 'Papas con chorizo' },
    { title: 'Chuleta ahumada' }
];

const tacosTopins = Topins.filter(t => ![].includes(t));
const sopeTopins = Topins.filter(t => !['Chicharron prensado'].includes(t));
const quesadillaTopins = Topins.filter(t => ![].includes(t));


export const MenuItemsList = [
    {
        title: 'Sope',
        description: '',
        topins: sopeTopins,
        imgUri: 'https://personel-public-files-e42.s3.amazonaws.com/oie_Afg6x2BFGbnI.jpg',
    },
    {
        title: 'Quesadilla',
        description: 'Rica quesadilla de tortilla de mano con guiso artesanal',
        topins: quesadillaTopins,
        imgUri: 'https://personel-public-files-e42.s3.amazonaws.com/oie_Qv4KhJSKmysh.jpg'
    },
    {
        title: 'Tacos',
        description: 'Tacos de guiso con arroz',
        topins: tacosTopins,
        imgUri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2023/01/receta-de-tacos-de-suadero-con-costra-de-queso.jpg'
    }
]
