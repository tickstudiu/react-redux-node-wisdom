import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {CreateText} from './create.text';
import {Container, Input, Row, Col, Button} from 'reactstrap';
import {Loader, FormHeaderHerb, JumbotronDescriptionCreate} from '../../components';

class create extends Component {

    state = {
        createLoading: false,
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

    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = () => {
        this.setState({createLoading: true});
        let data = {
            title: this.state.title,
            description: this.state.description,
            benefit: this.state.benefit,
        };
        this.props.postHerb(async () => {
            const formData = new FormData();
            formData.append('herbImage', this.state.image);
            formData.append('herbID', this.props.herbStore.lastHerbID);
            this.props.postImage(async () => {
                await this.setState({createLoading: false});
            }, formData)
        }, data)
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
                            <h5 className="text-capitalize">{staticText.title}<span className="text-danger">*</span></h5>
                            <Input type="text" name="title" placeholder={staticText.placeholderTitle} onChange={handleChange}/>
                            <h5 className="text-capitalize">{staticText.description}<span className="text-danger">*</span></h5>
                            <Input type="textarea" name="description" placeholder={staticText.placeholderDescription} onChange={handleChange}/>
                            <h5 className="text-capitalize">{staticText.benefit}<span className="text-danger">*</span></h5>
                            <Input type="textarea" name="benefit" placeholder={staticText.placeholderBenefit} onChange={handleChange}/>
                            <hr/>
                            <span className="d-flex justify-content-end">
                                <Button color="primary" outline onClick={handleSubmit}>{this.state.createLoading ? staticText.createLoading:staticText.btn}</Button>
                            </span>
                        </Col>
                    </Row>
                    <JumbotronDescriptionCreate/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, herbStore}) => {
    return {
        lang, herbStore
    }
};

export default connect(mapStateToProps, action)(create);
