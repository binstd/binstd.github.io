import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

const grommetPath = 'http://grommet.github.io';

export default class Blogs extends Component {
  _onClickCard(path, event) {
    event.preventDefault();
    window.location.href = path;
  }

  render() {
    return (
      <Tiles size="medium" justify="center">
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, '/eth')}
          direction="column"
          thumbnail="https://programmerinnfile.b0.upaiyun.com/community/10001/20180412/FNRvTz6GZ8.jpg"
          label=""
          heading="普罗米修斯是binstd"
          link={<Anchor href={'/eth'} primary={true}
            label="查看详情" icon={<LinkNextIcon />} />}>
          <Paragraph margin="small">
            {`普罗米修斯是binstd的为开发者提供的区块链解决方案`}
          </Paragraph>
        </Card>
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="https://programmerinnfile.b0.upaiyun.com/community/10001/20180412/FNRvTz6GZ8.jpg"
          label=""
          heading="普罗米修斯是binstd"
          link={<Anchor href={grommetPath} primary={true}
            label="查看详情" icon={<LinkNextIcon />} />}>
          <Paragraph margin="small">
            {`普罗米修斯是binstd的为开发者提供的区块链解决方案`}
          </Paragraph>
        </Card>
        <Card
          textSize="small"
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="https://programmerinnfile.b0.upaiyun.com/community/10001/20180412/FNRvTz6GZ8.jpg"
          label=""
          heading="普罗米修斯是binstd"
          link={<Anchor href={grommetPath} primary={true}
            label="查看详情" icon={<LinkNextIcon />} />}>
          <Paragraph margin="small">
            {`普罗米修斯是binstd的为开发者提供的区块链解决方案`}
          </Paragraph>
        </Card>
      </Tiles>
    );
  }
};
