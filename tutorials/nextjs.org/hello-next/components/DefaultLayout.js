/*
 * DefaultLayout.js
 *
 * This is the tutorial MyLayout component from the nextjs.org Learn module.
 */
import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
);

export default Layout;
