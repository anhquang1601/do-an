import "./home.css";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKindRoomAction } from "../action/KindRoomAction";
import { Form, Input, Button, Checkbox, message } from "antd";

import { useHistory } from "react-router-dom";
import { postKindRoom } from "../action/KindRoomAction";
import { deleteKindRoom } from "../action/KindRoomAction";
import { updateKindRoom } from "../action/KindRoomAction";
const Home = () => {
/*   const [state, setstate] = useState(); */
  const [name, setName] = useState("");
  const [id,setID]=useState("");
 /*  const [isloading,setisloading]=useState(getCookie("token")!=="") */
 
  const [form] = Form.useForm();
  const dispatch = useDispatch();
   let history = useHistory();
  const Kindroom = useSelector(
    (state) => state.kindRoomReducer.kindroom
  );
  const err=useSelector(
    (state)=>state.kindRoomReducer.error
  )
  console.log("errrrr",err)
  const isloading=getCookie("token")

  useEffect(() => {
    dispatch(getKindRoomAction())
  },[]);
  
  async function handleLogin(values, props) {
    dispatch(postKindRoom(values))
  }
  function deleteKindRoomIndex(id){
    console.log("id",id)
    dispatch(deleteKindRoom(id))
    if(err){
      message.error("khoong du quyen xoa")
    }
  }
  function updateKindRoom1(note){
    setName(note.tenloaiphong)
    setID(note.maloaiphong)
  }
  function onSave(){
    const payload={id,name}
   dispatch(updateKindRoom(payload))
  }
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  return (
    /*  <div className="grip wide">
   
      <div className="row">
        <div className="col l-2 m-4 c-12">
        </div>
        <div className="col l-2 m-4 c-12">
          <h2>l-2 m-4 c-12</h2>
        </div>
        <div className="col l-2 m-4 c-12">
          <h2>l-2 m-4 c-12</h2>
        </div>
        <div className="col l-2 m-4 c-12">
          <h2>l-2 m-4 c-12</h2>
        </div>
        <div className="col l-2 m-4 c-12">
          <h2>l-2 m-4 c-12</h2>
        </div>
        <div className="col l-2 m-4 c-12">
          <h2>l-2 m-4 c-12</h2>
        </div>
        <div className="col l-2 m-4 c-12">
          <h2>l-2 m-4 c-12</h2>
        </div>
      </div>
      <div className="row">
        <div className="col l-3 m-4 c-6">
          <h2>l-0 m-0 c-0</h2>
        </div>
        <div className="col l-3 m-3 c-6">
          <h2>l-0 m-0 c-0</h2>
        </div>
        <div className="col l-3 m-3 c-6">
          <h2>l-0 m-0 c-0</h2>
        </div>
        <div className="col l-3 m-3 c-6">
          <h2>l-0 m-0 c-0</h2>
        </div>
        <div className="col l-3 m-3 c-6">
          <h2>l-0 m-0 c-0</h2>
        </div>
        <div className="col l-3 m-3 c-6">
          <h2>l-0 m-0 c-0</h2>
        </div>
        <div className="col l-3 m-3 c-6">
          <h2>l-0 m-0 c-0</h2>
        </div>
        <div className="col l-3 m-3 c-6">
          <h2>l-0 m-0 c-0</h2>
        </div>
      </div>
    </div> */
   <div>
     {
       isloading? <div>
       <Form
         form={form}
         name="basic"
         labelCol={{ span: 4 }}
         wrapperCol={{ span: 8 }}
         initialValues={{ remember: true }}
         onFinish={handleLogin}
         autoComplete="off"
       >
         <Form.Item
           label="maloaiphong"
           name="maloaiphong"
           rules={[{ required: true, message: "Please input your username!" }]}
         >
           <Input />
         </Form.Item>
 
         <Form.Item
           label="tenloaiphong"
           name="tenloaiphong"
           rules={[{ required: true, message: "Please input your password!" }]}
         >
           <Input />
         </Form.Item>
 
         <Form.Item
           name="remember"
           valuePropName="checked"
           wrapperCol={{ offset: 8, span: 16 }}
         >
           <Checkbox>Remember me</Checkbox>
         </Form.Item>
 
         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
           <Button type="primary" htmlType="submit">
             Đăng Nhập
           </Button>
           <Button htmlType="button" onClick={() => history.push("/register")}>
             Đăng Ký
           </Button>
         </Form.Item>
       </Form>
       <Input style={{width:200}} value={name} onChange={(e)=>setName(e.target.value)}/>
       <Button onClick={()=>onSave()}>Save</Button>
       {console.log("Kiki",Kindroom)}
        {Kindroom ? (
         Kindroom.map((note) => {
           return( 
             <div key={note._id} style={{display:1,flexDirection:'row'}}>
               <text >{note.tenloaiphong}</text>
               <button  onClick={()=>deleteKindRoomIndex(note._id)}>xóa</button>
               <button onClick={()=>updateKindRoom1(note)}>update</button>
             </div>
           );
         })
       ) : (
         <text>isLoading</text>
       )} 
     </div>: history.push("/")
     }
   </div>
  );
};
export default  Home;
