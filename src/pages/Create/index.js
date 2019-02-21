import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {CreateText} from './create.text';
import {Container, Input, Row, Col, Button} from 'reactstrap';
import {Loader, FormHeaderHerb, JumbotronDescriptionCreate} from '../../components';

class create extends Component {

    state = {
        loading: true,
        search: '',
        image: null,
        imagePreviewUrl: '',
        title: '',
        description: '',
        benefit: ''
    };

    fileSelectHandler = event => {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = () => {

    };

    componentDidMount(){
        this.setState({
            loading: false,
        })
    }

    render() {
        const {image, imagePreviewUrl} = this.state;
        const {fileSelectHandler, handleChange, handleSubmit} = this;
        const staticText = tools.checkLanguage(CreateText);
        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <FormHeaderHerb fileSelectHandler={fileSelectHandler}
                                            image={image}
                                            imagePreviewUrl={imagePreviewUrl}/>
                        </Col>
                        <Col lg={6} md={12}>
                            <h5 className="text-capitalize">{staticText.title}</h5>
                            <Input type="text" name="title" placeholder={staticText.placeholderTitle} onChange={handleChange}/>
                            <h5 className="text-capitalize">{staticText.description}</h5>
                            <Input type="text" name="description" placeholder={staticText.placeholderDescription} onChange={handleChange}/>
                            <h5 className="text-capitalize">{staticText.benefit}</h5>
                            <Input type="text" name="benefit" placeholder={staticText.placeholderBenefit} onChange={handleChange}/>
                            <hr/>
                            <span className="d-flex justify-content-end">
                                <Button color="primary" outline onClick={handleSubmit}>{staticText.btn}</Button>
                            </span>
                        </Col>
                    </Row>
                    <JumbotronDescriptionCreate/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang
    }
};

export default connect(mapStateToProps, action)(create);
