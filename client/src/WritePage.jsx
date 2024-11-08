import React, {useState} from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import "./App.css";

function WritePage(){
    const navigate = useNavigate();
    const [values, setValues] = useState({ //values는 값들을 가지고 있는 객체이다. 입력폼으로 받은 데이터들이 들어간다
        title:"",
        cagegory:"",
        ingred:"",
        howto:""
    });
    const {title, category, ingred, howto}= values; //values가 가지고 있는 속성들을 추출해서 각각을 변수에 담아둔다. 오브젝트의 키 역활을 할것이다.

    //입력폼에 값이 입력될때 실행
    const getValue = (e) => {
        const {name, value} = e.target; //입력된 폼의 이름과 값을 폼에서 가져온다.
        setValues({
            ...values, //현재의 values값들을 복사하고 새로운 values값으로 바꾼다. setValues()의 값이 바뀌었기 때문에 useState()가 실행된다.
            [name]:value
        })
    }

    //폼에 입력하고 작성버튼을 눌렀을때 실행되는 함수
    const onSubmit = (e) => {
        e.preventDefault();
        const url = "http://localhost:8400/insert";

        const data = {
            title:title,
            cagegory:category,
            ingred:ingred,
            howto:howto
        };

        const config = {"content-Type":"application/json"};

        Axios.post(url, data, config)
            .then(res => { navigate("/")})
            .catch(err => { console.log(err)})
    }

    const onReset = () => {
        setValues({
            title:"",
            cagegory:"",
            ingred:"",
            howto:""
        })
    }
    return(
        <div className="page-wrap"> 
            <h2>요리등록</h2>
            <form>
                <h3>요리명</h3>
                <input type="text" name="title" value={title} onChange={getValue} />

                <h3>분류</h3>
                <input type="radio" name="category" id="kfood" value={category} onChange={getValue} />
                <input type="radio" name="category" value={category} noChange={getValue} />
                <input type="radio" name="category" value={category} onChange={getValue} />
                <input type="radio" name="category" value={category} onChange={getValue} />

                <h3>재료</h3>
                <textarea name="ingred" value={ingred} onChange={getValue} />

                <h3>만드는 법</h3>
                <textarea name="howto" value={howto} onChange={getValue} />

                <h3>사진</h3>
                <input type="file" name="photo" accept="image/*"  onChange={getValue} />

                <button onClick = {onSubmit}>작성하기</button>
                <button onClick = {onReset}>취소하기</button>
                <button onClick = {() => {navigate("/")}}>홈</button>
            </form>
        </div>
    )
}

export default WritePage;