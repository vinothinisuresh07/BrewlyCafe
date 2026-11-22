import MenuItem from "./MenuItem";
function Menu({menu,onAdd}){
    return(
        <section id="menu">
            <h2>Menu</h2>
            <div className="menu-grid">
                {menu.map((item)=>(
                    <MenuItem key={item.id} onAdd={onAdd} item={item}/>
                ))}
            </div>
        </section>
    )
}
export default Menu;