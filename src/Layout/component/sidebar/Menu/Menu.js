import PropTypes from 'prop-types'
function Menu({children, classNames}) {
    return ( 
        <nav className={classNames}>
            {children}
        </nav>
     );
}
Menu.propTypes={
    children: PropTypes.node.isRequired
}
export default Menu;