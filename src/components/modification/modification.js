import { Divider, List, Button, Input, Typography, Space} from 'antd';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import axios from 'axios';
import "./modification.css"

const {TextArea} = Input;
const Modification =() => {
    const {userInfo} = useContext(UserContext);
    const [listData, setListData] = useState(null);
    const [showModify, setShowModify] = useState(false);
    const [modifyData, setModifyData] = useState('');
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
    axios.post('http://localhost:3000/api/blog/delete', { "id": `${content.id}`})
    .then((res) => {
      alert('删除成功');
      window.location.href=window.location.href;
    })
    .catch((error) => {
      console.error(error);
    });
  }
  const handlemodify = () => {
    setShowModify(true);
  }
  const onChange = (e) => {
    setModifyData(e.target.value);
  };
  const submitModification = (content) => {
    if(modifyData){
      axios.post('http://localhost:3000/api/blog/modify', { "id": `${content.id}`, "content": `${modifyData}`})
      .then((res) => {
        alert('修改成功');
        setShowModify(false);
        window.location.href=window.location.href;
      })
      .catch((error) => {
        console.error(error);
      });
    }
    else{
      alert('不能为空!');
    }
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
            <List.Item className='List-item'><Space>
              <Typography.Text mark>
              {item.tag === 'share' ? '分享' :
         item.tag === 'food' ? '美食' :
         item.tag === 'complain' ? '吐槽' :
         item.tag === 'ask' ? '提问':
         item.tag}
              </Typography.Text>
              {item.content}
              </Space>
              <div style={{float:'right'}}>
              <Button className='modify-button' onClick={handlemodify}>修改</Button>
              {showModify && (
                <div className='overlay'>
                  <div  className='modal'>
                                          <TextArea
      showCount
      maxLength={100}
      style={{
        height: 120,
        marginBottom: 24,
      }}
      onChange={onChange}
      placeholder={item.content}
    />
    <Button type="primary" onClick={() => submitModification(item)}>提交</Button>
                  </div>

                </div>
              )}
              <Button className='delete-button' danger onClick={() => handledelete(item)}>删除</Button>
              </div>
            </List.Item>
          )}
        /></div>}
      </>
    );
  };
export default Modification;