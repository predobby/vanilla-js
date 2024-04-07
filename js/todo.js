const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDo = []; //let을 적어서 원래 있던 목록에 새로운 것들이 추가되도록 수정할 수 있게 한다. 비어있으면 항상 새로운 것만 추가하기 때문에, 원래 있던 자료들을 삭제되고, 새로운 것들만 추가되게 된다.

function saveToDo() {
    localStorage.setItem("todo", JSON.stringify(toDo)) //JSON.stringify는 어떤 코드건 그것을 string으로 만들어 준다. 값을 string으로 저장하고 싶을 때 많이 사용한다. 
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDo = toDo.filter((toDoItem) => toDoItem.id !== parseInt(li.id)); //filter을 사용해서 toDo배열에서 id와 li의 id가 동일한 것을 삭제
    saveToDo(); //위의 saveToDo 함수를 사용함으로써 변경된 값 데이터베이스에 저장
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text; // text를 빼면 오류가 난다.
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
    event.preventDefault();
    if (toDoList.children.length >= 5) {
        alert("더 이상 Todo 항목을 추가할 수 없습니다."); // 사용자에게 알림
        return; // 함수 종료
    };
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id: Date.now()
    };
    toDo.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todo");

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos) //JSON.parse는 단순한 string을 가지고, Javascript가 이해할 수 있는 살아있는 array로 만들 수 있다. Javascript는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해준다.
    toDo = parsedToDos; //이렇게 하면 원래 있던 toDo의 값이 지워지지 않고, 유지되면서 새로운 것만 추가되게 한다.
    parsedToDos.forEach(paintToDo);//forEach는 function을 실행하게 해주는데, 그 array에 있는 각각의 item에 대해서 실행해준다. 하지만 이 array의 item들에 대해 한 개의 funciton만 실행할 수 있게 해준다.
    //이때 위에 함수를 안쓰고 싶으면, parsedToDos.forEach((item) => console.log("this is turn of ", item)); 로 나타내면 똑같다. 이것을 화살표 함수라고 한다.
};
