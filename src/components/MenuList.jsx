import { MenuItemsList } from "../data";
import MenuItem from "./MenuItem";

const MenuList = () => {
    return (
        <div className="text-gray-700">
            <h2 className="items-center text-center justify-center font-bold text-5xl">Menú</h2>
            <div className="flex flex-wrap flex-col sm:flex-col lg:flex-row justify-center text-slate-600">
                <>
                    {MenuItemsList.map((item, index) => {
                        return <MenuItem key={"menu-item-" + index} {...item} />
                    })}
                </>
            </div>
        </div>
    );
}

export default MenuList;