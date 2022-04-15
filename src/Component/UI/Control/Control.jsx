import React from 'react';
import classes from './Control.module.css'

export const Control = (props) => {
    return (
        <div style={{backgroundColor: props.theme ? '#19202d' : '#fff'}} className={classes.Control}>
            <div className={classes.ControlMobile}>
                <input style={{backgroundColor: props.theme ? '#19202d' : '#fff'}} value={props.title} onChange={props.filterTitle} placeholder="Filter By Title..." />
                <button style={{backgroundColor: props.theme ? '#19202d' : '#fff'}} ><img src="./assets/mobile/icon-filter.svg" alt="icon"/></button>
                <button><img src="./assets/desktop/icon-search.svg" alt="icon"/></button>
            </div>

            <div className={classes.ControlDesktop}>
                <div className={classes.Search}>
                    <img src="./assets/desktop/icon-search-purple.svg" alt="icon"/>
                    <input style={{backgroundColor: props.theme ? '#19202d' : '#fff'}} value={props.title} onChange={props.filterTitle} placeholder="Filter by title..."/>
                </div>
                <div className={classes.Location}>
                <img src="./assets/desktop/icon-location.svg" alt="icon"/>
                    <input style={{backgroundColor: props.theme ? '#19202d' : '#fff'}} value={props.location} onChange={props.filterLocation} placeholder="Filter by location..."/>
                </div>
                <div className={classes.FullTime}>
                    <input checked={props.isCheck} onChange={props.contract} type="checkbox" />
                    <p>Full Time</p>
                </div>
            </div>
        </div>

    )
}
