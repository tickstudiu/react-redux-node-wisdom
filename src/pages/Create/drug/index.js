import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../../utils/index';
import * as action from '../../../redux/actions/index';
import {DrugText} from './drug.text';
import {Container, Input, Row, Col, Button, FormText} from 'reactstrap';
import {Loader, FormHeaderHerb, JumbotronDescriptionCreate} from '../../../components/index';
import ImageUploader from 'react-images-upload';

class index extends Component {

    state = {
        createLoading: false,
        loading: true,
        image: null,
        gallery: [],
        shareholders: [{ingredient: "",}],
        imagePreviewUrl: '',
        title: '',
        description: '',
        benefit: '',
        path: ''
    };

    fileSelectHandler = event => {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image: file,
                path: file.name,
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
        const {shareholders} = this.state;
        const formData = new FormData();
        formData.append('drugImage', this.state.image);
        formData.append('path', this.state.path);
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);

        this.props.postDrug(async () => {
            shareholders.map(ingredient => {
                let dataIngredients = {
                    ingredient: ingredient.ingredient,
                    drugID: this.props.drugStore.lastDrugID,
                };
                this.props.postIngredient(async () => {
                }, dataIngredients);
            });

            const formData2 = new FormData();
            this.state.gallery.map(image => {
                formData2.append('drugImage', image);
            });
            formData2.append('drugID', this.props.drugStore.lastDrugID);
            this.props.postMutiImageDrug(async ()=>{
                await this.setState({createLoading: false});
            }, formData2)
        }, formData);
    };

    handleOnDrop = (picture) => {
        this.setState({
            gallery: picture,
        });
    };

    handleShareholderIngredientChange = idx => evt => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return {...shareholder, ingredient: evt.target.value};
        });

        this.setState({shareholders: newShareholders});
    };

    handleAddShareholder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{ingredient: "",}])
        });
    };

    handleRemoveShareholder = idx => () => {
        this.setState({
            shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        });
    };

    componentDidMount(){
        this.setState({
            loading: false,
        })
    }

    render() {
        const {image, imagePreviewUrl} = this.state;
        const {fileSelectHandler, handleChange, handleSubmit, handleOnDrop,
            handleRemoveShareholder, handleAddShareholder, handleShareholderIngredientChange} = this;
        const staticText = tools.checkLanguage(DrugText);
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
                            <h5 className="text-capitalize my-2">{staticText.title}<span className="text-danger">*</span></h5>
                            <Input type="text" name="title" placeholder={staticText.placeholderTitle} onChange={handleChange}/>
                        </Col>
                        <Col lg={6} md={12}>
                            <h5 className="text-capitalize my-2">{staticText.description}<span className="text-danger">*</span></h5>
                            <Input type="textarea" name="description" placeholder={staticText.placeholderDescription} onChange={handleChange}/>
                            <h5 className="text-capitalize d-flex justify-content-between align-items-center my-2">
                                <div>
                                    {staticText.ingredient}<span className="text-danger">*</span>
                                </div>
                                <div>
                                    <Button color="primary" size="sm" outline className="mr-2"
                                            onClick={handleAddShareholder}>
                                        {staticText.add}
                                    </Button>
                                    <Button onClick={handleRemoveShareholder(this.state.shareholders.length - 1)}
                                            size="sm" color="danger" outline>
                                        {staticText.remove}
                                    </Button>
                                </div>
                            </h5>
                            <FormText color="muted mb-2">
                                {staticText.formText}
                            </FormText>
                            {this.state.shareholders.map((shareholder, idx) => (
                                <article className="mb-2" key={idx}>
                                    <Input type="text" name="ingredient" onChange={handleShareholderIngredientChange(idx)} placeholder={'#'+ (idx + 1) + ' ' + staticText.list}/>
                                </article>
                            ))}
                        </Col>
                        <Col lg={6} md={12}>
                            <ImageUploader
                                withIcon
                                withPreview
                                buttonText='Choose images'
                                onChange={handleOnDrop}
                                imgExtension={['.jpg', '.gif', '.png']}
                                maxFileSize={5242880}
                            />
                        </Col>
                        <Col lg={12} md={12}>
                            <Button color="primary" outline onClick={handleSubmit}>{this.state.createLoading ? staticText.createLoading:staticText.btn}</Button>
                        </Col>
                    </Row>
                    <JumbotronDescriptionCreate/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({lang, drugStore}) => {
    return {
        lang, drugStore
    }
};

export default connect(mapStateToProps, action)(index);
