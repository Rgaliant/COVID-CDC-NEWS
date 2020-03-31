import React from "react";
import styled from 'styled-components'

const NewsCardBox = styled.div`
  border: 1px solid #fff;
  padding: 5px;
  font-family: tahoma;
  box-shadow: 5px 5px 15px #888;
  background: white;
    `

export default class NewsCard extends React.PureComponent {
  render() {
      const { article } = this.props;
      const title = article.split("<title>")[1].split("</title>")[0]
      const content = article.split("</title>")[1]
      const body = content.split("<description>")[1].split("</description>")[0]
      const pubDate = content.split("<pubDate>")[1].split("</pubDate>")[0]
    const url = content.split('<guid isPermaLink="true">')[1].split("</guid>")[0].replace(/;/g, '&')
      return (
          <NewsCardBox>
          <h3><a href={url}>{title}</a></h3>
          <p>{body}</p>
          <small>{pubDate}</small>
          </NewsCardBox>
      )
  }
}
