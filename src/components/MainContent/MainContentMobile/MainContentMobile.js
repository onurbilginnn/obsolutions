import React, {Suspense, useEffect, useState} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import * as actions from '../../../store/actions/index';

import styles from './MainContentMobile.module.css';

const Home = React.lazy (() => {
  return import ('../HomeContainer/HomeContainer');
});

const About = React.lazy (() => {
  return import ('../AboutContainer/AboutContainer');
});

const Services = React.lazy (() => {
  return import ('../ServicesContainer/ServicesContainer');
});

const Projects = React.lazy (() => {
  return import ('../ProjectsContainer/ProjectsContainer');
});

const Contact = React.lazy (() => {
  return import ('../ContactContainer/ContactContainer');
});


const MainContentMobile = props => {
    const [path, setPath] = useState(props.location.pathname);
    const dispatch = useDispatch();

    useEffect(() => {
        setPath(props.location.pathname);
    }, [props.location.pathname]);

    const closeSideDrawerHandler = () => {
      dispatch(actions.closeSideDrawer());
  }

  return (
    <div className={styles.MainContentMobile} onClick={closeSideDrawerHandler}>
    {path !== '/' && <div className={styles.FreeZoneTop} ></div>}
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/contact" exact render={props => (<Contact {...props} activateBreakText /> )} />
          <Route path="/projects" exact render={props => (<Projects {...props} activateBreakText /> )} />
          <Route path="/services" exact render={props => (<Services {...props} activateBreakText /> )} />
          <Route path="/about" exact render={props => (<About {...props} activateBreakText /> )} />
          <Route path="/" exact component={Home}/>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    <div className={styles.FreeZoneBottom} ></div>

    </div>
  );
};

export default withRouter (MainContentMobile);
