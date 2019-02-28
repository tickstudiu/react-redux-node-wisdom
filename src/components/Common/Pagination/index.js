import React from 'react';
import {MaxItemPerPage} from  '../../../config';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class pagination extends React.Component {

    state = {
        page: [],
    };

    componentWillMount(){
        const {page} = this.state;
        const {number} = this.props;
        for (let i = 1; i <= parseInt(number/MaxItemPerPage) + 1; i++) {
            page.push(i)
        }
    };

    render() {
        const {herbsPageRoute, current, number} = this.props;
        return (
            <Pagination aria-label="Page navigation">
                <PaginationItem>
                    <PaginationLink previous href="" onClick={() => herbsPageRoute(current ? parseInt(current) === 1 ? 1:parseInt(current) - 1: 1)}/>
                </PaginationItem>

                {
                    this.state.page.map((data, index) => {
                        return(
                            <PaginationItem key={index}>
                                <PaginationLink href="" onClick={() => herbsPageRoute(data)}>
                                    {data}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    })
                }

                <PaginationItem>
                    <PaginationLink next href="" onClick={() => herbsPageRoute(current ? parseInt(current) === parseInt(number/MaxItemPerPage) + 1 ? parseInt(number/MaxItemPerPage) + 1:parseInt(current) + 1: 1)}/>
                </PaginationItem>
            </Pagination>
        );
    }
}