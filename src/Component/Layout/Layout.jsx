import React, {Component} from 'react'
import FullJob from '../../Container/Fulljob/FullJob'
import { Route, Switch } from 'react-router-dom'
import Job from '../../Container/Job/Job'
import classes from './Layout.module.css'

export class Layout extends Component {

    state = {
        isDarkMode : false
    }

    toggleDarkModeHandler = () => {
        this.setState({isDarkMode: !this.state.isDarkMode})
        
    }

    render () {
        console.log(this.state.isDarkMode);
        return (
            <div style={{backgroundColor : this.state.isDarkMode ? '#121721' : 'whitesmoke'}} className={classes.Layout}> 
                 <header>
                    <nav>
                        <img src="/assets/desktop/logo.svg" alt="bgimage"/>
                        <div className={classes.switch}>
                        <span><img src="/assets/desktop/icon-sun.svg" alt="light-mode" /></span>
                        <input onClick={this.toggleDarkModeHandler} type="checkbox" id="toggleAll" />
                        <label htmlFor="toggleAll"></label>
                        <span><img src="/assets/desktop/icon-moon.svg" alt="dark-mode" /></span>
                        </div>
                    </nav>
                </header>
                <Switch>
                <Route path="/" exact render={(props) => <FullJob {...props} theme={this.state.isDarkMode} />}/>
                <Route path="/:id" exact render={(props) => <Job {...props} theme={this.state.isDarkMode} />} />
                </Switch>
            </div>
        )
    }
   
}
