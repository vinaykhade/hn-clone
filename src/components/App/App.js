import React from 'react';

import * as Styled from './styles';

import List from '../List';


class App extends React.PureComponent {

    componentDidMount() {
        const { match: {params: {pageNum}}, getNewsFeed} = this.props;
        getNewsFeed({pageNum});
    }

    componentDidUpdate(prevProps) {
        const { getNewsFeed, match: {params: {pageNum}}} = this.props;
        if(prevProps.match.params.pageNum !== pageNum) {
            getNewsFeed({pageNum});  
        }
    }

    render() {
        const { newsFeed } = this.props;  
        const pageNum = this.props.match.params.pageNum || 1;
        return (
            <Styled.Wrapper>
                <Styled.Title>Hacker News Reader</Styled.Title>
                <List {...this.props} stories={newsFeed} pageNum={parseInt(pageNum)}/>
            </Styled.Wrapper>
        );
    }
}

export default App;
