import React, { Component } from 'react';
import { Control } from '../../Component/UI/Control/Control';
import classes from './FullJob.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner } from '../../Component/UI/Spinner/Spinner';

export class FullJob extends Component {

    state = {
        jobs: null, 
        selectedId: null,
        filterByTitle: '',
        filterByLocation: '',
        isFullTime: false
    }

    componentDidMount() {
        axios.get('/data.json')
        .then(res => {
            this.setState({jobs: res.data})
        })
    }

    jobSelectedId = (id) => {
        this.setState({selectedId: id})
    }

    filterTitleHandler = (e) => {
        this.setState({filterByTitle: e.target.value})
    }

    filterLocationHandler = (e) => {
        this.setState({filterByLocation: e.target.value})
    }

    fullTimeHandler = () => {
        this.setState({isFullTime: !this.state.isFullTime})
    }

    render() {

        let jobs =<div style={{position: 'fixed', left: '50%', top: '50%'}}><Spinner/></div> 

        if (this.state.jobs) {
            jobs = this.state.jobs.filter(job => {

                if (this.state.filterByTitle) {
                    return job = job.position.toLowerCase().includes(this.state.filterByTitle.toLowerCase())
                }

                if (this.state.filterByLocation) {
                    return job = job.location.toLowerCase().includes(this.state.filterByLocation.toLowerCase())
                }

                if (this.state.isFullTime) {
                    return job = job.contract.includes('Full Time')
                }

                return job
            })
            .map(job => {
                return (
                    <Link to={'/' + job.id} key={job.id} >
                        <article style={{backgroundColor: this.props.theme ? '#19202d' : '#fff'}} className={classes.Job}>
                            <div className={classes.Container} onClick={() => this.jobSelectedId(job.id)}> 
                            <section className={classes.logo}>
                                <img style={{backgroundColor: job.logoBackground}} src={`${job.logo}`} alt="logo"/>
                            </section>
                            <section className={classes.JobDesc}>
                                <p>{job.postedAt}</p>
                                <p>{job.contract}</p>
                            </section>
                            <h1 style={{color: this.props.theme ? '#fff' : '#000'}} >{job.position}</h1>
                            <section className={classes.JobLocation}>
                                <p>{job.company}</p>
                                <p>{job.location}</p>
                            </section>
                            </div>
                        </article>
                    </Link>
                )
            })
        }
        return (
            <div>
                <Control 
                title={this.state.filterByTitle} 
                filterTitle={this.filterTitleHandler}
                location={this.state.filterByLocation}
                filterLocation={this.filterLocationHandler}
                contract={this.fullTimeHandler}
                isCheck={this.state.isFullTime}
                theme={this.props.theme}
                />
                <div className={classes.FullJob}>
                    {jobs}
                </div>
            </div>
        )
    }
}

export default FullJob
