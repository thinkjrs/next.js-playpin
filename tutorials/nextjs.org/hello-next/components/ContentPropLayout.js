/*
 * PropLayout.js
 *
 * The prop layout exemplar from the nextjs.org initial tutorial.
 *
 * Content as props.
 */
import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ff0000'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div> 
);

export default Layout;
