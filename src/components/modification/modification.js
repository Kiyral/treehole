import { Divider, List, Button } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import axios from 'axios';
import "./modification.css"

const Modification =() => {
    const {userInfo} = useContext(UserContext);
    const [listData, setListData] = useState(null);
    useEffect(() => { 
      if(userInfo && userInfo.nickname){
            axios.post('http://localhost:3000/api/blogs', { "nickname": `${userInfo.nickname}`})
      .then((res) => {
        console.log(res);
        let data = res.data;
        setListData(data);
      })
      .catch((error) => {
        console.error(error);
      });
      }
  },[userInfo])
  const handledelete = (content) => {
    console.log(content._id);
    axios.post('http://localhost:3000/api/blog/delete', { "_id": `${content._id}`})
    .then((res) => {
      alert('删除成功');
      window.location.href=window.location.href;
    })
    .catch((error) => {
      console.error(error);
    });
  }

    return(
        <>
        {listData && 
        <div>
          <Divider orientation="left">{userInfo.nickname}的树洞</Divider>
        <List
          bordered
          dataSource={listData}
          renderItem={(item) => (
            <List.Item className='List-item'>
              {item.content}
              <div style={{float:'right'}}>
              <Button className='modify-button'>修改</Button>
              <Button className='delete-button' danger onClick={() => handledelete(item)}>删除</Button>
              </div>
            </List.Item>
          )}
        /></div>}
      </>
    );
};
export default Modification;