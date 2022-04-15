import React, { Component } from 'react'
import axios from 'axios'
import { Spinner } from '../../Component/UI/Spinner/Spinner';
import classes from './Job.module.css'

export default class Job extends Component {


    state = {
        loadedPost: null
    }

    componentDidMount() {

        if ( this.props.match.params.id) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( 'data.json')
                    .then( response => {
                        window.scroll({top:0})
                       this.setState({loadedPost: response.data})
                    } );
            }
        }
    }

    render() {

        let data = <Spinner />

        if (this.state.loadedPost) {

           data = this.state.loadedPost.filter(data => {
               return data.id === this.props.match.params.id
           })
           .map(job => {
               return (
                   <article key={job.id}>
                       <section style={{backgroundColor: this.props.theme ? '#19202d' : '#fff'}} className={classes.CompanySite}>
                           <div style={{backgroundColor: job.logoBackground}} className={classes.Logo}>
                                <img src={`${job.logo}`} alt="logo"/>
                           </div>
                            <div className={classes.CompanyWebsite}>
                                <h1  style={{color: this.props.theme ? '#fff' : '#000'}} >{job.company}</h1>
                                <p><a href={job.website}>{job.website}</a></p>
                            </div>
                            <a href={job.website}><button style={{backgroundColor: this.props.theme ? '#2a313c' : 'whitesmoke'}}>Company Site</button></a>
                       </section>

                       <section style={{backgroundColor: this.props.theme ? '#19202d' : '#fff'}} className={classes.JobDetail}>
                           <div>
                               <section>
                                   <section className={classes.JobApply}>
                                       <div>
                                       <div className={classes.JobPosted}>
                                            <p>{job.postedAt}</p>
                                            <p>{job.contract}</p>
                                        </div>
                                            <h1 style={{color: this.props.theme ? '#fff' : '#000'}} >{job.position}</h1>
                                            <h6>{job.location}</h6>
                                       </div>
                                            <a href={job.apply}><button>Apply Now</button></a>
                                   </section>
                                        <div>
                                            <p>{job.description}</p>
                                        </div>
                               </section>
                               <section>
                                    <div className={classes.Requirement}>
                                        <h1 style={{color: this.props.theme ? '#fff' : '#000'}} >Requirements</h1>
                                        <p>{job.requirements.content}</p>
                                        <ul>
                                            {job.requirements.items.map(list => {
                                                return <li key={Math.random()}>{list}</li>
                                            })}
                                        </ul>
                                    </div>

                                    <div className={classes.Role}>
                                        <h1 style={{color: this.props.theme ? '#fff' : '#000'}} >What You Will Do</h1>
                                        <p>{job.role.content}</p>
                                        <ol type="1">
                                            {job.role.items.map(list => {
                                                return <li key={Math.random()}>{list}</li>
                                            })}
                                        </ol>
                                    </div>
                               </section>
                           </div>
                       </section>
                       <section style={{backgroundColor: this.props.theme ? '#19202d' : '#fff'}} className={classes.Footer}>
                            <div className={classes.FooterDetail}>
                                <h1 style={{color: this.props.theme ? '#fff' : '#000'}}>{job.position}</h1>
                                <p>{job.company}</p>
                            </div>
                            <a href={job.apply}>
                            <button>
                                Apply Now
                            </button>
                            </a>
                       </section>
                   </article>
               )
           })
           
        }

        return (
            <div className={classes.Job}>
                {data}
            </div>
        )
    }
}
