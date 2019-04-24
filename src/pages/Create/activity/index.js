import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../../utils/index';
import * as action from '../../../redux/actions/index';
import {ActivityText} from './activity.text';
import {Container, Input, Row, Col, Button} from 'reactstrap';
import {Loader, FormHeaderHerb, JumbotronDescriptionCreate} from '../../../components/index';
import ImageUploader from 'react-images-upload';

class index extends Component {

    state = {
        createLoading: false,
        loading: true,
        search: '',
        image: null,
        gallery: [],
        imagePreviewUrl: '',
        title: '',
        description: '',
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

    handleOnDrop = (picture) => {
        this.setState({
            pictures: picture,
        });
    };

    componentDidMount(){
        this.setState({
            loading: false,
        })
    }

    render() {
        const {image, imagePreviewUrl} = this.state;
        const {fileSelectHandler, handleChange, handleSubmit, handleOnDrop} = this;
        const staticText = tools.checkLanguage(ActivityText);
        if(this.state.loading){
            return <Loader/>
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <FormHeaderHerb fileSelectHandler={fileSelectHandler}
                                            image={image}
                                            imagePreviewUrl={imagePreviewUrl}/>
                        </Col>
                        <Col lg={8} md={12}>
                            <h5 className="text-capitalize my-2">{staticText.title}<span className="text-danger">*</span></h5>
                            <Input type="text" name="title" placeholder={staticText.placeholderTitle} onChange={handleChange}/>
                        </Col>
                        <Col lg={4} md={12}>
                            <h5 className="text-capitalize my-2">{staticText.date}<span className="text-danger">*</span></h5>
                            <Input type="date" name="title" onChange={handleChange}/>
                        </Col>
                        <Col lg={12} md={12}>
                            <h5 className="text-capitalize">{staticText.description}<span className="text-danger">*</span></h5>
                            <Input type="textarea" name="description" placeholder={staticText.placeholderDescription} onChange={handleChange}/>
                            <ImageUploader
                                withIcon
                                withPreview
                                buttonText='Choose images'
                                onChange={handleOnDrop}
                                imgExtension={['.jpg', '.gif', '.png']}
                                maxFileSize={5242880}
                            />
                            <span className="d-flex justify-content-start">
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

export default connect(mapStateToProps, action)(index);
