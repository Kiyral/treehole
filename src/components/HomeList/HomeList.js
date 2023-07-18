import { Avatar, List, Space } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


/*const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));*/
/*const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);*/
function HomeList(props){
  const [listData, setListData] = useState(null);
    useEffect(() => { 
    console.log(`${props.content}`);
    axios.post('http://localhost:3000/api/blogs', { "tag": `${props.current}`, "content": `${props.content}` })
      .then((res) => {
        let data = res.data;
        data = data.map(({ nickname: title, time: description, ...rest }) => {
          return { title, description, ...rest };
        });
        /*data = data.map(obj => {
            const date = new Date(obj.description);
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
            return { ...obj, description: formattedDate };
          });*/
        setListData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.content, props.current])
return (
  <List
  itemLayout="vertical"
  size="large"
  pagination={{
    onChange: (page) => {
      console.log(page);
    },
    pageSize: 5,
  }}
  dataSource={listData || []}
  renderItem={(item) => (
    <List.Item
      key={item.title}
    >
      <List.Item.Meta
        avatar={<Avatar src={item.avatar} />}
        title={<a href={item.href}>{item.title}</a>}
        /*description={item.description}*/
      />
      {item.content}
    </List.Item>
  )}
/>
)

};
export default HomeList;