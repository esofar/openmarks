import React, { Component } from 'react';
import { Card, Icon, Avatar, Col, Row, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

class TopicList extends Component {
    render() {
        const topics = this.props.topics;

        return (
            <div>
                {topics.map((topic, index) => {
                    return (
                        <div key={index}>
                            <div className={styles.topic}>
                                <Icon type={topic.icon || 'book'} />
                                <span>{topic.name}</span>
                            </div>
                            <Row gutter={16}>
                                {
                                    topic.items.map((item, idx) => {
                                        return (
                                            <Col key={idx} sm={24} md={12} lg={8} xl={6}>
                                                <Card bordered={false}>
                                                    <Card.Meta
                                                        title={<a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                                                        description={
                                                            <Tooltip placement="bottomLeft" title={item.desc}>
                                                                {item.desc}
                                                            </Tooltip>}
                                                        avatar={<Avatar src={item.logo} />}
                                                    />
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    );
                })}
            </div>
        );
    };
}

TopicList.propTypes = {
    topics: PropTypes.array
};

export default TopicList;