import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'
import Loading from '../layout/Loading'

class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    if(value.respStatus==='loading'){
                        return (
                            <Loading />
                        )
                    }else {
                        return (
                            <React.Fragment>
                                <h1 className="display-4 mb-2"> <span className="text-danger">Contact</span> List</h1>
                                {value.contacts.map(contact => {
                                    return <Contact key={contact.id} contact={contact} />
                                })}
                            </React.Fragment>
                        )
                    }   
                }}
            </Consumer>
        )
    }
}



export default Contacts;