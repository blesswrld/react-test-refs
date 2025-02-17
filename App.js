import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "./bootstrap.min.css"; // подключаем bootstrap.min.css

// Компонент Form, в котором будем работать с рефами
class Form extends Component {
    state = {
        advOpen: false, // Состояние для контроля видимости компонента Msg
    };

    // Метод для переключения состояния advOpen
    handleClick = () => {
        this.setState(({ advOpen }) => ({
            advOpen: !advOpen, // Переключаем состояние, открывая или закрывая Msg
        }));
    };

    myRef = React.createRef(); // Создание рефа для input

    // Компонентный метод, который будет вызван после того, как компонент был смонтирован
    componentDidMount() {
        this.myRef.current.focus(); // Устанавливаем фокус на input с помощью рефа
        setTimeout(() => this.handleClick(), 3000); // Через 3 секунды переключаем состояние advOpen
    }

    // Рендерим форму с полями ввода и textarea
    render() {
        return (
            <Container>
                <form
                    onClick={this.handleClick} // При клике на форму будет переключаться состояние advOpen
                    className="w-50 border mt-5 p-3 m-auto"
                >
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            Email address
                        </label>
                        <input
                            ref={this.myRef} // Фокусируемся на этом input с помощью рефа
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                        >
                            Example textarea
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                        ></textarea>
                    </div>
                    {this.state.advOpen ? ( // Если advOpen true, показываем компонент Msg внутри Portal
                        <Portal>
                            <Msg />
                        </Portal>
                    ) : null}
                </form>
            </Container>
        );
    }
}

// Компонент Portal, который создает новый DOM-узел и рендерит в него дочерние компоненты
const Portal = (props) => {
    const node = document.createElement("div"); // Создаем новый div элемент
    document.body.appendChild(node); // Добавляем этот элемент в body документа

    // Используем ReactDOM.createPortal для рендеринга дочерних компонентов в новый узел
    return ReactDOM.createPortal(props.children, node); // Рендерим дочерние компоненты в новый узел
};

// Компонент Msg, который будет рендериться в новый DOM-узел через Portal
const Msg = () => {
    return (
        <div
            style={{
                width: "500px",
                height: "50px",
                margin: "0 auto",
                backgroundColor: "red",
            }}
        >
            Hello
        </div>
    );
};

// Функция для рендеринга компонента App, который включает в себя Form
function App() {
    return <Form />;
}

export default App;
