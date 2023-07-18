import { Input, Button, Radio, Divider } from 'antd';
import axios from 'axios';
import { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
const { TextArea } = Input;
const Create = () => {
    const {userInfo} = useContext(UserContext);
    const [newData, setNewData] = useState('');
    const [selectedValue, setSelectedValue] = useState('share');

    const handleRadioChange = (e) => {
        console.log(e.target.value);
      setSelectedValue(e.target.value);
    };
  
    const onChange = (e) => {
      setNewData(e.target.value);
    };
    const submitNewData = () => {
      if(newData){
        axios.post('http://localhost:3000/api/blog/add', { "nickname": `${userInfo.nickname}`, "content": `${newData}`, "tag":`${selectedValue}`})
        .then((res) => {
          alert('提交成功');
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
            <div>
                <Divider orientation="left">写一条树洞吧</Divider>
    <TextArea
    showCount
    maxLength={100}
    style={{
      height: 120,
      marginBottom: 24,
    }}
    onChange={onChange}
  />
      <Radio.Group defaultValue="share" buttonStyle="solid" onChange={handleRadioChange}>
      <Radio.Button value="share">分享</Radio.Button>
      <Radio.Button value="complain">吐槽</Radio.Button>
      <Radio.Button value="ask">提问</Radio.Button>
      <Radio.Button value="food">美食</Radio.Button>
    </Radio.Group>
  <Button type="primary" onClick={() => submitNewData(newData)} style={{marginLeft: '900px', marginTop: '30px', width: '100px'}}>提交</Button>
  </div>
    )
};
export default Create;