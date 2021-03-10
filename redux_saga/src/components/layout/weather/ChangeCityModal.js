import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import React, { Component } from 'react'

export default class ChangeCityModal extends Component {
    state = {
        city: null
    }

    inputCity = (e) => {
        this.setState((state, props) => {
            return {city: e.target.value};
        })
    }

    render() {
        const props = this.props;
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">更改城市</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">城市</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="北京"
                        onChange={this.inputCity}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onSave.bind(this, this.state.city)}>更新</Button>
                    <Button onClick={props.onHide}>取消</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
