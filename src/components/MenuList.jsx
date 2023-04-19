import MenuItem from "./MenuItem";

const topins = [
    { title: 'Salpicón' },
    { title: 'Salchicha' },
    { title: 'Chicharron' },
    { title: 'Chicharron prensado' },
    { title: 'Bistec', extraPrice: 10 },
    { title: 'Nopales' },
    { title: 'Cochinita' },
    { title: 'Papas con chorizo' },
    { title: 'Chuleta ahumada' }
]

const tacosTopins = topins.filter(t => ![].includes(t));
const sopeTopins = topins.filter(t => !['Chicharron prensado'].includes(t));
const quesadillaTopins = topins.filter(t => ![].includes(t));

const menuItemsList = [
    {
        title: 'Sope',
        description: '',
        topins: sopeTopins,
        imgUri: 'https://lh3.googleusercontent.com/p/AF1QipOgIIRVwXFZ447Csoo1jGRfBKZSpbwyFXCsJ7t9=s680-w680-h510',
    },
    {
        title: 'Quesadilla',
        description: 'Rica quesadilla de tortilla de mano con guiso artesanal',
        topins: quesadillaTopins,
        imgUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXgmhhjLPdU2EYpoeeZamgKkLMwzVi2E7jA&usqp=CAU'
    },
    {
        title: 'Tacos',
        description: 'Tacos de guiso con arroz',
        topins: tacosTopins,
        imgUri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2023/01/receta-de-tacos-de-suadero-con-costra-de-queso.jpg'
    }
]

const MenuList = () => {
    return (
        <>
            <h2 className="items-center text-center justify-center font-bold text-5xl">Menú</h2>
            <div className="flex flex-wrap flex-col sm:flex-col lg:flex-row justify-center">
                <>
                    {menuItemsList.map((item, index) => {
                        return <MenuItem key={"menu-item-" + index} {...item} />
                    })}
                </>
            </div>
        </>
    );
}

export default MenuList;